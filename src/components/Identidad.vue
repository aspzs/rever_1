<template>
  <div class="main-container">
    <!-- Efecto halo que sigue al cursor -->
    <div class="halo" ref="halo"></div>
    
    <!-- Hero Section con carrusel (sin logo) -->
<!--     <section class="hero-section">
      <div class="container">
        <Splide :options="heroOptions" class="main-carousel">
          <SplideSlide v-for="(img, index) in heroImages" :key="index">
            <img :src="img.src" :alt="img.alt" class="carousel-image">
            <div class="overlay"></div>
          </SplideSlide>
        </Splide>
      </div>
    </section> -->
    
    <!-- Sección de Descripción Principal -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <h2 class="animated-intro">NUESTRA <span class="highlight">IDENTIDAD</span></h2>
          <p class="description">
            En Rêver construimos más que infraestructura: creamos confianza e innovación. Somos una empresa mexicana fundada en 2022, con visión global, especializada en construcción para los Sectores Industrial, Minería, Energía y Oil & Gas. Conformados por expertos multidisciplinarios, combinamos experiencia, eficiencia e innovación para desarrollar proyectos de alto impacto. Nuestra misión es transformar el entorno con soluciones sostenibles y de calidad, consolidándonos como referentes en la industria.
          </p>
          <div class="animated-underline"></div>
        </div>
      </div>
    </section>
    
    <!-- Sección de Misión, Visión y Valores (tarjetas flip) -->
    <section class="mvv-section">
      <div class="container">
        <div class="mvv-grid">
          <div 
            v-for="(mvv, index) in mvvItems" 
            :key="index" 
            class="mvv-card">
            <div class="card-front">
              <div class="icon-wrapper">
                <svg viewBox="0 0 24 24" class="mvv-icon">
                  <path :d="mvv.icon" />
                </svg>
              </div>
              <h3>{{ mvv.title }}</h3>
              <div class="flip-indicator">
                <span>Ver más</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>
            <div class="card-back">
              <h3>{{ mvv.title }}</h3>
              <p>{{ mvv.content }}</p>
              <div class="flip-indicator">
                <span>Volver</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de "A donde nos dirigimos" -->
    <section class="vision-section">
      <div class="container">
        <h2 class="section-title">A DONDE NOS <span class="highlight">DIRIGIMOS</span></h2>
        <div class="vision-content">
          <p class="vision-text">
            Buscamos posicionarnos como la solución para lograr los objetivos de nuestros clientes, no solo en el mercado nacional sino a nivel global, siendo una empresa confiable para sus proyectos.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Sección de Objetivos -->
    <section class="objectives-section">
      <div class="container">
        <h2 class="section-title">NUESTROS <span class="highlight">OBJETIVOS</span></h2>
        
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="card-front">
              <div class="icon-container">
                <svg viewBox="0 0 24 24" class="objective-icon">
                  <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </div>
              <h3>Mercado global</h3>
              <div class="flip-indicator">
                <span>Ver más</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>
            <div class="card-back">
              <p>Iniciamos y continuaremos expandiendo nuestros servicios a nivel global, convirtiéndonos en una empresa confiable a través de las fronteras, ya que contamos con la experiencia y los conocimientos para llevar nuestros especialistas y los recursos necesarios a cualquier punto.</p>
              <div class="flip-indicator">
                <span>Volver</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="objective-card">
            <div class="card-front">
              <div class="icon-container">
                <svg viewBox="0 0 24 24" class="objective-icon">
                  <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                </svg>
              </div>
              <h3>Excelencia y calidad</h3>
              <div class="flip-indicator">
                <span>Ver más</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>
            <div class="card-back">
              <p>Ejecutar proyectos en cumplimiento con los más altos estándares de calidad a nivel mundial, siempre en el tiempo previsto y salvaguardando la integridad de nuestros colaboradores, lo cual nos lleva a lograr la excelencia en nuestros proyectos.</p>
              <div class="flip-indicator">
                <span>Volver</span>
                <svg viewBox="0 0 24 24" class="flip-icon">
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Carrusel Final -->
    <section class="final-section">
      <div class="container">
        <Splide :options="finalOptions" class="final-carousel">
          <SplideSlide v-for="(img, index) in finalImages" :key="index">
            <img :src="img.src" :alt="img.alt" class="carousel-image">
            <!-- <div class="image-overlay"></div> -->
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Efecto halo que sigue al cursor
const halo = ref(null);

