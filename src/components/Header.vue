<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img :src="logo" alt="Viki Tutoring Logo" class="logo me-2" />
        <span>Viki Tutoring</span>
      </a>
      <div class="navbar-collapse d-none d-lg-block" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/teacher.png";
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
