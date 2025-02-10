<template>
  <div class="container">
    <section>
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
    <img src="../assets/icono_gris.png" class="title">
    <p class="description">
      En Rêver construimos más que infraestructura: creamos confianza e innovación. Somos una empresa mexicana fundada en 2022, con visión global, especializada en construcción para los Sectores Industrial, Minería, Energía y Oil & Gas. Conformados por expertos multidisciplinarios, combinamos experiencia, eficiencia e innovación para desarrollar proyectos de alto impacto. Nuestra misión es transformar el entorno con soluciones sostenibles y de calidad, consolidándonos como referentes en la industria.
    </p>

    <div class="buttons-container">
      <button @click="isOpen1 = true" class="open-btn">Misión</button>
      <button @click="isOpen2 = true" class="open-btn">Visión</button>
      <button @click="isOpen3 = true" class="open-btn">Valores</button>
    </div>

    <div v-if="isOpen1" class="modal-overlay">
      <div class="modal">
        <h2>Nuestra misión</h2>
        <p>Desarrollar, construir y gestionar proyectos de infraestructura proporcionando soluciones a nuestros clientes, logrando el cumplimiento de los objetivos trazados y posicionarnos dentro de la industria de la construcción a nivel global como una empresa altamente confiable.</p>
        <button @click="isOpen1 = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <div v-if="isOpen2" class="modal-overlay">
      <div class="modal">
        <h2>Nuestra visión</h2>
        <p>Somos innovadores y comprometidos con las metas de nuestros proyectos, interactuando proactivamente y generando la confianza de nuestros clientes.</p>
        <button @click="isOpen2 = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <div v-if="isOpen3" class="modal-overlay">
      <div class="modal">
        <h2>Nuestros valores</h2>
        <p>Excelencia, Pasión e Innovación.</p>
        <button @click="isOpen3 = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <div class="stats">
      <h2 class="adonde">A donde nos dirigimos...</h2>
      <p>Buscamos posicionarnos como la solución para lograr los objetivos de nuestros clientes, no solo en el mercado nacional sino a nivel global, siendo una empresa confiable para sus proyectos.</p>
    </div>

    <div class="table-container">
      <h2>Nuestros objetivos a alcanzar</h2>
      <table class="goals-table">
        <tbody>
          <tr>
            <td><img src="/global.svg" alt="Rever_foto"></td>
            <td><img src="/excelencia.svg" alt="Rever_foto"></td>
          </tr>
          <tr>
            <td>Mercado global</td>
            <td>Excelencia y calidad</td>
          </tr>
          <tr>
            <td>Iniciamos y continuaremos expandiendo nuestros servicios a nivel global, convirtiéndonos en una empresa confiable a través de las fronteras, ya que contamos con la experiencia y los conocimientos para llevar nuestros especialistas y los recursos necesarios a cualquier punto.</td>
            <td>Ejecutar proyectos en cumplimiento con los más altos estándares de calidad a nivel mundial, siempre en el tiempo previsto y salvaguardando la integridad de nuestros colaboradores, lo cual nos lleva a lograr la excelencia en nuestros proyectos.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
    };
  },
};
</script>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  height: '400px',
};
</script>

<style scoped>
/* General */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
}

/* Títulos */
.title {
  width: 50%;
  margin-left: 25%;
}

.adonde{
  color: rgb(248,207,71);
  font-size: 300%;
}

.stats p{
  color: #ecf0f1;
}

.description {
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.6;
  max-width: 900px;
  color: #ecf0f1;
  margin: auto;
  padding: 5%;
}

/* Botones */
.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.open-btn, .close-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.open-btn {
  background: rgb(99, 100, 98);
  color: white;
  width: 300%;
  margin-bottom: 10%;
}

.open-btn:hover {
  background: rgb(248, 207, 71);
}

.close-btn {
  background: #2d2c2c;
  color: white;
}

.close-btn:hover {
  background: rgb(248, 207, 71);
}

/* Modales */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(248, 207, 71, 0.6);
  color: #ecf0f1;
  display: flex;
  font-size: 150%;
  justify-content: center;
  align-items: center;
  z-index: 5000;
}

.modal {
  background: rgb(139,140,138);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

/* Tabla */
.table-container {
  margin-top: 50px;
  text-align: center;
  overflow-x: auto; /* Permite scroll horizontal si es necesario */
  padding: 10px;
}

.table-container h2 {
  color:#ecf0f1;
  font-size: 300%;
}

.goals-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow: hidden;
}

.goals-table td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  font-size: 1.1rem;
}

.goals-table tr:nth-child(odd) {
  background: rgb(139,140,138);
  color: #ecf0f1;
}

.goals-table tr:nth-child(even) {
  background: rgb(139,140,138);
  color: rgb(248,207,71);
}

.goals-table img {
  width: 20%;
  max-width: 60%;
  transition: transform 0.3s ease;
}

.goals-table img:hover {
  transform: scale(1.05);
}

/* Carrusel */
.carousel {
  max-width: 800px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
}

.splide img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ----- 🌍 RESPONSIVE DESIGN ----- */
/* Para pantallas menores a 768px (tabletas y móviles) */
@media (max-width: 768px) {
  .goals-table {
    display: block;
    width: 100%;
  }

  .goals-table tbody {
    display: block;
  }

  .goals-table tr {
    display: block;
    margin-bottom: 15px;
    padding: 10px;
  }

  .goals-table td {
    display: block;
    text-align: left;
    padding: 10px;
    font-size: 1rem;
    border: none;
  }

  .goals-table img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
}

/* Para pantallas menores a 480px (móviles pequeños) */
@media (max-width: 480px) {
  .table-container {
  width: 30px;
  margin-top: 50px;
  text-align: center;
}

  .goals-table td {
    width: 100%;
    font-size: 0.9rem;
    padding: 8px;
  }

  .goals-table img {
    max-width: 10px;
  }
}

</style>
