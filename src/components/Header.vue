<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="logo" alt="Viki Tutoring Logo" class="logo me-2" />
        <span>Viki Tutoring</span>
      </router-link>
      <div class="navbar-collapse d-none d-lg-block" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navigateToSection('about')">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navigateToSection('services')">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navigateToSection('testimonials')">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navigateToSection('contact')">Contact</a>
          </li>
          <li class="nav-item">
            <router-link to="/review" class="btn btn-review me-0">
              <i class="bi bi-star-fill me-1"></i>
              Review Me
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import logo from "../assets/teacher.png";

const router = useRouter();

const navigateToSection = (sectionId) => {
  // If we're on the review page, navigate to home first
  if (router.currentRoute.value.path === '/review') {
    router.push('/').then(() => {
      // Wait for the home page to load, then scroll to section
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    });
  } else {
    // If we're already on home page, just scroll to section
    scrollToSection(sectionId);
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1a2036; /* Deep Navy */
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.navbar-brand:hover {
  color: white;
  text-decoration: none;
}

.logo {
  height: 40px;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.2);
}

.nav-item {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 1rem;
  padding-right: 1rem;
}

.nav-item:last-child {
  border-right: none;
}

.nav-link {
  color: white;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover,
.navbar-brand:hover span {
  color: var(--accent-purple);
}

.nav-link.active {
  color: white;
  font-weight: 600;
}

.btn-review {
  background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
  border: none;
  color: #1a2036;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
}

.btn-review:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
  color: #1a2036;
}

.btn-review:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  color: #1a2036;
}
</style>
