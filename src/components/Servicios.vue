<template>
  <div class="services-container">
    <div class="projects-container">
    <h3 class="section-title">Nuestros Servicios</h3>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h4 class="project-title">{{ project.title }}</h4>
          <span v-if="project.international" class="project-badge">Internacional</span>
        </div>
      </div>
    </div>
  </div>

  </div>



  <!-- Sección de proyectos -->


  <div class="contact-btn-container">
    <a href="/contacto">Contáctanos</a>
  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref } from 'vue';

// Opciones del carrusel
const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  height: '400px',
};

// Lista de proyectos
const projects = ref([
  { id: 1, title: 'Prefabricado de tuberías', image: '/images/fotos/otros/Rever_1.webp' },
  { id: 2, title: 'Montaje de tuberías', image: '/images/fotos/otros/Rever_2.webp' },
  { id: 3, title: 'Prefabricado e instalación de estructura metálica', image: '/images/fotos/otros/Rever_15.webp' },
  { id: 4, title: 'Instalación de Geosinteticos', image: '/images/fotos/otros/Rever_8.webp'},
  { id: 5, title: 'Prefabricado y montaje de tuberías de HDPE / Termofusión', image: '/images/fotos/otros/Rever_14.webp' },
  { id: 6, title: 'Servicios de Topografía GPS - Estación Total - Levantamientos', image: '/images/fotos/otros/Rever_9.webp' },
  { id: 7, title: 'Construcción de obras civiles', image: '/images/fotos/otros/Rever_11.webp' },
  { id: 8, title: 'Cálculo, diseño y elaboración de planos electromecanicas y civiles', image: '/images/fotos/otros/Rever_13.webp' },
  
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background: rgb(248,207,71);
  color: rgb(139,140,138);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
  text-align: center;
}

.project-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.project-badge {
  display: inline-block;
  background-color: #f8cf47;
  color: #333;
  padding: 5px 10px;
  font-size: 0.9rem;
  margin-top: 10px;
  border-radius: 5px;
}

.contact-btn-container {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.contact-btn-container a {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #f8cf47;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s, transform 0.3s ease-in-out;
}

.contact-btn-container a:hover {
  background-color: #ffcc00;
  transform: translateY(-3px);
}

.contact-btn-container a:active {
  transform: translateY(1px);
}

</style>
