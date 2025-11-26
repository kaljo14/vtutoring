<template>
  <section id="tutors" class="py-5">
    <div class="container">
      <h2 class="text-center display-5 mb-5" data-aos="fade-up">Our Tutors</h2>
      
      <div class="row justify-content-center">
        <!-- Tutor 1: Desi -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <div class="tutor-placeholder rounded-circle bg-light d-flex align-items-center justify-content-center">
                  <i class="bi bi-person-fill fs-1 text-muted"></i>
                </div>
              </div>
              <h3 class="card-title fw-bold mb-2">Desi</h3>
              <p class="text-muted mb-3"><small>Biology Graduate</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple me-2 mb-2">BA</span>
                <span class="badge bg-custom-purple mb-2">MA</span>
              </div>
              <p class="card-text text-muted small mb-3">Passionate about making biology accessible and engaging for all students.</p>
              <div class="price">
                <span class="h5 text-primary fw-bold">Contact for pricing</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutor 2: Steven -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <div class="tutor-placeholder rounded-circle bg-light d-flex align-items-center justify-content-center">
                  <i class="bi bi-person-fill fs-1 text-muted"></i>
                </div>
              </div>
              <h3 class="card-title fw-bold mb-2">Steven</h3>
              <p class="text-muted mb-3"><small>Education Specialist</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple me-2 mb-2">BA</span>
                <span class="badge bg-custom-purple mb-2">MA</span>
              </div>
              <p class="card-text text-muted small mb-3">Dedicated to helping students achieve their academic goals with personalized support.</p>
              <div class="price">
                <span class="h5 text-primary fw-bold">Contact for pricing</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutor 3: Viki -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <div class="tutor-placeholder rounded-circle bg-light d-flex align-items-center justify-content-center">
                  <i class="bi bi-person-fill fs-1 text-muted"></i>
                </div>
              </div>
              <h3 class="card-title fw-bold mb-2">Viki</h3>
              <p class="text-muted mb-3"><small>Structural Engineer</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple me-2 mb-2">BA in Civil Engineering</span>
                <span class="badge bg-custom-purple mb-2">MA in Structural Engineering</span>
              </div>
              <p class="card-text text-muted small mb-3">Bringing real-world engineering experience to make math and science come alive.</p>
              <div class="price">
                <span class="h5 text-primary fw-bold">$100/hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tutors',
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