// Optimización del efecto halo para móviles
const updateHaloPosition = (e) => {
  if (halo.value) {
    // Solo activar en pantallas más grandes
    if (window.innerWidth > 768) {
      halo.value.style.opacity = '1';
      halo.value.style.left = `${e.clientX}px`;
      halo.value.style.top = `${e.clientY}px`;
    } else {
      // En móviles ocultar el halo para mejor rendimiento
      halo.value.style.opacity = '0';
    }
  }
};

// Función para manejar tarjetas flip responsivas
const handleCardFlip = (card) => {
  // Verificar si alguna otra tarjeta está volteada y devolverla
  const flippedCards = document.querySelectorAll('.flipped');
  flippedCards.forEach(flippedCard => {
    if (flippedCard !== card) {
      flippedCard.classList.remove('flipped');
    }
  });
  
  // Voltear la tarjeta actual
  card.classList.toggle('flipped');
};

onMounted(() => {
  window.addEventListener('mousemove', updateHaloPosition);
  window.addEventListener('resize', updateHaloPosition);
  
  // Manejo de eventos táctiles y de clic para tarjetas
  const objectiveCards = document.querySelectorAll('.objective-card');
  objectiveCards.forEach(card => {
    card.addEventListener('click', () => handleCardFlip(card));
    card.addEventListener('touchend', (e) => {
      e.preventDefault(); // Prevenir eventos fantasma
      handleCardFlip(card);
    });
  });
  
  const mvvCards = document.querySelectorAll('.mvv-card');
  mvvCards.forEach(card => {
    card.addEventListener('click', () => handleCardFlip(card));
    card.addEventListener('touchend', (e) => {
      e.preventDefault();
      handleCardFlip(card);
    });
  });
  
  // Inicialmente revisar el ancho para ocultar halo en móviles
  if (window.innerWidth <= 768 && halo.value) {
    halo.value.style.opacity = '0';
  }
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateHaloPosition);
  window.removeEventListener('resize', updateHaloPosition);
});

// Opciones para el carrusel principal optimizadas para móviles
const heroOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 5000,
  speed: 1000,
  pauseOnHover: false,
  lazyLoad: true, // Mejora de rendimiento
  breakpoints: {
    768: {
      height: '45vh',
    },
    576: {
      height: '35vh',
      speed: 800,
    }
  }
};

// Opciones para el carrusel final con mejores breakpoints
const finalOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  arrows: true,
  pagination: false,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  speed: 800,
  gap: '2rem',
  lazyLoad: true,
  breakpoints: {
    1200: {
      perPage: 2,
      gap: '1.5rem',
    },
    768: {
      perPage: 1,
      gap: '1rem',
      speed: 600,
    },
    576: {
      perPage: 1,
      arrows: false,
      pagination: true,
      gap: '0.8rem'
    }
  }
};

// Imágenes del carrusel principal
const heroImages = [
  { src: "/images/fotos/otros/Rever_6.webp", alt: "Rever Construcción" },
  { src: "/images/fotos/otros/Rever_9.webp", alt: "Rever Proyecto" },
  { src: "/images/fotos/otros/Rever_13.webp", alt: "Rever Infraestructura" }
];

// Imágenes del carrusel final
const finalImages = [
  { src: "/images/fotos/otros/Rever_4.webp", alt: "Rever Proyecto" },
  { src: "/images/fotos/otros/Rever_8.webp", alt: "Rever Proyecto" },
  { src: "/images/fotos/otros/Rever_19.webp", alt: "Rever Proyecto" },
  { src: "/images/fotos/otros/Rever_21.webp", alt: "Rever Proyecto" },
  { src: "/images/fotos/otros/Rever_22.webp", alt: "Rever Proyecto" }
];

// Datos de Misión, Visión y Valores (sin modales)
const mvvItems = [
  {
    title: "Misión",
    icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
    content: "Desarrollar, construir y gestionar proyectos de infraestructura proporcionando soluciones a nuestros clientes, logrando el cumplimiento de los objetivos trazados y posicionarnos dentro de la industria de la construcción a nivel global como una empresa altamente confiable.",
  },
  {
    title: "Visión",
    icon: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
    content: "Somos innovadores y comprometidos con las metas de nuestros proyectos, interactuando proactivamente y generando la confianza de nuestros clientes.",
  },
  {
    title: "Valores",
    icon: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10",
    content: "Excelencia, Pasión e Innovación.",
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

/* Main layout and container styles */
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

/* Personalización de navegación del carrusel */
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

/* Personalización de paginación del carrusel */
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

/* Hero section */
.hero-section {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) brightness(0.9);
  transition: all 0.8s ease;
}

/* Intro section */
.intro-section {
  padding: 8rem 0 6rem;
  position: relative;
}

.intro-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(255,255,255,0.01), 
    rgba(248, 207, 71, 0.3), 
    rgba(255,255,255,0.01));
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-bottom: 3rem;
  position: relative;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
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

