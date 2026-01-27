<template>
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">Contact Us</h2>
      <div class="col-md-8 mx-auto" data-aos="fade-up">
        <div v-if="submitted" class="alert alert-success" role="alert">
          Thank you for your message! We will get back to you shortly.
        </div>
        <form v-else @submit.prevent="handleSubmit" class="p-5 bg-white rounded-3 shadow-lg border-top border-4" style="border-color: var(--accent-purple) !important;">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="name" placeholder="John Doe" v-model="form.name" required>
            <label for="name">Your Name</label>
            <div v-if="errors.name" class="invalid-feedback">
              {{ errors.name }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email" required>
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="tel" class="form-control" :class="{'is-invalid': errors.phone || phoneFlashError}" id="phone" placeholder="1234567890" v-model="form.phone" @input="restrictPhoneInput">
            <label for="phone">Phone Number</label>
            <div v-if="phoneFlashError" class="invalid-feedback">
                Numbers only!
            </div>
            <div v-else-if="errors.phone" class="invalid-feedback">
              {{ errors.phone }}
            </div>
          </div>
          <div class="form-floating mb-4">
            <textarea class="form-control" :class="{'is-invalid': errors.message}" id="message" rows="5" placeholder="How can we help?" v-model="form.message" required style="height: 150px;"></textarea>
            <label for="message">Message</label>
            <div v-if="errors.message" class="invalid-feedback">
              {{ errors.message }}
            </div>
          </div>
          <div class="d-grid gap-3 d-md-flex justify-content-md-center align-items-center">
            <button type="submit" class="btn btn-special btn-lg px-5" :disabled="submitting">
              <span v-if="submitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-else>Send Message</span>
            </button>
            <span class="text-muted mx-2 d-none d-md-inline">or</span>
            <a href="tel:3098322172" class="btn btn-special btn-lg px-4">
                <i class="bi bi-telephone-fill me-2"></i> (309) 832-2172
            </a>
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
  phone: '',
  message: '',
});

const errors = ref({});
const submitting = ref(false);
const submitted = ref(false);

const phoneFlashError = ref(false);

const restrictPhoneInput = (event) => {
    const rawValue = event.target.value;
    // Replace any non-digit character with empty string
    const cleaned = rawValue.replace(/\D/g, '');
    
    if (rawValue !== cleaned) {
        // Non-digit characters were detected and removed
        phoneFlashError.value = true;
        setTimeout(() => {
            phoneFlashError.value = false;
        }, 1000);
    }
    
    form.value.phone = cleaned;
};

const validateForm = () => {
    errors.value = {};
    let isValid = true;

    // Phone validation

    if (form.value.phone) {
        // Since we restrict input, we just check length and if it's purely digits (double check)
        const digits = form.value.phone.replace(/\D/g, '');
        
        if (digits.length < 10) {
            errors.value.phone = 'Please enter at least 10 digits.';
            isValid = false;
        } else if (digits.length > 15) {
             errors.value.phone = 'Phone number is too long.';
             isValid = false;
        } else if (!/^\d+$/.test(form.value.phone)) {
             // This case should ideally not happen due to input restriction, but good for safety
             errors.value.phone = 'Phone number must contain only numbers.';
             isValid = false;
        }
    }

    if (!form.value.name || form.value.name.length < 2) {
        errors.value.name = 'Please enter a valid name (at least 2 characters).';
        isValid = false;
    }

    if (!form.value.message || form.value.message.length < 10) {
        errors.value.message = 'Please enter a message (at least 10 characters).';
        isValid = false;
    }
    
    return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
      return;
  }
    
  submitting.value = true;

  try {

    const payload = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      content: form.value.message,
    };

    const response = await fetch(`/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      submitted.value = true;
      // Reset form after a few seconds
      setTimeout(() => {
        // Reset specific fields but keep form object structure if needed, or just reset all
        submitted.value = false;
        form.value = {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
        errors.value = {};
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
