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
  },
  async mounted() {
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`);
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.reviews = data.reviews.filter(review => review.status === 'approved');
    } catch (error) {
      console.error('There was an error fetching the reviews:', error);
    }
  }
};
</script>

<style scoped>
.card {
  border-left: 5px solid var(--accent-teal);
}

.rating .star {
  color: #ffc107;
  font-size: 1.2rem;
}
</style>
