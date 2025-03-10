<template>
  <div class="main-container" @mousemove="updateHalo">
    <div class="halo" :style="haloStyle"></div>

    <div class="container">
      <div class="content-wrapper">
        <!-- Animated company description -->
        <div class="text-content" ref="welcomeText">
          <h1 class="animated-intro">
            Somos una <span class="highlight">empresa mexicana</span> con proyección global, dedicada a la construcción en los sectores Industriales, <span class="highlight">Minería, Energía y Oil & Gas</span>. Desde <span class="highlight">2022</span>, nuestro equipo multidisciplinario aporta experiencia, eficiencia e innovación para desarrollar proyectos de alto impacto. Nos enfocamos en transformar el entorno con soluciones sostenibles y de calidad, reafirmando nuestro liderazgo en la industria.
          </h1>
          <div class="animated-underline"></div>
        </div>
        <!-- Image carousel -->
        <div class="carousel-wrapper">
          <Splide :options="carouselOptions" class="carousel">
            <SplideSlide v-for="(image, index) in mainImages" :key="index">
              <img :src="image.src" :alt="image.alt" class="carousel-image">
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Additional company information -->
      <div class="mission-section">
        <div class="mission-content">
          <h3>Buscamos posicionarnos como la solución para lograr los objetivos de nuestros clientes, no solo en el mercado nacional sino a nivel global, siendo una empresa confiable para sus proyectos.</h3>
          <h3>
            Hemos desarrollado proyectos en el sector energético y minería, cumpliendo en tiempo y forma con los alcances contratados.
          </h3>
        </div>
      </div>

      <!-- Secondary image carousel -->
      <div class="secondary-carousel">
        <Splide :options="carouselOptions" class="carousel">
          <SplideSlide v-for="(image, index) in secondaryImages" :key="index">
            <img :src="image.src" :alt="image.alt" class="carousel-image">
          </SplideSlide>
        </Splide>
      </div>

      <!-- Statistics counters -->
      <div class="stats-section" ref="statsSection">
        <div class="stat-card">
          <h2 class="counter"><span ref="counter1">{{ displayedCounts.counter1 }}</span>+</h2>
          <p>M² de instalación de geomembrana</p>
          <img src="/images/plastico.svg" class="stat-icon" alt="Geomembrana">
        </div>
        <div class="stat-card">
          <h2 class="counter"><span ref="counter2">{{ displayedCounts.counter2 }}</span>+</h2>
          <p>Pulgadas diam de tuberías instaladas</p>
          <img src="/images/tuberia2.svg" class="stat-icon" alt="Tuberías">
        </div>
        <div class="stat-card">
          <h2 class="counter"><span ref="counter3">{{ displayedCounts.counter3 }}</span>+</h2>
          <p>Metros lineales de tuberías aisladas</p>
          <img src="/images/tuberia.svg" class="stat-icon" alt="Tuberías aisladas">
        </div>
        <div class="stat-card">
          <h2 class="counter"><span ref="counter4">{{ displayedCounts.counter4 }}</span>+</h2>
          <p>Toneladas de Estructura Metálica</p>
          <img src="/images/metal.svg" class="stat-icon" alt="Estructura Metálica">
        </div>
      </div>

      <!-- Industry Section -->
      <div class="industry-section">
        <h2 class="section-title">Industria</h2>
        
        <div class="industry-grid">
          <div class="industry-item">
            <RouterLink to="/proyectos" class="industry-icon-link">
              <img src="/images/oil.svg" alt="Oil & Gas" class="industry-icon">
            </RouterLink>
            <h3>Oil & Gas</h3>
            <p>Construimos y mantenemos infraestructuras clave, como plataformas offshore y refinerías, garantizando eficiencia, seguridad y sostenibilidad en cada proyecto.</p>
          </div>
          
          <div class="industry-item">
            <RouterLink to="/proyectos" class="industry-icon-link">
              <img src="/images/mining.svg" alt="Minería" class="industry-icon">
            </RouterLink>
            <h3>Minería</h3>
            <p>Ofrecemos soluciones integrales para la construcción de infraestructuras mineras, optimizando procesos y minimizando impacto ambiental.</p>
          </div>
          
          <div class="industry-item">
            <RouterLink to="/proyectos" class="industry-icon-link">
              <img src="/images/energia.svg" alt="Energía" class="industry-icon">
            </RouterLink>
            <h3>Energía</h3>
            <p>Desarrollamos proyectos de energía renovable y transmisión eléctrica, asegurando un suministro eficiente, confiable y sostenible en todo momento.</p>
          </div>
        </div>

        <!-- Final image carousel (full width) -->
        <div class="final-carousel">
          <Splide :options="finalCarouselOptions" class="full-width-carousel">
            <SplideSlide v-for="(image, index) in finalImages" :key="index">
              <div class="full-width-slide">
                <img :src="image.src" :alt="image.alt" class="full-width-image">
                <div class="overlay"></div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, computed, onMounted, reactive } from 'vue';