/* MVV Section */
.mvv-section {
  padding: 8rem 0;
  position: relative;
}

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

/* Estilo de tarjeta tipo flip para MVV (como los objetivos) */
.mvv-card {
  position: relative;
  height: 320px; /* Más alto que antes */
  perspective: 1500px;
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 2.5rem; /* Padding más pronunciado */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(25, 25, 25, 0.8); /* Fondo más contrastado */
  border: 1px solid rgba(248, 207, 71, 0.2);
  backface-visibility: hidden;
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card-back {
  transform: rotateY(180deg);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Mejor distribución del espacio */
  align-items: center;
  background: rgba(30, 30, 30, 0.95); /* Fondo más oscuro para el texto */
}

.mvv-card.flipped .card-front {
  transform: rotateY(180deg);
}

.mvv-card.flipped .card-back {
  transform: rotateY(0);
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(248, 207, 71, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem; /* Más espacio */
  border: 1px solid rgba(248, 207, 71, 0.3);
  transition: all 0.4s ease;
}

.mvv-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: rgba(248, 207, 71, 0.2);
}

.mvv-icon {
  width: 35px;
  height: 35px;
  fill: rgb(248, 207, 71);
}

.mvv-card h3,
.objective-card h3 {
  font-size: 1.8rem;
  color: rgb(248, 207, 71);
  margin: 0 0 2.5rem; /* Más espacio */
  font-weight: 400;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card-back h3 {
  margin-bottom: 1.5rem;
}

.card-back p {
  font-size: 1.15rem;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95); /* Mayor opacidad para mejor legibilidad */
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.flip-indicator {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9); /* Más visible */
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: auto;
  padding: 0.75rem 1.5rem; /* Padding para parecer un botón */
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 3px;
  background: rgba(248, 207, 71, 0.05);
}

.flip-icon {
  width: 20px;
  height: 20px;
  fill: rgba(248, 207, 71, 0.8); /* Más visible */
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.mvv-card:hover .flip-indicator,
.objective-card:hover .flip-indicator {
  color: rgb(248, 207, 71);
  background: rgba(248, 207, 71, 0.1);
  border-color: rgba(248, 207, 71, 0.5);
}

.mvv-card:hover .flip-icon,
.objective-card:hover .flip-icon {
  transform: translateY(3px);
  fill: rgb(248, 207, 71);
}

/* Vision Section */
.vision-section {
  padding: 6rem 0;
  position: relative;
  text-align: center;
  background: linear-gradient(to right, rgba(15,15,15,0.95), rgba(25,25,25,0.95));
  border-top: 1px solid rgba(248, 207, 71, 0.2);
  border-bottom: 1px solid rgba(248, 207, 71, 0.2);
}

.vision-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8cf47' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.section-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 1px;
  background: rgb(248, 207, 71);
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.vision-content {
  max-width: 800px;
  margin: 0 auto;
}

.vision-text {
  font-size: 1.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95); /* Mayor opacidad para mejor legibilidad */
  font-weight: 300;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

/* Objectives Section */
.objectives-section {
  padding: 8rem 0;
  position: relative;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 5rem;
}

.objective-card {
  position: relative;
  height: 300px;
  perspective: 1500px;
  cursor: pointer;
}

.objective-card .card-front,
.objective-card .card-back {
  padding: 3rem 2.5rem; /* Consistente con MVV */
  background: rgba(25, 25, 25, 0.8); /* Fondo más contrastado */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.objective-card .card-back {
  background: rgba(30, 30, 30, 0.95); /* Fondo más oscuro para el texto */
}

.objective-card.flipped .card-front {
  transform: rotateY(180deg);
}

.objective-card.flipped .card-back {
  transform: rotateY(0);
}

.icon-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(248, 207, 71, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem; /* Más espacio */
  border: 1px solid rgba(248, 207, 71, 0.3);
  transition: all 0.4s ease;
}

.objective-icon {
  width: 40px;
  height: 40px;
  fill: rgb(248, 207, 71);
}

.objective-card:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
  background: rgba(248, 207, 71, 0.2);
}

/* Final Section */
.final-section {
  padding: 4rem 0 8rem;
}

.final-carousel {
  margin-top: 3rem;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3));
  z-index: 5;
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

/* ===== ESTILOS RESPONSIVE MEJORADOS ===== */

/* Mejoras para pantallas medianas */
@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
    max-width: 100%;
  }
  
  .mvv-grid {
    gap: 1.5rem;
  }
  
  .objectives-grid {
    gap: 1.5rem;
  }
  
  .intro-content h2,
  .section-title {
    font-size: 2.4rem;
  }
  .flip-indicator{
    display: none;
  }
  
  .description {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  :deep(.splide__arrow) {
    width: 3rem;
    height: 3rem;
  }
}

