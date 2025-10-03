<template>
  <Header />
  <div class="admin-page">
    <div class="container">
      <!-- Login Form -->
      <div v-if="!isAuthenticated" class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="login-container">
            <h2 class="text-center mb-4">Admin Login</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="username" 
                  v-model="loginForm.username" 
                  required
                  placeholder="Enter username"
                >
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password" 
                  v-model="loginForm.password" 
                  required
                  placeholder="Enter password"
                >
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg w-100" :disabled="isLoggingIn">
                  <span v-if="isLoggingIn" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  {{ isLoggingIn ? 'Logging in...' : 'Login' }}
                </button>
              </div>
              <div v-if="loginError" class="alert alert-danger mt-3 text-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                {{ loginError }}
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Admin Dashboard -->
      <div v-else>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1>Review Management</h1>
          <button @click="logout" class="btn btn-outline-danger">
            <i class="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>

        <!-- Stats Cards -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="stat-content">
                <h3>{{ stats.total }}</h3>
                <p>Total Reviews</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div class="stat-icon pending">
                <i class="bi bi-clock-fill"></i>
              </div>
              <div class="stat-content">
                <h3>{{ stats.pending }}</h3>
                <p>Pending</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div class="stat-icon approved">
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div class="stat-content">
                <h3>{{ stats.approved }}</h3>
                <p>Approved</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div class="stat-icon rejected">
                <i class="bi bi-x-circle-fill"></i>
              </div>
              <div class="stat-content">
                <h3>{{ stats.rejected }}</h3>
                <p>Rejected</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Reviews Table -->
        <div class="reviews-container">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3>Reviews</h3>
            <div class="filter-buttons">
              <button 
                v-for="filter in filters" 
                :key="filter.value"
                :class="['btn', 'btn-sm', filter.active ? 'btn-primary' : 'btn-outline-primary']"
                @click="setFilter(filter.value)"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>

          <div v-if="isLoading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading reviews...</p>
          </div>

          <div v-else-if="filteredReviews.length === 0" class="text-center py-5">
            <i class="bi bi-inbox display-1 text-muted"></i>
            <p class="text-muted">No reviews found</p>
          </div>

          <div v-else class="reviews-list">
            <div v-for="review in filteredReviews" :key="review.id" class="review-card">
              <div class="review-header">
                <div class="review-info">
                  <h5>{{ review.name }}</h5>
                  <p class="text-muted mb-1">{{ review.email }}</p>
                  <div class="rating">
                    <i 
                      v-for="star in 5" 
                      :key="star"
                      :class="['bi', star <= review.rating ? 'bi-star-fill' : 'bi-star']"
                    ></i>
                    <span class="ms-2">{{ review.rating }}/5</span>
                  </div>
                </div>
                <div class="review-actions">
                  <span :class="['badge', getStatusBadgeClass(review.status)]">
                    {{ getStatusText(review.status) }}
                  </span>
                  <div class="action-buttons mt-2">
                    <button 
                      v-if="review.status === 'pending'"
                      @click="updateReviewStatus(review.id, 'approved')"
                      class="btn btn-success btn-sm me-2"
                      :disabled="isUpdating"
                    >
                      <i class="bi bi-check-lg"></i> Approve
                    </button>
                    <button 
                      v-if="review.status === 'pending'"
                      @click="updateReviewStatus(review.id, 'rejected')"
                      class="btn btn-danger btn-sm"
                      :disabled="isUpdating"
                    >
                      <i class="bi bi-x-lg"></i> Reject
                    </button>
                    <button 
                      v-if="review.status === 'approved'"
                      @click="updateReviewStatus(review.id, 'rejected')"
                      class="btn btn-warning btn-sm me-2"
                      :disabled="isUpdating"
                    >
                      <i class="bi bi-arrow-left"></i> Reject
                    </button>
                    <button 
                      v-if="review.status === 'rejected'"
                      @click="updateReviewStatus(review.id, 'approved')"
                      class="btn btn-success btn-sm"
                      :disabled="isUpdating"
                    >
                      <i class="bi bi-arrow-right"></i> Approve
                    </button>
                  </div>
                </div>
              </div>
              <div class="review-content">
                <p><strong>Service:</strong> {{ review.service || 'Not specified' }}</p>
                <p><strong>Review:</strong></p>
                <p class="review-text">{{ review.review }}</p>
                <small class="text-muted">
                  Submitted: {{ formatDate(review.timestamp) }}
                </small>
              </div>
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
  name: 'Admin',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isAuthenticated: false,
      isLoggingIn: false,
      isLoading: false,
      isUpdating: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginError: null,
      reviews: [],
      currentFilter: 'all',
      filters: [
        { value: 'all', label: 'All', active: true },
        { value: 'pending', label: 'Pending', active: false },
        { value: 'approved', label: 'Approved', active: false },
        { value: 'rejected', label: 'Rejected', active: false }
      ],
      stats: {
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0
      }
    }
  },
  computed: {
    filteredReviews() {
      if (this.currentFilter === 'all') {
        return this.reviews;
      }
      return this.reviews.filter(review => review.status === this.currentFilter);
    }
  },
  mounted() {
    // Check if already authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      this.isAuthenticated = true;
      this.loadReviews();
    }
  },
  methods: {
    async login() {
      this.isLoggingIn = true;
      this.loginError = null;

      try {
        // Simple authentication (in production, use proper auth)
        if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin123') {
          this.isAuthenticated = true;
          localStorage.setItem('adminToken', 'dummy-token');
          this.loadReviews();
        } else {
          this.loginError = 'Invalid username or password';
        }
      } catch (error) {
        this.loginError = 'Login failed. Please try again.';
      } finally {
        this.isLoggingIn = false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('adminToken');
      this.reviews = [];
      this.loginForm = { username: '', password: '' };
    },
    async loadReviews() {
      this.isLoading = true;
      
      try {
        // Fetch reviews from your API
        const response = await fetch(`${API_BASE_URL}/reviews`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.reviews = data.map((review, index) => ({
          id: review.id || index + 1,
          name: review.name,
          email: review.email,
          rating: review.rating,
          service: review.service,
          review: review.review,
          timestamp: review.timestamp,
          status: review.status || 'pending' // Default to pending if no status
        }));

        this.updateStats();
      } catch (error) {
        console.error('Error loading reviews:', error);
        // For demo purposes, show some mock data
        this.reviews = [
          {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            rating: 5,
            service: 'tutoring',
            review: 'Excellent tutoring service! The instructor was very knowledgeable and patient.',
            timestamp: '2024-01-15T10:30:00.000Z',
            status: 'pending'
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            rating: 4,
            service: 'consultation',
            review: 'Great consultation session. Very helpful advice.',
            timestamp: '2024-01-14T15:20:00.000Z',
            status: 'approved'
          }
        ];
        this.updateStats();
      } finally {
        this.isLoading = false;
      }
    },
    async updateReviewStatus(reviewId, newStatus) {
      this.isUpdating = true;
      
      try {
        // Update review status via API
        const response = await fetch(`${API_BASE_URL}/reviews/${reviewId}/status`, {
          method: 'PUT',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Update local state
        const review = this.reviews.find(r => r.id === reviewId);
        if (review) {
          review.status = newStatus;
          this.updateStats();
        }
      } catch (error) {
        console.error('Error updating review status:', error);
        // For demo purposes, update locally
        const review = this.reviews.find(r => r.id === reviewId);
        if (review) {
          review.status = newStatus;
          this.updateStats();
        }
      } finally {
        this.isUpdating = false;
      }
    },
    updateStats() {
      this.stats.total = this.reviews.length;
      this.stats.pending = this.reviews.filter(r => r.status === 'pending').length;
      this.stats.approved = this.reviews.filter(r => r.status === 'approved').length;
      this.stats.rejected = this.reviews.filter(r => r.status === 'rejected').length;
    },
    setFilter(filterValue) {
      this.currentFilter = filterValue;
      this.filters.forEach(filter => {
        filter.active = filter.value === filterValue;
      });
    },
    getStatusBadgeClass(status) {
      const classes = {
        pending: 'bg-warning',
        approved: 'bg-success',
        rejected: 'bg-danger'
      };
      return classes[status] || 'bg-secondary';
    },
    getStatusText(status) {
      const texts = {
        pending: 'Pending',
        approved: 'Approved',
        rejected: 'Rejected'
      };
      return texts[status] || 'Unknown';
    },
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
}
</script>

<style scoped>
.admin-page {
  min-height: calc(100vh - 56px);
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-top: 56px;
}

.login-container {
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.login-container h2 {
  color: #333;
  font-weight: 700;
}

.form-control {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
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

.stat-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.5rem;
}

.stat-icon.pending {
  background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
}

.stat-icon.approved {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.stat-icon.rejected {
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
}

.stat-content h3 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.stat-content p {
  margin: 0;
  color: #666;
  font-weight: 500;
}

.reviews-container {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.filter-buttons .btn {
  margin-left: 0.5rem;
  border-radius: 25px;
}

.review-card {
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.review-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.review-info h5 {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.rating {
  color: #ffc107;
  font-size: 1.1rem;
}

.review-actions {
  text-align: right;
}

.badge {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.action-buttons .btn {
  border-radius: 20px;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
}

.review-content {
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
}

.review-text {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  font-style: italic;
  margin: 0.5rem 0;
}

.alert-danger {
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
  color: white;
  font-weight: 500;
}

@media (max-width: 768px) {
  .admin-page {
    padding: 40px 0;
  }
  
  .login-container {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .review-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .review-actions {
    text-align: left;
    margin-top: 1rem;
  }
  
  .stat-card {
    flex-direction: column;
    text-align: center;
  }
  
  .stat-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
