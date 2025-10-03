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
import Header from './Header.vue';
import Hero from './Hero.vue';
import About from './About.vue';
import Services from './Services.vue';
import Testimonials from './Testimonials.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
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
