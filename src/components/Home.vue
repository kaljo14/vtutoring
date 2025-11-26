<template>
  <Header />
  <main>
    <Hero />
    <Tutoring />
    <About />
    <Services />
    <HowItWorks />
    <Tutors />
    <Testimonials />
    <Contact />
  </main>
  <Footer />
</template>

<script>
import Header from './Header.vue';
import Hero from './Hero.vue';
import Tutoring from './Tutoring.vue';
import About from './About.vue';
import Services from './Services.vue';
import HowItWorks from './HowItWorks.vue';
import Tutors from './Tutors.vue';
import Testimonials from './Testimonials.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Tutoring,
    About,
    Services,
    HowItWorks,
    Tutors,
    Testimonials,
    Contact,
    Footer,
  },
};
</script>
