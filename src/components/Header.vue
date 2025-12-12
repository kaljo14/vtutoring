<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="logo" alt="VikTutors" class="logo me-2" />
        <span>VikTutors</span>
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
            <a class="nav-link" href="#" @click="navigateToSection('contact')">Contact</a>
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
  // If we're on a different page, navigate to home first
  if (router.currentRoute.value.path !== '/') {
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
</style>
