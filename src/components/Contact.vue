<template>
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">Contact Me</h2>
      <div class="col-md-8 mx-auto" data-aos="fade-up">
        <div v-if="submitted" class="alert alert-success" role="alert">
          Thank you for your message! I will get back to you shortly.
        </div>
        <form v-else @submit.prevent="handleSubmit" class="p-4 bg-white rounded-3 shadow-sm">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="name" placeholder="John Doe" v-model="form.name" required>
            <label for="name">Your Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email" required>
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" id="message" rows="5" placeholder="How can I help?" v-model="form.message" required style="height: 150px;"></textarea>
            <label for="message">Message</label>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-special btn-lg" :disabled="submitting">
              <span v-if="submitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-else>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitting = ref(false);
const submitted = ref(false);

const handleSubmit = async () => {
  submitting.value = true;

  try {

    const response = await fetch(`/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      submitted.value = true;
      // Reset form after a few seconds
      setTimeout(() => {
        submitted.value = false;
        form.value = {
          name: '',
          email: '',
          message: '',
        };
      }, 5000);
    } else {
      throw new Error('Failed to send message.');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again later.');
  } finally {
    submitting.value = false;
  }
};

</script>

<style scoped>
.form-control:focus {
  box-shadow: none;
  border-color: var(--primary-color);
}
</style>
