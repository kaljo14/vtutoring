<template>
  <section id="hero" class="d-flex align-items-center text-center" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="display-3" data-aos="fade-up">Ignite a Passion for Learning</h1>
      <h2 class="lead" data-aos="fade-up" data-aos-delay="100">Expert 1-on-1 tutoring designed to build confidence and achieve academic success.</h2>
      <a href="#contact" class="btn btn-special btn-lg mt-4" data-aos="fade-up" data-aos-delay="200">Book a Free Consultation</a>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/Gemini_Generated_Image_tgxag9tgxag9tgxa.png';
</script>

<style scoped>
#hero {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 1;
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
