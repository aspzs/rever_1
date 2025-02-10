<template>
  <div class="services-container">
    <img src="/servicios.svg" class="iconoServ"> 
    <img src="/contruccion.svg" class="iconoServ"> 


    <h3 class="categoria1">Nuestros Servicios</h3>
    <table class="services-table">
      <tbody>
        <tr>
          <td class="categoria1">Categoría</td>
          <td class="descripcion">DESCRIPCIÓN</td>
        </tr>
        <tr>
          <td class="categoria">Instalaciones Industriales</td>
          <td>PREFABRICADO Y MONTAJE DE TUBERÍAS</td>
        </tr>
        <tr>
          <td class="categoria">Estructuras</td>
          <td>PREFABRICADO E INSTALACIÓN DE ESTRUCTURA METÁLICA</td>
        </tr>
        <tr>
          <td class="categoria">Geotecnia y Medio Ambiente</td>
          <td>INSTALACIÓN DE GEOSINTETICOS</td>
        </tr>
        <tr>
          <td class="categoria">Instalaciones Especializadas</td>
          <td>PREFABRICADO Y MONTAJE DE TUBERÍAS DE HDPE / TERMOFUSIÓN</td>
        </tr>
        <tr>
          <td class="categoria">Topografía y Geomática</td>
          <td>SERVICIOS DE TOPOGRAFIA GPS - ESTACIÓN TOTAL - LEVANTAMIENTOS</td>
        </tr>
        <tr>
          <td class="categoria">Construcción</td>
          <td>CONSTRUCCIÓN DE OBRAS CIVILES</td>
        </tr>
        <tr>
          <td class="categoria">Ingeniería</td>
          <td>CÁLCULO, DISEÑO Y ELABORACION DE PLANOS DE OBRAS ELECTROMECANICAS Y CIVILES</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Carrusel de imágenes -->
  <section class="carousel-section">
    <Splide :options="options" class="carousel">
      <SplideSlide>
        <img src="/images/fototest.jpeg" alt="Rever_foto">
      </SplideSlide>
      <SplideSlide>
        <img src="/images/fototest1.jpeg" alt="Rever_foto">
      </SplideSlide>
      <SplideSlide>
        <img src="/images/fototest.jpeg" alt="Rever_foto">
      </SplideSlide>
    </Splide>
  </section>

  <div class="contact-btn-container">
    <a href="/contacto">Contáctanos</a>
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

body{
  font-family: 'evolve', sans-serif;
}

/* Contenedor de servicios */
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'evolve', sans-serif;
  color:#ddd;
}

.iconoServ{
  width: 20%;
}
.services-container h2{
  color: rgb(255, 255, 255);
  font-size: 200%;
}

.categoria{
  color: rgb(248,207,71);
}

.categoria1{
  color: #ffffff;
  font-size: 150%;
}
.descripcion{
  color: #e4e4e4;
  font-size: 150%;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
}

/* Estilos de la tabla */
.services-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.services-table td {
  padding: 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.services-table tr:nth-child(even) {
  background-color: rgb(139,140,138);
}

.services-table tr:hover {
  background-color: rgb(162, 163, 161);
}

.services-table td:first-child {
  font-weight: bold;
}

@media (max-width: 768px) {
  /* Estilos responsivos */
  h2 {
    font-size: 1.5rem;
  }

  .services-table td {
    padding: 12px;
  }

  .carousel img {
    max-height: 300px;
  }
}

/* Estilos del carrusel */
.carousel-section {
  padding-top: 5%;
  max-width: 50%;
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

/* Estilos del botón de contacto */
.contact-btn-container {
  text-align: center;
  padding: 10%;
}

.contact-btn-container a {
  display: inline-block;
  background-color: rgb(248,207,71);
  color: rgb(139,140,138);
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 2.1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.contact-btn-container a:hover {
  background-color: #d5d5d5;
}

/* Estilos responsivos */
@media (max-width: 480px) {
  .contact-btn-container a {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
