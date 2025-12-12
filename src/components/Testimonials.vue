<template>
  <section id="testimonials" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">What Parents Are Saying</h2>
      <div v-if="reviews.length" class="row">
        <div v-for="(review, index) in reviews" :key="index" class="col-md-6" data-aos="fade-up" :data-aos-delay="100 * (index + 1)">
          <div class="card mb-4">
            <div class="card-body">
              <div class="rating mb-2">
                <i v-for="star in 5" :key="star" :class="['bi', star <= review.rating ? 'bi-star-fill' : 'bi-star', 'star']"></i>
              </div>
              <p class="card-text">"{{ review.review }}"</p>
              <footer class="blockquote-footer">{{ review.name }}</footer>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <p>No reviews yet. Be the first to leave a review!</p>
      </div>

      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
        <a href="https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6viby15YIHwbV6wd7pjmBhhIQPDMidfkWoi7-hfmMwADcmCD1lFjxT4uag8I7kaGIxbmBIR5tu1kQx3SmbzWjOMfCIF&q=VikTutors+Reviews#lrd=0x6d60ccc61463a6f:0xc12f7b4e7b59340b,3" target="_blank" rel="noopener noreferrer" class="btn btn-special btn-lg px-5 py-3 rounded-pill fw-bold shadow">
          <i class="bi bi-google me-2"></i> Leave a Review
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      reviews: []
    };
  }
};
</script>

<style scoped>
.card {
  border-left: 5px solid var(--accent-teal);
  height: 100%;
}

.rating .star {
  color: #ffc107;
  font-size: 1.2rem;
}
</style>