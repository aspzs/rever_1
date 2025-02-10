<template>
  <div class="chronology-container">
    <h1>Proyectos : Rêver</h1>
    <p>
      Hemos desarrollado proyectos en el sector energético y minería,
      cumpliendo en tiempo y forma con los alcances contratados.
    </p>

    <table class="chronology-table">
      <tbody>
        <tr>
          <td class="proyecto"><strong>RELOCATION Ewarthon Jamaica</strong> <br> 21 Marzo 2022 - 22 Abril 2022</td>
          <td>Instalación de 30,350 m² de Geomembrana de HDPE de 2mm doble cara texturizada WINDALCO / ECD (Effluent Collector Ditch)</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>EXPANSION Ewarthon, Jamaica</strong> <br> 10 Agosto 2022 - 4 Octubre 2022</td>
          <td>Instalación de 74,100 m² de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil WINDALCO / EHP (Effluent Holding Pond)</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>EXPANSION Ewarthon, Jamaica</strong> <br> 6 Mayo 2023 - 6 Junio 2023</td>
          <td>Instalación de 55,649 m² de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil WINDALCO / EHP (Effluent Holding Pond)</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>RESTAURACIÓN Clarendon, Jamaica</strong> <br> 09 Nov 2022 - 19 Nov 2022</td>
          <td>Trabajos de Obra Mecánica y Tuberías para restauración de Powerhouse dentro de Refinería Jamalco en Hayes, Clarendon, Jamaica.</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>INSTALACIÓN Clarendon, Jamaica</strong> <br> 22 Febrero 2024 - 4 Mayo 2024</td>
          <td>Instalación de Geomembrana de HDPE de 2mm doble cara texturizada y Geotextil JAMALCO en diques de Tanques para aprobación de NEPA.</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>CONSTRUCCIÓN Clarendon, Jamaica</strong> <br> 22 Enero 2025 - En Proceso</td>
          <td>Construcción de Edificio para Turbina de 45MW, Instalación de Estructura de Racks de Tubería.</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>SERVICIO Hayse, Clarendon, Jamaica</strong> <br> 22 Enero 2025 - En Proceso</td>
          <td>Servicio de Topografía para el desarrollo de las Obras Civiles y Estructurales dentro del Proyecto 45MW Steam Turbine Generator.</td>
        </tr>
      </tbody>
    </table>

    <!-- Carrusel de imágenes -->
    <section class="carousel-section">
      <Splide :options="options" class="carousel">
        <SplideSlide>
          <img src="/images/fototest.jpeg" alt="Rever_foto">
        </SplideSlide>
        <SplideSlide>
          <img src="/images/fototest1.jpeg" alt="Rever_foto">
        </SplideSlide>
      </Splide>
    </section>

    <h2>Industria</h2>
    <table class="industry-table">
      <tbody>
        <tr>
          <td class="proyecto"><strong>Oil & Gas</strong></td>
          <td>Desarrollamos proyectos industriales en los sectores de Oil & Gas, Energía y Minería, aplicando nuestra experiencia y capacidad para lograr los objetivos de los proyectos.</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>Energía</strong></td>
          <td>Proyectos de infraestructura energética con altos estándares de calidad y cumplimiento.</td>
        </tr>
        <tr>
          <td class="proyecto"><strong>Minería</strong></td>
          <td>Soluciones para la industria minera con enfoque en sostenibilidad y eficiencia.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Opciones del carrusel
const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  height: '400px',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

@font-face {
  font-family: 'evolve';
  src: url('../assets/fonts/evolve_sans.otf') format('otf');
  font-weight: normal;
  font-style: normal;
}

/* Contenedor principal */
.chronology-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

}

h1, h2 {
  text-align: center;
  font-size: 400%;
  font-family: 'Montserrat', sans-serif;
  color: rgb(248,207,71);
  margin-top: 5%;
  margin-bottom: 5%;
}

/* Estilos del párrafo */
p {
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #ffffff;
}

.proyecto{
  color: rgb(248,207,71);
}

/* Estilos de las tablas */
.chronology-table, .industry-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10%;
}

.chronology-table td, .industry-table td {
  padding: 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.chronology-table tr:nth-child(even), .industry-table tr:nth-child(even) {
  background-color: rgb(139,140,138);
}

.chronology-table tr:hover, .industry-table tr:hover {
  background-color: rgb(166, 167, 165);
}

.chronology-table td:first-child, .industry-table td:first-child {
  font-weight: bold;
}

/* Estilos del carrusel */
.carousel-section {
  max-width: 100%;
  margin: 30px auto;
}

.carousel {
  border-radius: 8px;
  overflow: hidden;
}

.splide img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  h1, h2 {
    font-size: 1.5rem;
  }

  .chronology-table td, .industry-table td {
    padding: 12px;
  }

  .carousel img {
    max-height: 300px;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  p {
    font-size: 0.9rem;
  }

  .contact-btn-container a {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