// Image arrays for carousels
const mainImages = [
  { src: '/images/fotos/otros/Rever_3.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_2.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_1.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_4.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_5.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_6.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_7.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_8.webp', alt: 'Rever_foto' }
];

const secondaryImages = [
  { src: '/images/fotos/otros/Rever_16.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_9.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_10.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_11.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_12.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_13.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_14.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_15.webp', alt: 'Rever_foto' }
];

const finalImages = [
  { src: '/images/fotos/otros/Rever_17.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_18.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_19.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_20.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_21.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_22.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_23.webp', alt: 'Rever_foto' },
  { src: '/images/fotos/otros/Rever_24.webp', alt: 'Rever_foto' }
];

// Carousel options
// Carousel options for main and secondary carousels
const carouselOptions = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  resetProgress: false,
  height: '450px',
  speed: 1000,
};

// Full-width carousel options for the final carousel
const finalCarouselOptions = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 4500,
  pauseOnHover: true,
  resetProgress: false,
  height: '600px',
  speed: 1000,
  arrows: true,
  pagination: true,
  classes: {
    arrows: 'splide__arrows custom-arrows',
    arrow: 'splide__arrow custom-arrow',
    prev: 'splide__arrow--prev custom-prev',
    next: 'splide__arrow--next custom-next',
    pagination: 'splide__pagination custom-pagination',
    page: 'splide__pagination__page custom-page',
  },
};

// Halo effect
const haloX = ref(0);
const haloY = ref(0);

const updateHalo = (event) => {
  haloX.value = event.clientX;
  haloY.value = event.clientY;
};

const haloStyle = computed(() => ({
  left: `${haloX.value}px`,
  top: `${haloY.value}px`,
}));

// Counter animation
const statsSection = ref(null);
const welcomeText = ref(null);
const counter1 = ref(null);
const counter2 = ref(null);
const counter3 = ref(null);
const counter4 = ref(null);

const finalCounts = {
  counter1: 160000,
  counter2: 10000,
  counter3: 1500,
  counter4: 400
};

const displayedCounts = reactive({
  counter1: 0,
  counter2: 0,
  counter3: 0,
  counter4: 0
});

const animateCounting = (counterName, finalValue, duration = 2000) => {
  const startTime = Date.now();
  const updateCounter = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smoother animation
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    
    displayedCounts[counterName] = Math.floor(easedProgress * finalValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      displayedCounts[counterName] = finalValue;
    }
  };
  
  updateCounter();
};

const formatNumber = (value) => {
  return new Intl.NumberFormat().format(value);
};

