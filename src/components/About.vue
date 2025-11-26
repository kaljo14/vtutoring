<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right">
          <img :src="tutorImage" class="img-fluid rounded-circle" alt="Tutor Image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-left">
          <h2 class="display-4 fw-bold text-theme-primary mb-2">Viktoriya</h2>
          <p class="h5 text-muted mb-4 text-uppercase ls-1">Owner & Structural Engineer</p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <span class="badge rounded-pill bg-theme-primary px-3 py-2"><i class="bi bi-mortarboard-fill me-2"></i> Bachelors in Civil Engineering</span>
            <span class="badge rounded-pill bg-custom-purple px-3 py-2"><i class="bi bi-mortarboard-fill me-2"></i> Masters in Structural Engineering</span>
          </div>

          <figure class="mb-4 border-start border-4 border-theme-primary ps-3">
            <blockquote class="blockquote">
              <p class="mb-0 fst-italic text-muted">"I am a structural engineer who is very passionate about teaching students."</p>
            </blockquote>
          </figure>

          <p class="lead">
             All of my students have excelled in their courses and always come with happiness and passion to tutoring sessions.
          </p>
          <p>
            My experience includes working at Kumon Education Centre for two years in early childhood math and reading, being a swim coach, and a private tutor for six years now. What separates me from other tutors is the energy that I bring to the studies to really motivate them on the subject. For instance, in Math, I can show them how what they are learning matters and is applied to the world. I graduated Stevenson’s High School early with a 4.0 GPA.
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

.text-theme-primary {
  color: var(--primary-color) !important;
}

.bg-theme-primary {
  background-color: var(--primary-color) !important;
  color: #fff;
}

.bg-theme-secondary {
  background-color: var(--secondary-color) !important;
  color: #fff;
}

.border-theme-primary {
  border-color: var(--primary-color) !important;
}

.bg-custom-purple {
  background-color: #AE8AF0 !important;
  color: #fff;
}
</style>
