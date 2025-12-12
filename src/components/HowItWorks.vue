<template>
  <section id="how-it-works" class="py-5 bg-light-subtle">
    <div class="container">
      <h2 class="text-center display-5 mb-5" data-aos="fade-up">How It Works</h2>
      
      <div class="position-relative">
        <!-- Connecting Line (Vertical) -->
        <div class="d-none d-md-block position-absolute start-50 translate-middle-x" style="z-index: 0; top: 0; bottom: 0; width: 4px;">
          <div class="h-100 border-start border-4 border-theme-primary opacity-25"></div>
        </div>

        <!-- Step 1: Circle Left, Text Right -->
        <div class="row align-items-center mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <div class="col-md-6 text-center text-md-end order-1 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end">
            <div class="step-circle bg-white shadow-sm position-relative z-1 text-center p-4 d-flex flex-column justify-content-center align-items-center">

              <div class="icon-wrapper mb-3 text-theme-primary bg-theme-light rounded-circle d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
                <i class="bi bi-calendar-check-fill display-6"></i>
              </div>
              <h4 class="fw-bold mb-2 fs-5">Schedule Free Session</h4>
              <p class="text-muted mb-0 small">Discuss your goals and interests to see how we can help.</p>
            </div>
          </div>
          <div class="col-md-6 order-2 text-center text-md-start">
            <div class="description-box p-4 d-flex align-items-start">
              <div class="step-number me-3 text-theme-primary display-4 fw-bold" style="line-height: 1;">1</div>
              <p class="lead text-muted mb-0">Schedule a phone call to help us understand more about the students goals and discuss the schedule desired.</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Circle Left, Text Right -->
        <div class="row align-items-center mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="col-md-6 text-center text-md-end order-1 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end">
            <div class="step-circle bg-white shadow-sm position-relative z-1 text-center p-4 d-flex flex-column justify-content-center align-items-center">

              <div class="icon-wrapper mb-3 text-theme-secondary bg-theme-light-secondary rounded-circle d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
                <i class="bi bi-people-fill display-6"></i>
              </div>
              <h4 class="fw-bold mb-2 fs-5">Match with Tutor</h4>
              <p class="text-muted mb-0 small">We match you with a tutor that fits your learning style.</p>
            </div>
          </div>
          <div class="col-md-6 order-2 text-center text-md-start">
            <div class="description-box p-4 d-flex align-items-start">
              <div class="step-number me-3 text-theme-secondary display-4 fw-bold" style="line-height: 1;">2</div>
              <p class="lead text-muted mb-0">You match with a tutor and start your first session.</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Circle Left, Text Right -->
        <div class="row align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <div class="col-md-6 text-center text-md-end order-1 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end">
            <div class="step-circle bg-white shadow-sm position-relative z-1 text-center p-4 d-flex flex-column justify-content-center align-items-center">

              <div class="icon-wrapper mb-3 text-theme-primary bg-theme-light rounded-circle d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
                <i class="bi bi-check-circle-fill display-6"></i>
              </div>
              <h4 class="fw-bold mb-2 fs-5">Start & Evaluate</h4>
              <p class="text-muted mb-0 small">Have your first session, evaluate the fit, and discuss the plan.</p>
            </div>
          </div>
          <div class="col-md-6 order-2 text-center text-md-start">
            <div class="description-box p-4 d-flex align-items-start">
              <div class="step-number me-3 text-theme-primary display-4 fw-bold" style="line-height: 1;">3</div>
              <p class="lead text-muted mb-0">After the session we ask both the tutor and the student if it is a good fit for both sides. This helps us make any necessary adjustments and to make sure you are on the right path to achieving your goals. We are flexible and hassle free!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
};
</script>

<style scoped>
.text-theme-primary {
  color: var(--primary-color) !important;
}

.bg-theme-primary {
  background-color: var(--primary-color) !important;
  color: #fff;
}

.bg-theme-light {
  background-color: rgba(174, 138, 240, 0.1); /* Light version of primary color #13274C */
}

.text-theme-secondary {
  color: var(--secondary-color) !important;
}

.bg-theme-secondary {
  background-color: var(--secondary-color) !important;
  color: #fff;
}

.bg-theme-light-secondary {
  background-color: rgba(74, 74, 96, 0.1); /* Light version of secondary color */
}

.border-theme-primary {
  border-color: var(--primary-color) !important;
}

.step-circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-circle:hover {
  transform: scale(1.05);
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

@media (max-width: 991.98px) {
  .step-circle {
    width: 280px;
    height: 280px;
  }
}
</style>
