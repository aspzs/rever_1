<template>
  <div class="projects-container">
    <h3 class="section-title">Nuestros Proyectos</h3>
    <h4 class="section-titleInfo">Hemos desarrollado proyectos en el sector energético y minería, cumpliendo en tiempo y forma con los alcances contratados.</h4>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card" @click="openModal(project)">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h4 class="project-title">{{ project.title }}</h4>
          <p>{{ project.date }}</p>
          <span v-if="project.jamaica" class="project-badge">Jamaica</span>
          <span v-if="project.mexico" class="project-badge">Mexico</span>
          <span v-if="project.internacional" class="project-badge">Internacional</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ modalProject.title }}</h3>
        <table class="project-table">
          <tbody>
            <tr>
              <td><strong>Descripción</strong></td>
              <td>{{ modalProject.description }}</td>
            </tr>
            <tr>
              <td><strong>Fecha</strong></td>
              <td>{{ modalProject.date }}</td>
            </tr>
            <tr>
              <td><strong>Ubicación</strong></td>
              <td>{{ modalProject.location }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Carrusel -->
        <section>
          <Splide :options="carouselOptions" class="carousel">
            <SplideSlide v-for="(image, index) in modalProject.images" :key="index">
              <img :src="image" alt="Imagen del proyecto" />
            </SplideSlide>
          </Splide>
        </section>

        <button @click="closeModal" class="close-modal-btn">Cerrar</button>
      </div>
    </div>

    <!-- Sección de contacto -->
    <div class="contact-btn-container">
      <a href="/contacto">Contáctanos</a>
    </div>
  </div>
</template>




<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const isModalOpen = ref(false);
const modalProject = ref({});
const carouselOptions = ref({
  type       : 'loop',
  perPage: 1,
  heightRatio: 0.5,
  pagination: true,
  arrows    : true,
  autoplay  : true,
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
    internacional: true,
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
    internacional: true,
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
    internacional: true,
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
    internacional: true,
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
    internacional: true,
  },
  { 
    id: 6, 
    title: 'Construcción', 
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
    internacional: true,
  },
  { 
    id: 7, 
    title: 'Servicio', 
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
    internacional: true,
  },
]);

const openModal = (project) => {
  modalProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
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
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: rgb(82, 78, 66);
}

.section-titleInfo {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 50px;
  color: rgb(223, 220, 211);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background: rgb(248, 207, 71);
  color: rgb(139, 140, 138);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: rgb(139,140,138);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
}

.project-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.project-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.close-modal-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgb(248, 207, 71);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.close-modal-btn:hover {
  background-color: #ffcc00;
}

/* Carrusel */
.carousel img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Estilos de la sección de contacto */
.contact-btn-container {
  text-align: center;
  margin-top: 40px;
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
