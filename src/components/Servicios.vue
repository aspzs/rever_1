<template>
  <div class="main-container">
    <div class="halo"></div>
    <div class="services-section">
      <div class="container">
        <h2 class="section-title animated-intro">Nuestros Servicios</h2>
        <div class="animated-underline"></div>
        <p class="description animated-intro">
          Ofrecemos soluciones integrales en la fabricación, montaje e instalación de sistemas industriales y civiles, incluyendo tuberías, estructuras metálicas, geosintéticos, y obras electromecánicas. Contamos con servicios de topografía, cálculos e ingeniería para asegurar la correcta ejecución de proyectos de infraestructura, siempre con un enfoque en <span class="highlight">calidad y eficiencia</span>.
        </p>

        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="card-front">
              <div class="image-container">
                <img :src="service.image" :alt="service.title" class="service-image" />
              </div>
              <div class="service-info">
                <h3>{{ service.title }}</h3>
                <!-- <div class="flip-indicator">
                  Ver detalles
                  <svg class="flip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <a href="/contacto" class="contact-btn">
        Contáctanos
        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Lista de servicios
const services = ref([
  { id: 1, title: 'Prefabricado de tuberías', image: '/images/fotos/otros/Rever_1.webp' },
  { id: 2, title: 'Montaje de tuberías', image: '/images/fotos/otros/Rever_2.webp' },
  { id: 3, title: 'Prefabricado e instalación de estructura metálica', image: '/images/fotos/otros/Rever_15.webp' },
  { id: 4, title: 'Instalación de Geosinteticos', image: '/images/fotos/otros/Rever_8.webp'},
  { id: 5, title: 'Prefabricado y montaje de tuberías de HDPE / Termofusión', image: '/images/fotos/otros/Rever_14.webp' },
  { id: 6, title: 'Servicios de Topografía GPS - Estación Total - Levantamientos', image: '/images/fotos/otros/Rever_9.webp' },
  { id: 7, title: 'Construcción de obras civiles', image: '/images/fotos/otros/Rever_11.webp' },
  { id: 8, title: 'Cálculo, diseño y elaboración de planos electromecanicas y civiles', image: '/images/fotos/otros/Rever_13.webp' },
]);

onMounted(() => {
  // Efecto halo que sigue al mouse
  const halo = document.querySelector('.halo');
  document.addEventListener('mousemove', (e) => {
    halo.style.left = `${e.clientX}px`;
    halo.style.top = `${e.clientY}px`;
  });

  // Animación de entrada para las tarjetas
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-in');
    }, 100 * index);
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

/* Main container styles */
.main-container {
  position: relative;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background: linear-gradient(to bottom, #121212, #1a1a1a);
  position: relative;
  width: 100%;
}

.main-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
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

/* Services section */
.services-section {
  padding: 8rem 0;
  position: relative;
}

.section-title {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  display: inline-block;
  width: 100%;
}

.animated-intro {
  opacity: 0;
  animation: fadeInUp 1.5s ease forwards;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
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

.highlight {
  color: rgb(248, 207, 71);
  font-weight: 400;
  position: relative;
  animation: subtleGlow 2.5s ease-in-out infinite alternate;
  text-shadow: 0 0 8px rgba(248, 207, 71, 0.4);
}

/* Services grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
}

.service-card {
  position: relative;
  height: 350px;
  perspective: 1500px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(25, 25, 25, 0.8);
  border: 1px solid rgba(248, 207, 71, 0.2);
}

.service-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(248, 207, 71, 0.4);
}

.card-front {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(25, 25, 25, 0.8);
}

.image-container {
  position: relative;
  height: 65%;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
}

.service-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.service-info h3 {
  font-size: 1.2rem;
  color: rgb(248, 207, 71);
  margin: 0 0 1rem;
  font-weight: 400;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.flip-indicator {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: auto;
  padding: 0.6rem 1.2rem;
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 3px;
  background: rgba(248, 207, 71, 0.05);
  width: fit-content;
}

.flip-icon {
  width: 20px;
  height: 20px;
  fill: rgba(248, 207, 71, 0.8);
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.service-card:hover .flip-indicator {
  color: rgb(248, 207, 71);
  background: rgba(248, 207, 71, 0.1);
  border-color: rgba(248, 207, 71, 0.5);
}

.service-card:hover .flip-icon {
  transform: translateY(3px);
  fill: rgb(248, 207, 71);
}

/* Contact section */
.contact-section {
  padding: 2rem 0 8rem;
  text-align: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  color: #121212;
  background-color: rgb(248, 207, 71);
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: all 0.4s ease;
}

.contact-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.contact-btn:hover::before {
  transform: translateX(0);
}

.arrow-icon {
  width: 24px;
  height: 24px;
  fill: #121212;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.contact-btn:hover .arrow-icon {
  transform: translateX(4px);
}

/* Animations */
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

@keyframes expandWidth {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}

@keyframes subtleGlow {
  0% {
    text-shadow: 0 0 3px rgba(248, 207, 71, 0.3);
  }
  100% {
    text-shadow: 0 0 8px rgba(248, 207, 71, 0.6);
  }
}

/* Responsive styles */
@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
  
  .section-title {
    font-size: 2.4rem;
  }
  
  .description {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  .services-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 992px) {
  .services-section {
    padding: 5rem 0;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .service-card {
    height: 320px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
    letter-spacing: 0.1em;
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }
  
  .service-card {
    height: 300px;
  }
  
  .service-info h3 {
    font-size: 1.1rem;
  }
  
  .flip-indicator {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .contact-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .services-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.5rem;
    letter-spacing: 0.08em;
  }
  
  .description {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin: 0 auto;
  }
  
  .service-card {
    height: 280px;
  }
  
  .contact-section {
    padding: 1rem 0 5rem;
  }
}
</style>