onMounted(() => {
  // Intersection Observer for scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start counter animations when stats section is visible
        animateCounting('counter1', finalCounts.counter1);
        animateCounting('counter2', finalCounts.counter2);
        animateCounting('counter3', finalCounts.counter3);
        animateCounting('counter4', finalCounts.counter4);
        
        // Unobserve after animation starts (so it only runs once)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  // Start observing the stats section
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
  
  // Add welcome text animation on page load
  if (welcomeText.value) {
    welcomeText.value.style.opacity = "1";
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

/* Main layout and container styles */
.main-container {
  position: relative;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background: linear-gradient(to bottom, #0a0a0a, #111111);
  position: relative;
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

/* Hero section with animated welcome */
.hero-section {
  padding: 6rem 0 2rem;
  position: relative;
  overflow: hidden;
}

/* Nueva animación más refinada para el texto */
@keyframes fadeInRefined {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandRefined {
  0% {
    width: 0;
  }
  100% {
    width: 70%;
  }
}

@keyframes subtleGlow {
  0% {
    text-shadow: 0 0 1px rgba(248, 207, 71, 0.2);
  }
  100% {
    text-shadow: 0 0 5px rgba(248, 207, 71, 0.4);
  }
}

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

/* Content wrapper section */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 7rem 0;
  align-items: center;
  position: relative;
}

.content-wrapper::after {
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

.text-content {
  position: relative;
  padding-right: 5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.text-content h1 {
  font-size: 1.6rem;
  line-height: 1.9;
  font-weight: 300;
  margin: 0;
  position: relative;
  letter-spacing: 0.03em;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.9);
}

.animated-intro {
  opacity: 0;
  animation: fadeInRefined 1.5s ease forwards;
}

.animated-underline {
  width: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 0.6), 
    rgba(248, 207, 71, 0));
  margin-top: 2rem;
  animation: expandRefined 1.8s ease forwards 0.6s;
}

/* Eliminar la línea de la izquierda */
.text-content::before {
  display: none;
}

.highlight {
  color: rgb(248, 207, 71);
  font-weight: 500;
  position: relative;
  padding: 0 2px;
  display: inline-block;
  animation: subtleGlow 2.5s ease-in-out infinite alternate;
}

/* Carousel styling */
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper::before {
  content: '';
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  border: 1px solid rgba(248, 207, 71, 0.15);
  z-index: 1;
  pointer-events: none;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) brightness(0.95);
  transition: all 0.8s ease;
}

.carousel-image:hover {
  filter: contrast(1.1) brightness(1);
}

/* Mission section */
.mission-section {
  padding: 8rem 0;
  position: relative;
  margin-bottom: 2rem;
}

.mission-section::after {
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

.mission-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  position: relative;
}

.mission-content::before {
  content: '"';
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 8rem;
  color: rgba(248, 207, 71, 0.2);
  line-height: 0;
}

.mission-content h3 {
  color: rgb(248, 207, 71);
  font-size: 1.6rem;
  line-height: 1.7;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  padding: 3rem;
  border: none;
  margin: 0;
  text-align: center;
  background-color: rgba(15, 15, 15, 0.7);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.mission-content h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 0.5), 
    rgba(248, 207, 71, 0));
}

.mission-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 0.5), 
    rgba(248, 207, 71, 0));
}

.mission-content h3:hover {
  transform: translateY(-5px);
}

/* Secondary carousel */
.secondary-carousel {
  margin: 4rem 0;
}

/* Stats section with counters */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 0;
  position: relative;
  margin: 6rem 0 8rem;
  background: linear-gradient(to right, rgba(20,20,20,0.9), rgba(30,30,30,0.9));
  border-top: 1px solid rgba(248, 207, 71, 0.3);
  border-bottom: 1px solid rgba(248, 207, 71, 0.3);
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8cf47' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  background: transparent;
}

.stat-card::after {
  content: '';
  position: absolute;
  top: 20%;
  right: 0;
  height: 60%;
  width: 1px;
  background: linear-gradient(to bottom, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 0.3), 
    rgba(248, 207, 71, 0));
}

.stat-card:last-child::after {
  display: none;
}

