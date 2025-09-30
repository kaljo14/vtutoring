<template>
  <Header />
  <main>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </main>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Services,
    Testimonials,
    Contact,
    Footer,
  },
};
</script>

<style>
body {
  padding-top: 56px; /* Adjust for fixed navbar */
}

section {
  scroll-margin-top: 56px; /* Adjust for fixed navbar */
}
</style>
