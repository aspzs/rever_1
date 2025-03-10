<template>
  <div class="projects-section">
    <div class="container">
      <h2 class="section-title">Nuestros Proyectos</h2>
      <div class="animated-underline"></div>
      <p class="description">Hemos desarrollado proyectos en el sector energético y minería, cumpliendo en tiempo y forma con los alcances contratados.</p>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
          @click="openModal(project)"
        >
          <div class="card-front">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-date">{{ project.date }}</p>
              <div class="badges-container">
                <span v-if="project.jamaica" class="project-badge">Jamaica</span>
                <span v-if="project.mexico" class="project-badge">México</span>
                <span v-if="project.internacional" class="project-badge">Internacional</span>
              </div>
              <div class="flip-indicator">
                Ver detalles
                <svg class="flip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal mejorado con backdrop -->
      <div v-if="isModalOpen">
        <!-- Nuevo backdrop que cubre toda la pantalla -->
        <div class="modal-backdrop" @click="closeModal"></div>
        
        <!-- Modal overlay original con sus valores exactos -->
        <div class="modal-overlay">
          <div class="modal-content" @click.stop>
            <button @click="closeModal" class="modal-close-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="rgb(248, 207, 71)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </button>
            
            <div class="modal-header">
              <h3 class="modal-title">{{ modalProject.title }}</h3>
              <div class="animated-underline modal-underline"></div>
            </div>
            
            <!-- Carrusel primero para mejor experiencia visual -->
            <section class="project-carousel">
              <Splide :options="carouselOptions" class="carousel">
                <SplideSlide v-for="(image, index) in modalProject.images" :key="index">
                  <div class="image-container">
                    <img :src="image" alt="Imagen del proyecto" />
                    <div class="image-overlay"></div>
                  </div>
                </SplideSlide>
              </Splide>
            </section>
            
            <div class="project-details">
              <div class="detail-item">
                <div class="detail-label"><strong>Descripción</strong></div>
                <div class="detail-value">{{ modalProject.description }}</div>
              </div>
              <div class="detail-meta">
                <div class="meta-item">
                  <div class="meta-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="rgb(248, 207, 71)" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
                    </svg>
                  </div>
                  <span>{{ modalProject.date }}</span>
                </div>
                <div class="meta-item">
                  <div class="meta-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="rgb(248, 207, 71)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span>{{ modalProject.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de contacto -->
      <div class="contact-btn-container">
        <a href="/contacto" class="contact-btn">Contáctanos</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const isModalOpen = ref(false);
const modalProject = ref({});
const carouselOptions = ref({
  type: 'loop',
  perPage: 1,
  pagination: true,
  arrows: true,
  autoplay: false,
  autoHeight: true,
  gap: '1rem',
  heightRatio: 0, /* Eliminamos la restricción de ratio fijo */
  breakpoints: {
    768: {
      arrows: true,
      pagination: true
    },
    576: {
      arrows: true,
      pagination: true
    }
  }
});

// Efecto halo
let halo;
onMounted(() => {
  halo = document.createElement('div');
  halo.className = 'halo';
  document.body.appendChild(halo);
  
  document.addEventListener('mousemove', (e) => {
    halo.style.left = e.clientX + 'px';
    halo.style.top = e.clientY + 'px';
  });
});

const projects = ref([
  { 
    id: 1, 
    title: 'Instalación Geomembrana', 
    info: '(Effluent Collector Ditch)',
    image: '/images/fotos/otros/Rever_3.webp',
    images: [
      '/images/fotos/windalco1/Windalco1_1.jpg',
      '/images/fotos/windalco1/Windalco1_2.jpg',
      '/images/fotos/windalco1/Windalco1_3.jpg',
      '/images/fotos/windalco1/Windalco1_4.jpg',
      '/images/fotos/windalco1/Windalco1_5.jpg',
      '/images/fotos/windalco1/Windalco1_6.jpg',
      '/images/fotos/windalco1/Windalco1_7.jpg',
      '/images/fotos/windalco1/Windalco1_8.jpg',
      '/images/fotos/windalco1/Windalco1_9.jpg',
      '/images/fotos/windalco1/Windalco1_10.jpg',
      '/images/fotos/windalco1/Windalco1_11.jpg',
      '/images/fotos/windalco1/Windalco1_12.jpg',
      '/images/fotos/windalco1/Windalco1_13.jpg',
      '/images/fotos/windalco1/Windalco1_14.jpg',
      '/images/fotos/windalco1/Windalco1_15.jpg',
      '/images/fotos/windalco1/Windalco1_16.jpg',
    ],
    description: 'Instalación de 30,350 m² de Geomembrana de HDPE de 2mm doble cara texturizada WINDALCO / ECD (Effluent Collector Ditch)',
    date: '21 Marzo 2022 - 22 Abril 2022',
    location: 'Ewarthon, Jamaica',
    jamaica: true,
  },
  { 
    id: 2, 
    title: 'Instalación Geomembrana', 
    info: '(Effluent Holding Pond)',
    image: '/images/fotos/windalco2/windalco2_1.jpg',
    images: [
      '/images/fotos/windalco2/windalco2_1.jpg',
      '/images/fotos/windalco2/windalco2_2.jpg',
      '/images/fotos/windalco2/windalco2_3.jpg',
      '/images/fotos/windalco2/windalco2_4.jpg',
    ],
    description: 'Instalación de 74,100 m² de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil WINDALCO / EHP (Effluent Holding Pond)',
    date: '10 Agosto 2022 - 4 Octubre 2022',
    location: 'Ewarthon, Jamaica',
    jamaica: true,
  },
  { 
    id: 3, 
    title: 'Instalación Geomembrana', 
    info: '(Effluent Holding Pond)',
    image: '/images/fotos/windalco1/Windalco1_1.jpg',
    images: [
      '/images/fotos/windalco1/Windalco1_11.jpg',
      '/images/fotos/windalco1/Windalco1_7.jpg',
      '/images/fotos/windalco1/Windalco1_3.jpg',
      '/images/fotos/windalco1/Windalco1_4.jpg',
      '/images/fotos/windalco1/Windalco1_15.jpg',
      '/images/fotos/windalco1/Windalco1_16.jpg',
      '/images/fotos/windalco1/Windalco1_7.jpg',
    ],
    description: 'Instalación de 55,649 m² de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil WINDALCO / EHP (Effluent Holding Pond)',
    date: '6 Mayo 2023 - 6 Junio 2023',
    location: 'Ewarthon, Jamaica',
    jamaica: true,
  },
  { 
    id: 4, 
    title: 'Trabajos de Obra Mecánica', 
    info: 'Restauración',
    image: '/images/fotos/otros/Rever_11.webp',
    images: [
      '/images/fotos/jamalcoPiping/jamalcoPiping_1.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_2.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_3.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_4.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_5.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_6.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_7.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_8.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_9.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_10.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_11.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_12.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_13.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_14.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_15.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_16.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_17.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_18.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_19.jpg',
      '/images/fotos/jamalcoPiping/jamalcoPiping_20.jpg',
    ],
    description: 'Trabajos de Obra Mecánica y Tuberías para restauración de Powerhouse dentro de Refinería Jamalco en Hayes, Clarendon, Jamaica.',
    date: '09 Nov 2022 - 19 Nov 2022',
    location: 'Clarendon, Jamaica',
    jamaica: true,
  },
  { 
    id: 5, 
    title: 'Instalación de Geomembrana', 
    info: '',
    image: '/images/fotos/jamalcoLinner/jamalcoLinner_10.jpg',
    images: [
      '/images/fotos/jamalcoLinner/jamalcoLinner_1.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_2.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_3.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_4.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_5.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_6.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_7.jpg',
      '/images/fotos/jamalcoLinner/jamalcoLinner_8.jpg',
    ],
    description: 'Instalación de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil JAMALCO en diques de Tanques para aprobación de NEPA.',
    date: '22 Febrero 2024 - 4 Mayo 2024',
    location: 'Clarendon, Jamaica',
    jamaica: true,
  },
  { 
    id: 6, 
    title: 'Construcción de Edificio para Turbina', 
    info: 'Turbina de 45MW',
    image: '/images/fotos/otros/Rever_13.webp',
    images: [
      '/images/fotos/jamalcoStean/jamalcoStean_1.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_13.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_2.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_4.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_5.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_6.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_19.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_12.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_11.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_10.jpg',
    ],
    description: 'Construcción de Edificio para Turbina de 45MW, Instalación de Estructura de Racks de Tubería.',
    date: '22 Enero 2025 - En Proceso',
    location: 'Clarendon, Jamaica',
    jamaica: true,
  },
  { 
    id: 7, 
    title: 'Servicio de Topografía', 
    info: 'Servicio de Topografía',
    image: '/images/fotos/otros/Rever_24.webp',
    images: [
      '/images/fotos/jamalcoStean/jamalcoStean_45.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_50.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_52.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_53.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_54.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_55.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_57.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_61.jpg',
      '/images/fotos/jamalcoStean/jamalcoStean_62.jpg',
    ],
    description: 'Servicio de Topografía para el desarrollo de las Obras Civiles y Estructurales dentro del Proyecto 45MW Steam Turbine Generator.',
    date: '22 Enero 2025 - En Proceso',
    location: 'Hayse, Clarendon, Jamaica',
    jamaica: true,
  },
]);

const openModal = (project) => {
  modalProject.value = project;
  isModalOpen.value = true;
  // Añadir clase al body para evitar scroll
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  // Restaurar scroll
  document.body.style.overflow = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

/* Estilos principales */
.projects-section {
  position: relative;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background: linear-gradient(to bottom, #121212, #1a1a1a);
  padding: 2rem 0;
  position: relative;
  width: 100%;
  margin-top: -2%;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Halo effect */
.halo {
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(248, 207, 71, 0.08) 0%, rgba(248, 207, 71, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: blur(15px);
  mix-blend-mode: screen;
}

/* Títulos y descripciones */
.section-title {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.animated-underline {
  width: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 0.6), 
    rgba(248, 207, 71, 0));
  margin: 2rem auto;
  animation: expandWidth 1.8s ease forwards 0.6s;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

/* Grid de proyectos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

/* Tarjetas de proyectos */
.project-card {
  position: relative;
  height: 460px;
  perspective: 1500px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.project-card:hover {
  transform: translateY(-10px);
}

.card-front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 25, 25, 0.8);
  border: 1px solid rgba(248, 207, 71, 0.2);
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 8px;
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.6s ease;
  filter: brightness(0.9) contrast(1.1);
}

.project-card:hover .project-image {
  transform: scale(1.05);
  filter: brightness(1) contrast(1.2);
}

.project-info {
  padding: 1.5rem;
  text-align: center;
}

.project-title {
  font-size: 1.5rem;
  color: rgb(248, 207, 71);
  margin: 0 0 1rem;
  font-weight: 400;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.project-date {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.badges-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.project-badge {
  display: inline-block;
  color: rgb(248, 207, 71);
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 3px;
}

.flip-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  transition: all 0.3s ease;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 3px;
  background: rgba(248, 207, 71, 0.05);
}

.flip-icon {
  width: 20px;
  height: 20px;
  fill: rgba(248, 207, 71, 0.8);
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.project-card:hover .flip-indicator {
  color: rgb(248, 207, 71);
  background: rgba(248, 207, 71, 0.1);
  border-color: rgba(248, 207, 71, 0.5);
}

.project-card:hover .flip-icon {
  transform: translateY(3px);
  fill: rgb(248, 207, 71);
}

/* Nuevo backdrop que cubre toda la pantalla */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999999999999998; /* Un nivel por debajo del modal-overlay */
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-in-out;
}

/* Modal overlay con los valores exactos originales */
.modal-overlay {
  position: fixed;
  top: 35%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999999999; /* Z-index muy alto para asegurar que esté por encima de todo */
  backdrop-filter: blur(8px);
}

.modal-content {
  background: rgba(25, 25, 25, 0.95);
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  animation: fadeInUp 0.5s ease forwards;
  display: flex;
  flex-direction: column;
}

.modal-close-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  padding: 0;
}

.modal-close-icon:hover {
  transform: rotate(90deg);
  background: rgba(248, 207, 71, 0.2);
}

.modal-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
}

.modal-title {
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 0.5rem;
  color: rgb(248, 207, 71);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.modal-underline {
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  animation: none;
}

.project-details {
  padding: 0 2rem 1.5rem;
}

.detail-item {
  margin-bottom: 1.5rem;
}

.detail-label {
  color: rgb(248, 207, 71);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.detail-value {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  line-height: 1.6;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
  border-left: 3px solid rgba(248, 207, 71, 0.4);
}

.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  background: rgba(248, 207, 71, 0.05);
  padding: 0.6rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(248, 207, 71, 0.2);
}

.meta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-carousel {
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
}

.image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.image-container img {
  width: auto;
  max-width: 100%;
  max-height: 450px;
  display: block;
  object-fit: contain; /* Mantener proporciones originales */
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
  z-index: 5;
}

.modal-actions {
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: center;
}

.close-modal-btn {
  padding: 0.8rem 2.5rem;
  background: rgba(248, 207, 71, 0.1);
  color: rgb(248, 207, 71);
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-modal-btn:hover {
  background: rgba(248, 207, 71, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Botón de contacto */
.contact-btn-container {
  text-align: center;
  margin-top: 5rem;
}

.contact-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: rgba(248, 207, 71, 0.1);
  color: rgb(248, 207, 71);
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(248, 207, 71, 0.2), transparent);
  transition: all 0.6s ease;
}

.contact-btn:hover {
  background: rgba(248, 207, 71, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(248, 207, 71, 0.2);
}

.contact-btn:hover::before {
  left: 100%;
}

/* Personalización del carrusel para que coincida con el estilo general */
:deep(.splide__arrow) {
  background: rgba(248, 207, 71, 0.2);
  width: 3.5rem;
  height: 3.5rem;
  opacity: 1;
  transition: all 0.4s ease;
  border: 1px solid rgba(248, 207, 71, 0.4);
}

:deep(.splide__arrow svg) {
  fill: rgb(248, 207, 71);
  width: 1.5em;
  height: 1.5em;
  filter: drop-shadow(0 0 5px rgba(248, 207, 71, 0.5));
}

:deep(.splide__arrow:hover) {
  background: rgba(248, 207, 71, 0.3);
  transform: scale(1.1);
}

:deep(.splide__pagination) {
  bottom: 1rem;
}

:deep(.splide__pagination__page) {
  background: rgba(255, 255, 255, 0.3);
  width: 2rem;
  height: 3px;
  margin: 0 5px;
  border-radius: 0;
  transition: all 0.4s ease;
}

:deep(.splide__pagination__page.is-active) {
  background: rgb(248, 207, 71);
  transform: scale(1);
  width: 3rem;
}

/* Animaciones */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes expandWidth {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
  
  .projects-grid {
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2.4rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  :deep(.splide__arrow) {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
    
  .image-container img {
    max-height: 400px;
  }
  
  .modal-title {
    font-size: 1.8rem;
  }
  
  .detail-meta {
    flex-direction: column;
    width: 60%;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .meta-item {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-title {
    font-size: 12px;
  }
  
  .modal-overlay {
    top: 35%;
    left: 0;
    width: 100%;
    height: 50%;
    align-items: center; /* Centrado vertical en móviles también */
    font-size: 10px;
  }
  
  .modal-content {
    max-height: 10vh;
    max-width: 100px; /* Menor anchura en tablets */
    border-radius: 10px;
    z-index: 9999999999;
  }
  
  .image-container img {
    width: 50%;
  }
  
  .modal-header {
    padding: 2rem 1.5rem 0.5rem;
  }
  
  .modal-title {
    font-size: 1.6rem;
  }
  
  .detail-item {
    margin-bottom: 1rem;
  }
  
  .detail-label {
    font-size: 10px;
  }
  
  .detail-value {
    font-size: 0.95rem;
    padding: 0.8rem;
  }
  
  .project-details {
    padding: 0 1.5rem 1rem;
  }
  
  :deep(.splide__arrow) {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .modal-actions {
    padding: 0 1.5rem 1.5rem;
  }
}

@media (max-width: 676px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .project-image {
    height: 200px;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .modal-overlay {
    padding: 0.5rem;
  }
  
  .modal-content {
    max-width: 95%;
    max-height: 85vh;
  }
  
  .modal-header {
    padding: 1.5rem 1rem 0.5rem;
  }
  
  .modal-title {
    font-size: 1.4rem;
  }
  
  .modal-close-icon {
    top: 0.75rem;
    right: 0.75rem;
    width: 32px;
    height: 32px;
  }
  
  .project-details {
    padding: 0 1rem 0.5rem;
  }
  
  .detail-value {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .image-container img {
    max-height: 250px;
    display: none;
  }
  
  .contact-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  :deep(.splide__arrow) {
    width: 2rem;
    height: 2rem;
  }
  
  .modal-actions {
    padding: 0 1rem 1.5rem;
  }
  
  .close-modal-btn {
    padding: 0.7rem 2rem;
    font-size: 0.9rem;
  }
}
</style>