.counter {
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to bottom, #f8cf47, #d4a819);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1.5rem;
  line-height: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.counter::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background: radial-gradient(circle, rgba(248, 207, 71, 0.05) 0%, rgba(248, 207, 71, 0) 70%);
  z-index: -1;
  border-radius: 50%;
}

.stat-card p {
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 2rem;
  line-height: 1.5;
  max-width: 80%;
  letter-spacing: 0.03em;
}

.stat-icon {
  width: 2.8rem;
  height: auto;
  opacity: 0.8;
  filter: invert(85%) sepia(19%) saturate(1138%) hue-rotate(357deg) brightness(103%) contrast(96%);
}

/* Industry section */
.industry-section {
  padding: 8rem 0 0;
  position: relative;
}

.section-title {
  color: rgb(248, 207, 71);
  font-size: 2.8rem;
  text-align: center;
  margin: 0 0 5rem;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.08em;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}

.section-title::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 40px;
  background-color: rgb(248, 207, 71);
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  width: 120px;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(248, 207, 71, 0), 
    rgba(248, 207, 71, 1), 
    rgba(248, 207, 71, 0));
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 6rem;
  padding: 0 2rem;
}

.industry-item {
  position: relative;
  padding: 3.5rem 2.5rem;
  text-align: center;
  background-color: rgba(15, 15, 15, 0.6);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
  backdrop-filter: blur(5px);
}

.industry-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background: linear-gradient(to right, rgba(248, 207, 71, 0.1), rgba(248, 207, 71, 0)) border-box;
  -webkit-mask: 
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

.industry-item:hover {
  transform: translateY(-15px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.industry-item:hover::before {
  border: 1px solid rgba(248, 207, 71, 0.3);
}

.industry-icon-link {
  display: inline-block;
  margin-bottom: 2rem;
  position: relative;
}

.industry-icon-link::before {
  content: '';
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: radial-gradient(circle, rgba(248, 207, 71, 0.05) 0%, rgba(248, 207, 71, 0) 70%);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.industry-item:hover .industry-icon-link::before {
  opacity: 1;
}

.industry-icon {
  width: 65px;
  height: 65px;
  padding: 16px;
  border: 1px solid rgba(248, 207, 71, 0.3);
  border-radius: 50%;
  transition: all 0.5s ease;
  filter: brightness(0.9);
}

.industry-icon:hover {
  background-color: rgba(248, 207, 71, 0.1);
  transform: scale(1.1) rotate(5deg);
  filter: brightness(1.1);
}

.industry-item h3 {
  font-family: 'Roboto', sans-serif;
  color: rgb(248, 207, 71);
  font-size: 1.6rem;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  font-weight: 500;
}

.industry-item h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background-color: rgba(248, 207, 71, 0.5);
}

.industry-item p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.final-carousel {
  margin: 4rem 0 2rem;
}

/* Responsive design */
@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
  
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 5rem 0;
  }
  
  .text-content {
    padding-right: 0;
    border-right: none;
    padding-bottom: 3rem;
  }
  
  .text-content h1 {
    font-size: 1.4rem;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-card:nth-child(2)::after {
    display: none;
  }
  
  .stat-card:nth-child(3)::after {
    display: block;
  }
  
  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .content-wrapper {
    padding: 4rem 0;
  }
  
  .text-content h1 {
    font-size: 1.25rem;
    line-height: 1.8;
  }
  
  .mission-content h3 {
    font-size: 1.4rem;
    padding: 2rem 1.5rem;
  }
  
  .mission-content::before {
    font-size: 6rem;
    top: -3rem;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    margin: 4rem 0 6rem;
  }
  
  .stat-card {
    padding: 3rem 1.5rem;
  }
  
  .stat-card::after {
    display: none;
  }
  
  .stat-card p {
    max-width: 90%;
  }
  
  .industry-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin: 0 0 4rem;
  }
  
  .section-title::before {
    height: 30px;
    top: -45px;
  }
  
  .industry-item {
    padding: 3rem 2rem;
  }
}
</style>