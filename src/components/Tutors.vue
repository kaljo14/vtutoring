<template>
  <section id="tutors" class="py-5">
    <div class="container">
      <h2 class="text-center display-5 mb-5" data-aos="fade-up">Our Tutors</h2>
      
      <div class="row justify-content-center">
        <!-- Tutor 1: Dessi -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <img :src="desiImage" class="rounded-circle w-100 h-100 object-fit-cover" alt="Dessi">
              </div>
              <h3 class="card-title fw-bold mb-2">Dessi</h3>
              <p class="text-muted mb-3"><small>Elementary Education Graduate</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple mb-2">BA in Elementary Education</span>
              </div>
              <p class="card-text text-muted small mb-3">
                Hi, I’m Dessi! I hold a degree in Elementary Education from Northeastern University and have taught both in Europe and the U.S. I’m fluent in French, Italian, and Bulgarian, and I specialize in creating supportive, student-centered lessons tailored to individual needs.
                <br><br>
                My experience spans early learners through adults, with a focus on language development, writing skills, and building academic confidence.
                <br><br>
                If you’re seeking a reliable, patient tutor with international experience and a flexible, personalized approach, I’d be happy to support your learning goals.
              </p>
              <div class="price">
                <span class="h5 text-primary fw-bold">$55/hour</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutor 3: Viki -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <img :src="vikiImage" class="rounded-circle w-100 h-100 object-fit-cover" alt="Viki">
              </div>
              <h3 class="card-title fw-bold mb-2">Viki</h3>
              <p class="text-muted mb-3"><small>Structural Engineer</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple me-2 mb-2">BA in Civil Engineering</span>
                <span class="badge bg-custom-purple mb-2">MA in Structural Engineering</span>
              </div>
              <p class="card-text text-muted small mb-3">Bringing real-world engineering experience to make math and science come alive.</p>
              <div class="price">
                <span class="h5 text-primary fw-bold">$55/hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import desiImage from '../assets/desi.jpeg';
import vikiImage from '../assets/1719041128170.jpeg';

export default {
  name: 'Tutors',
  data() {
    return {
      desiImage,
      vikiImage
    };
  }
};
</script>

<style scoped>
.tutor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tutor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.tutor-image-wrapper {
  width: 150px;
  height: 150px;
}

.tutor-placeholder {
  width: 150px;
  height: 150px;
  border: 3px solid var(--border-color);
}

.bg-custom-purple {
  background-color: #AE8AF0 !important;
  color: #fff;
}

.card-title {
  color: var(--primary-color);
}

.price {
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}
</style>
