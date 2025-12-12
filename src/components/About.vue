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

          <p class="text-muted mb-3">
            Viktoriya graduated from Adlai Stevenson High School with a perfect 4.0 GPA and continued her education at the Illinois Institute of Technology. She started teaching at Kumon Education Center at age 15, where she worked for two years, and also served as a swimming coach. For the past six years, she has been a private tutor for high school math students in the Northern Illinois Suburbs, including students from Adlai Stevenson, Libertyville, Vernon Hills, and Mundelein High Schools. All of her students have excelled in their courses and approach tutoring sessions with enthusiasm.
          </p>

          <p class="text-muted">
            What separates Viktoriya from other tutors is the energy she brings to motivate students. Her passion for math helps students realize why learning matters and how it applies to the real world.
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
