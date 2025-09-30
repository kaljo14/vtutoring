<template>
  <section id="testimonials" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">What Parents Are Saying</h2>
      <div class="row">
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="card mb-4">
            <div class="card-body">
              <p class="card-text">"My daughter's confidence in math has soared since she started working with Viki. Her grades have improved dramatically!"</p>
              <footer class="blockquote-footer">Sarah, Parent</footer>
            </div>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="card mb-4">
            <div class="card-body">
              <p class="card-text">"The personalized attention and engaging lessons have made a huge difference for my son. He actually looks forward to his tutoring sessions."</p>
              <footer class="blockquote-footer">John, Parent</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
};
</script>

<style scoped>
.card {
  border-left: 5px solid var(--accent-teal);
}
</style>
