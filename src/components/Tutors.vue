<template>
  <section id="tutors" class="py-5">
    <div class="container">
      <h2 class="text-center display-5 mb-5" data-aos="fade-up">Our Tutors</h2>
      
      <div class="row justify-content-center">
        <!-- Tutor 1: Dessi -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4 d-flex flex-column">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <img :src="desiImage" alt="Dessi" class="img-fluid rounded-circle tutor-image" />
              </div>
              <h3 class="card-title fw-bold mb-2">Dessi</h3>
              <p class="text-muted mb-3"><small>Elementary Education Graduate</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple mb-2">BA in Elementary Education</span>
              </div>
              <p class="card-text text-muted small mb-3">
                Meet Dessi! She holds a degree in Elementary Education from Northeastern University and has taught both in Europe and the U.S. She is fluent in French, Italian, and Bulgarian, and specializes in creating supportive, student-centered lessons tailored to individual needs.
                <br><br>
                Her experience spans early learners through adults, with a focus on language development, writing skills, and building academic confidence.
                <br><br>
                If you’re seeking a reliable, patient tutor with international experience and a flexible, personalized approach, she will be happy to support your learning goals.

              </p>
              <div class="price mt-auto">
                <span class="h6 text-primary fw-bold">Price determined by course difficulty</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutor 2: Kaloyan -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4 d-flex flex-column">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <img :src="kaloyanImage" class="rounded-circle w-100 h-100 object-fit-cover" alt="Kaloyan">
              </div>
              <h3 class="card-title fw-bold mb-2">Kaloyan</h3>
              <p class="text-muted mb-3"><small>Computer Science / DevOps Engineer</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple mb-2 me-1">BA Electrical Engineering</span>
                <span class="badge bg-custom-purple mb-2 me-1">MS Computer Science</span>
                <span class="badge bg-custom-purple mb-2">MS Information Technology Management</span>
              </div>
              <p class="card-text text-muted small mb-3">
                Meet Kaloyan! He is an experienced software developer with a strong academic background, holding a Bachelor's in Electrical Engineering, a Master's in Computer Science, and a Master's in Information Technology Management. He has a proven track record of excellence, maintaining outstanding academic records throughout his education.
                <br><br>
                With his deep technical knowledge and industry experience, he specializes in simplifying complex concepts to help students build a strong foundation in computer science using Java, Python, and other programming languages.
              </p>
              <div class="price mt-auto">
                <span class="h6 text-primary fw-bold">Price determined by course difficulty</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutor 3: Viki -->
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="card h-100 text-center tutor-card">
            <div class="card-body p-4 d-flex flex-column">
              <div class="tutor-image-wrapper mx-auto mb-3">
                <img :src="vikiImage" class="rounded-circle w-100 h-100 object-fit-cover" alt="Viktoriya">
              </div>
              <h3 class="card-title fw-bold mb-2">Viktoriya</h3>
              <p class="text-muted mb-3"><small>Structural Engineer</small></p>
              <div class="degrees mb-3">
                <span class="badge bg-custom-purple me-2 mb-2">BA in Civil Engineering</span>
                <span class="badge bg-custom-purple mb-2">MA in Structural Engineering</span>
              </div>
              <p class="card-text text-muted small mb-3">
                Viktoriya was a perfect A student in her high school and college years. She has passion for learning students and truly helping them understand math concepts. <br><br> She has many students that have been with her through all years of high school and Viktoiya helps them be successful in both math and science courses.
                <br><br>
                She is very relaxed and patient with students. Students find her easy going and very easy to connect with and truly understand the material they are learning.
              </p>
              <div class="price mt-auto">
                <span class="h6 text-primary fw-bold">Price determined by course difficulty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p class="small text-muted fst-italic">
            *Course Cancellation Policy: Please notify us at least 24 hours before your scheduled course, or you will be responsible for the full amount.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import desiImage from '../assets/desi.jpeg';
import vikiImage from '../assets/1719041128170.jpeg';
import kaloyanImage from '../assets/image002.JPG';

export default {
  name: 'Tutors',
  data() {
    return {
      desiImage,
      vikiImage,
      kaloyanImage
    };
  }
};
</script>

<style scoped>
.tutor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.tutor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.tutor-image-wrapper {
  width: 150px;
  height: 150px;
}

.tutor-placeholder {
  width: 150px;
  height: 150px;
  border: 3px solid var(--border-color);
}

.bg-custom-purple {
  background-color: #AE8AF0 !important;
  color: #fff;
}

.card-title {
  color: var(--primary-color);
}

.price {
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}
</style>
