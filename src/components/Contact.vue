<template>
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">Book a Session</h2>
      <div class="row justify-content-center" data-aos="fade-up">
        <div class="col-12 col-md-11 col-lg-10 col-xl-8 px-2 px-md-3">
          <!-- Loading skeleton -->
          <div v-if="isLoading" class="cal-loading-skeleton">
            <div class="loading-spinner">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading calendar...</span>
              </div>
              <p class="mt-3 text-muted">Loading calendar...</p>
            </div>
          </div>
          
          <!-- Cal.com embed -->
          <div id="my-cal-inline" :class="{ 'cal-hidden': isLoading }" class="cal-embed-container"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Initialize Cal namespace before loading script
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  // Initialize Cal after namespace is set up
  Cal("init", { origin: "https://cal.com" });

  Cal("inline", {
    elementOrSelector: "#my-cal-inline",
    calLink: "viktutors/30min",
    layout: "month_view",
    config: {
      layout: "month_view",
      theme: "light",
      locale: "en"
    }
  });

  Cal("ui", {
    "hideEventTypeDetails": false, // Show event details so users see the 30min meeting
    "layout": "month_view",
    "theme": "light",
    "styles": {
      "branding": {
        "brandColor": "#000000"
      }
    }
  });

  // Watch for calendar to load and hide spinner
  const observer = new MutationObserver((mutations) => {
    const calContainer = document.getElementById('my-cal-inline');
    if (calContainer && calContainer.children.length > 0) {
      setTimeout(() => {
        isLoading.value = false;
      }, 500); // Small delay for smooth transition
      observer.disconnect();
    }
  });

  const calElement = document.getElementById('my-cal-inline');
  if (calElement) {
    observer.observe(calElement, { childList: true, subtree: true });
  }

  // Fallback: Hide loading after 5 seconds even if observer doesn't fire
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});
</script>

<style scoped>
.cal-embed-container {
  width: 100%;
  min-height: 700px;
  overflow: visible;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .cal-embed-container {
    min-height: 600px;
  }
  
  .cal-loading-skeleton {
    min-height: 600px !important;
  }
}

.cal-loading-skeleton {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  text-align: center;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

#my-cal-inline {
  transition: opacity 0.3s ease-in-out;
}

.cal-hidden {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}
</style>
