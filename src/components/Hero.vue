<template>
  <section id="hero" class="d-flex align-items-center text-center">
    <div class="hero-bg-wrapper">
      <img
        :src="heroImage"
        alt="Hero Background"
        class="hero-bg-image"
        :class="{ 'is-loaded': isImageLoaded }"
        @load="onImageLoad"
        loading="eager"
      />
      <div class="hero-overlay"></div>
    </div>
    <div class="container hero-content">
      <h1 class="display-3" data-aos="fade-up">Ignite a Passion for Learning</h1>
      <h2 class="lead" data-aos="fade-up" data-aos-delay="100">Expert 1-on-1 tutoring designed to build confidence and achieve academic success.</h2>
      <a href="#contact" class="btn btn-special btn-lg mt-4" data-aos="fade-up" data-aos-delay="200">Book a Free Consultation</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import heroImage from '../assets/Gemini_Generated_Image_tgxag9tgxag9tgxa.png';

const isImageLoaded = ref(false);

const onImageLoad = () => {
  isImageLoaded.value = true;
};
</script>

<style scoped>
#hero {
  position: relative;
  height: 100vh;
  /* Use a dark fallback color that matches the overlay/image tone */
  background-color: #1a1a1a; 
  color: white;
  overflow: hidden;
}

.hero-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
  /* Ensure optimization */
  display: block;
}

.hero-bg-image.is-loaded {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1; /* Overlay sits on top of image */
}

.hero-content {
  position: relative;
  z-index: 2; /* Content sits on top of overlay */
}

#hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#hero h2 {
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
