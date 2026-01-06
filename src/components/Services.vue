<template>
  <section id="services" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">My Services</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 justify-content-center">
        <div class="col mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-calculator-fill fs-1 text-custom-purple"></i>
              <h3 class="card-title mt-3">Mathematics</h3>
              <div class="card-text">
                <ul class="list-unstyled">
                  <li>Middle School Math</li>
                  <li>Algebra 1</li>
                  <li>Geometry</li>
                  <li>Algebra 2</li>
                  <li>Precalculus</li>
                  <li>AP Calculus</li>
                  <li class="fst-italic small mt-2">*Honors classes included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-book-fill fs-1 text-custom-purple"></i>
              <h3 class="card-title mt-3">English & Reading</h3>
              <p class="card-text">Enhance reading comprehension, essay writing, grammar, and critical analysis of literature.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-lightbulb-fill fs-1 text-custom-purple"></i>
              <h3 class="card-title mt-3">Science</h3>
              <div class="card-text">
                <ul class="list-unstyled">
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-award-fill fs-1 text-custom-purple"></i>
              <h3 class="card-title mt-3">College Applications</h3>
              <p class="card-text">Helping students with college applications and understanding what career they want in the future.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" data-aos="fade-up" data-aos-delay="500">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-laptop-fill fs-1 text-custom-purple"></i>
              <h3 class="card-title mt-3">Computer Science</h3>
              <div class="card-text">
                <ul class="list-unstyled">
                  <li>Programming </li>
                  <li>Algorithms </li>
                  <li>Cybersecurity </li>
                </ul>
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
  name: 'Services',
};
</script>

<style scoped>
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-10px);
}
.card-title {
  color: var(--primary-color);
}
.text-custom-purple {
  color: #AE8AF0 !important;
}
</style>