/* Tablets */
@media (max-width: 992px) {
  .mvv-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .objectives-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin-left: -7%;
  }
  
  .hero-section {
    height: 55vh;
  }
  
  .intro-section,
  .mvv-section,
  .vision-section,
  .objectives-section {
    padding: 5rem 0;
  }
  
  .card-front,
  .card-back {
    padding: 2rem 1.5rem;
  }
  
  .animated-underline {
    width: 70%;
  }
  
  .vision-text {
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }
  
  .final-section {
    padding: 3rem 0 6rem;
  }
}

/* Móviles grandes */
@media (max-width: 768px) {
  .container {
    padding: 0 1.2rem;
  }
  
  .mvv-grid {
    grid-template-columns: 3fr;
    max-width: 100%;
    margin-left: -5%;
  }
  
  .mvv-card {
    height: auto;
    min-height: 270px;
  }
  
  .objective-card {
    height: auto;
    min-height: 270px;
  }
  
  .intro-content h2,
  .section-title {
    font-size: 1.8rem;
    letter-spacing: 0.1em;
  }
  
  .intro-section,
  .mvv-section,
  .vision-section,
  .objectives-section {
    padding: 4rem 0;
  }
  
  .description,
  .vision-text {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .hero-section {
    height: 45vh;
  }
  
  .card-back p {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .icon-wrapper,
  .icon-container {
    margin-bottom: 1.5rem;
  }
  
  .flip-indicator {
    padding: 0.6rem 1.2rem;
    display: none;
  }
  
  :deep(.splide__pagination) {
    bottom: 0.5rem;
  }
  
  :deep(.splide__pagination__page) {
    width: 1.5rem;
  }
  
  :deep(.splide__arrow) {
    width: 2.5rem;
    height: 2.5rem;
  }

  .objectives-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin-left: -10%;
  }


}

/* Móviles pequeños */
@media (max-width: 576px) {
  .container {
    padding: 0 1rem;
  }
  
  .intro-content h2,
  .section-title {
    font-size: 1.5rem;
    letter-spacing: 0.08em;
  }
  
  .section-title::after {
    width: 40px;
    bottom: -10px;
  }
  
  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
  }
  
  .intro-section,
  .mvv-section,
  .vision-section,
  .objectives-section {
    padding: 1.5rem 0;
  }
  
  .hero-section {
    height: 35vh;
  }
  
  .mvv-card,
  .objective-card {
    min-height: 240px;
  }
  
  .icon-wrapper,
  .icon-container {
    width: 50px;
    height: 50px;
    margin-bottom: 1.2rem;
  }
  
  .mvv-icon,
  .objective-icon {
    width: 25px;
    height: 25px;
  }
  
  .mvv-card h3,
  .objective-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  .flip-indicator {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    display: none;
  }
  
  .flip-icon {
    width: 16px;
    height: 16px;
  }
  
  .final-section {
    padding: 2.5rem 0 5rem;
  }
  
  .vision-text {
    padding: 0 0.5rem;
  }
  
  .animated-underline {
    margin: 1.5rem auto;
  }
  
  .description {
    margin-bottom: 1.5rem;
  }
  
  /* Mejor espaciado en dispositivos pequeños */
  .intro-content {
    padding: 0 0.5rem;
  }
}

/* Móviles muy pequeños */
@media (max-width: 375px) {
  .intro-content h2,
  .section-title {
    font-size: 1.3rem;
  }
  
  .mvv-card h3,
  .objective-card h3 {
    font-size: 1.2rem;
  }
  
  .card-front,
  .card-back {
    padding: 1.5rem 1rem;
  }
  
  .mvv-card,
  .objective-card {
    min-height: 220px;
  }
  
  .hero-section {
    height: 30vh;
  }
  
  .description,
  .vision-text,
  .card-back p {
    font-size: 0.95rem;
  }
  
  /* Ajustes adicionales para pantallas muy pequeñas */
  .icon-wrapper,
  .icon-container {
    width: 45px;
    height: 45px;
    margin-bottom: 1rem;
  }
  
  .mvv-icon,
  .objective-icon {
    width: 22px;
    height: 22px;
  }
  
  :deep(.splide__arrow) {
    width: 2rem;
    height: 2rem;
  }
  
  :deep(.splide__pagination__page) {
    width: 1.2rem;
    height: 2px;
  }
  
  :deep(.splide__pagination__page.is-active) {
    width: 2rem;
  }
}
</style>