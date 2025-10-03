<template>
  <Header />
  <div class="review-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="review-form-container">
            <h1 class="text-center mb-4">Leave a Review</h1>
            <p class="text-center text-muted mb-5">We'd love to hear about your experience with our services!</p>
            
            <form @submit.prevent="submitReview" class="review-form">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="name" class="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    v-model="form.name" 
                    required
                    placeholder="Enter your full name"
                  >
                </div>
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="form.email" 
                    required
                    placeholder="Enter your email"
                  >
                </div>
              </div>
              
              <div class="mb-3">
                <label for="rating" class="form-label">Rating *</label>
                <div class="rating-input">
                  <div class="stars">
                    <i 
                      v-for="star in 5" 
                      :key="star"
                      :class="['bi', star <= form.rating ? 'bi-star-fill' : 'bi-star', 'star']"
                      @click="setRating(star)"
                    ></i>
                  </div>
                  <span class="rating-text">{{ getRatingText(form.rating) }}</span>
                </div>
              </div>
              
              <div class="mb-3">
                <label for="service" class="form-label">Service Used</label>
                <select class="form-select" id="service" v-model="form.service">
                  <option value="">Select a service</option>
                  <option value="tutoring">Tutoring</option>
                  <option value="consultation">Consultation</option>
                  <option value="workshop">Workshop</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mb-4">
                <label for="review" class="form-label">Your Review *</label>
                <textarea 
                  class="form-control" 
                  id="review" 
                  rows="5" 
                  v-model="form.review" 
                  required
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>
              
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg px-5" :disabled="isSubmitting">
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  {{ isSubmitting ? 'Submitting...' : 'Submit Review' }}
                </button>
              </div>
            </form>
            
            <div v-if="submitted" class="alert alert-success mt-4 text-center">
              <i class="bi bi-check-circle-fill me-2"></i>
              Thank you for your review! We appreciate your feedback.
            </div>
            
            <div v-if="error" class="alert alert-danger mt-4 text-center">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Review',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        rating: 0,
        service: '',
        review: ''
      },
      isSubmitting: false,
      submitted: false,
      error: null
    }
  },
  methods: {
    setRating(rating) {
      this.form.rating = rating
    },
    getRatingText(rating) {
      const texts = {
        0: 'Select a rating',
        1: 'Poor',
        2: 'Fair',
        3: 'Good',
        4: 'Very Good',
        5: 'Excellent'
      }
      return texts[rating] || ''
    },
    async submitReview() {
      // Validate form before submission
      if (this.form.rating === 0) {
        this.error = 'Please select a rating before submitting.';
        setTimeout(() => {
          this.error = null;
        }, 5000);
        return;
      }
      
      this.isSubmitting = true
      this.error = null
      
      try {
        // Prepare the payload to match your working cURL exactly
        const payload = {
          email: this.form.email,
          name: this.form.name,
          rating: this.form.rating,
          review: this.form.review,
          service: this.form.service || "tutoring", // Default to tutoring if not specified
          timestamp: new Date().toISOString()
        }
        
        console.log('Submitting review with payload:', payload)
        
        // Make API call to your gateway
        const response = await fetch(`${API_BASE_URL}/reviews`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
        
        if (!response.ok && response.status !== 202) {
          const errorText = await response.text()
          console.error('API Error Response:', errorText)
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }
        
        if (response.status !== 202) {
          const result = await response.json()
          console.log('Review submitted successfully:', result)
        }
        
        this.isSubmitting = false
        this.submitted = true
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.form = {
            name: '',
            email: '',
            rating: 0,
            service: '',
            review: ''
          }
          this.submitted = false
        }, 3000)
        
      } catch (error) {
        console.error('Error submitting review:', error)
        this.isSubmitting = false
        this.error = 'Sorry, there was an error submitting your review. Please try again.'
        
        // Clear error after 5 seconds
        setTimeout(() => {
          this.error = null
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.review-page {
  min-height: calc(100vh - 56px);
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-top: 56px;
}

.review-form-container {
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.review-form h1 {
  color: #333;
  font-weight: 700;
  margin-bottom: 1rem;
}

.rating-input {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stars {
  display: flex;
  gap: 0.5rem;
}

.star {
  font-size: 1.5rem;
  color: #ffc107;
  cursor: pointer;
  transition: all 0.2s ease;
}

.star:hover {
  transform: scale(1.1);
}

.rating-text {
  font-weight: 500;
  color: #666;
}

.form-control, .form-select {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.alert-success {
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  font-weight: 500;
}

.alert-danger {
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
  color: white;
  font-weight: 500;
}

@media (max-width: 768px) {
  .review-form-container {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .rating-input {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
