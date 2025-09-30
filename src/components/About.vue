<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right">
          <img :src="tutorImage" class="img-fluid rounded-circle" alt="Tutor Image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-left">
          <h2 class="display-5">About Me</h2>
          <p class="lead">
            I'm a passionate and dedicated tutor with over 8 years of experience empowering students from 1st to 12th grade to achieve their full academic potential. My approach is founded on the belief that every student can succeed with the right support and a personalized learning plan.
          </p>
          <p>
            I specialize in creating a supportive and engaging environment where students feel comfortable asking questions and exploring new concepts. My goal is to not only improve grades but also to build lasting confidence and a genuine love for learning that extends beyond the classroom.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import tutorImage from '../assets/1719041128170.jpeg';
</script>

<style scoped>
#about img {
  border: 5px solid var(--border-color);
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}
</style>
