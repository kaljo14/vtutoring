<template>
  <section id="services" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">My Services</h2>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-calculator-fill fs-1 text-primary"></i>
              <h3 class="card-title mt-3">Mathematics</h3>
              <p class="card-text">From foundational arithmetic and algebra to advanced calculus and statistics, I make math accessible and engaging.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-book-fill fs-1 text-primary"></i>
              <h3 class="card-title mt-3">English & Reading</h3>
              <p class="card-text">Enhance reading comprehension, essay writing, grammar, and critical analysis of literature.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-lightbulb-fill fs-1 text-primary"></i>
              <h3 class="card-title mt-3">Science</h3>
              <p class="card-text">Dive into biology, chemistry, and physics with hands-on examples and clear explanations.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-award-fill fs-1 text-primary"></i>
              <h3 class="card-title mt-3">Test Preparation</h3>
              <p class="card-text">Strategic preparation for standardized tests, including SAT, ACT, and more, to help you achieve your best score.</p>
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
</style>
