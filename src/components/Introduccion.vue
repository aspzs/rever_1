<template>
  <div class="halo" :style="haloStyle"></div>

  <div class="container">
    <div class="content-wrapper">
      <!-- Texto y descripción de la empresa -->
      <div class="text-content">
        <h1>
          Somos una <a class="AlertaIntro">empresa mexicana</a> con proyección global, dedicada a la construcción en los sectores Industriales, <a class="AlertaIntro">Minería, Energía y Oil & Gas</a>. Desde <a class="AlertaIntro">2022</a>, nuestro equipo multidisciplinario aporta experiencia, eficiencia e innovación para desarrollar proyectos de alto impacto. Nos enfocamos en transformar el entorno con soluciones sostenibles y de calidad, reafirmando nuestro liderazgo en la industria.
        </h1>
      </div>
      <!-- Carrusel de imágenes -->
      <div class="carousel-wrapper">
        <Splide :options="options" class="carousel">
          <SplideSlide>
            <img src="/images/fototest.jpeg" alt="Rever_foto">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/fototest1.jpeg" alt="Rever_foto">
          </SplideSlide>
        </Splide>
      </div>
    </div>

    <!-- Información adicional de la empresa -->
    <div class="text-content1">
      <h3 class="texto_amarillo">Buscamos posicionarnos como la solución para lograr los objetivos de nuestros clientes, no solo en el mercado nacional sino a nivel global, siendo una empresa confiable para sus proyectos.</h3>
      <h3 class="texto_amarillo"><a >
        Hemos desarrollado proyectos en el sector energético y minería, cumpliendo en tiempo y forma con los alcances contratados.
      </a>
      </h3>
    </div>

    <!-- Tabla de proyectos -->
    <table class="responsive-table2">
      <tbody>
        <tr>
          <td><a class="cifras">160,000+</a> <br><br>M2 de instalación de geomembrana<br><br> <img src="/images/plastico.svg" class="iconoCifras"> </td>
          <td><a class="cifras">10,000+</a> <br><br> Pulgadas diam de tuberías instaladas <br><br> <img src="/images/tuberia2.svg" class="iconoCifras"> </td>
          <td><a class="cifras">1,500+</a> <br><br> Metros lineales de tuberías aisladas <br><br> <img src="/images/tuberia.svg" class="iconoCifras"></td>
          <td><a class="cifras">400+</a> <br><br> Toneladas de Estructura Metálica <br><br> <img src="/images/metal.svg" class="iconoCifras"></td>
        </tr>
      </tbody>
    </table>

    <div class="carousel-wrapper">
        <Splide :options="options" class="carousel">
          <SplideSlide>
            <img src="/images/fototest.jpeg" alt="Rever_foto">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/fototest1.jpeg" alt="Rever_foto">
          </SplideSlide>
        </Splide>
      </div>

    <!-- Industria Section -->
     <div class="responsive-table3 p-8">

      <p class="tituloIndustria">Industria</p>
    <table class="responsive-table3">
      <tbody >
        <tr> 
          <td><img src="/images/fabricacion.svg" alt="Fabrica" class="iconIndustrias"></td>
        
          <td class="iconInfo"><RouterLink to="/proyectos" ><img src="/images/oil.svg" alt="Oil & Gas" class="icon"></RouterLink><h2>Oil & Gas</h2>Construimos y mantenemos infraestructuras clave, como plataformas offshore y refinerías, garantizando eficiencia, seguridad y sostenibilidad en cada proyecto.</td>
          <td class="iconInfo"><RouterLink to="/proyectos" ><img src="/images/mining.svg" alt="Minería" class="icon"></RouterLink><h2>Minería</h2>Ofrecemos soluciones integrales para la construcción de infraestructuras mineras, optimizando procesos y minimizando impacto ambiental.</td>
          <td class="iconInfo"><RouterLink to="/proyectos" ><img src="/images/energia.svg" alt="Energía" class="icon"></RouterLink><h2>Energía</h2>Desarrollamos proyectos de energía renovable y transmisión eléctrica, asegurando un suministro eficiente, confiable y sostenible en todo momento.</td>
        </tr>
      </tbody>
    </table>
    <div class="carousel-wrapper">
        <Splide :options="options" class="carousel">
          <SplideSlide>
            <img src="/images/fototest.jpeg" alt="Rever_foto">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/fototest1.jpeg" alt="Rever_foto">
          </SplideSlide>
        </Splide>
      </div>


     </div>

  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, computed } from 'vue';


const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  height: '400px',
};


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


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


.halo {
  position: absolute;
  width: 150px;  /* Tamaño del halo */
  height: 150px;
  background: radial-gradient(circle, rgba(0, 183, 255, 0.6) 0%, rgba(0, 183, 255, 0) 70%); /* Color y opacidad */
  border-radius: 50%; /* Forma circular */
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center; /* Alinea el texto y el carrusel en el centro verticalmente */
  gap: 20px;
  padding: 5%;
}

.cifras{
  background-color: rgb(248, 207, 71);
  font-family: "Roboto", serif;

  color: black;
  border-bottom: 1px solid black;
  font-size: 200%;
}

.iconoCifras{
  width: 20%;

}

.AlertaIntro{
  color: rgb(248, 207, 71);
  font-size: 33px;
  font-family: "Roboto", serif;

}

.iconInfo h2{
  border-bottom: 1px solid white;
  font-family: "Roboto", serif;

}

.content {
  border-top: 1px solid white;
  margin-top: 20px; /* Añade espacio entre el texto y la tabla */
}

.tituloIndustria{
  font-size: 60px;
  font-family: "Roboto", serif;
  color: rgb(248, 207, 71);
  border: 1px solid white;
  border-bottom: none;
  padding: 10%;
}

.text-content {
  flex: 1;
  min-width: 10%;
  height: 3%;
  display: flex;
  align-items: center; /* Alinea el texto verticalmente */
  border-right: 1px solid white;
}

.text-content1 {
  flex: 1;
  min-width: 10%;
  height: 3%;
  display: flex;
  align-items: center; /* Alinea el texto verticalmente */
  border-top: 1px solid white;
  padding: 13%;
  margin-top: 5%;
}
.texto_amarillo{
  color: rgb(248, 207, 71);
  background-color: #000000;
}

.text-content1 h3{
  border: 1px solid rgb(255, 255, 255);
  padding: 3%;
}

.carousel-wrapper {
  flex: 1;
  min-width: 300px;
}

h1 {
  text-align: left;
  font-size: 1.5rem; /* Ajusta el tamaño de fuente para mejor legibilidad */
  line-height: 1.5;
}

.carousel {
  max-width: 100%;
}

.splide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
}

.responsive-table2 {
  width: 100%;
  border-collapse: collapse;
  background-color: rgb(248, 207, 71);
  border: 1px solid black;
  color: black;
}
.responsive-table2 td {
  padding: 10px;
  border: 1px solid #000000;
}


.responsive-table3 {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-collapse: collapse;
  border-top: 1px solid white;
}
.responsive-table3 td {
  padding: 10px;
  padding: 13px;
}
.responsive-table3 h2{
  color: rgb(248, 207, 71);
  font-weight: bold;
}


.responsive-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column; /* Cambia la disposición en pantallas pequeñas */
    align-items: flex-start;
  }
  .text-content1{
    flex-direction: column; /* Cambia la disposición en pantallas pequeñas */
    align-items: flex-start; 
  }

  .text-content, .carousel-wrapper {
    width: 100%;
  }
  h1 {
    font-size: 1.2rem; /* Ajusta el tamaño de fuente en pantallas pequeñas */
  }

  .responsive-table td {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .responsive-table2 td {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .responsive-table3 td {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .text-content {
  border-right: none;
}

}

.icon {
  width: 50px;
  height: 50px;
  margin-right: 8px;
  vertical-align: middle;
  border: 1px solid white;
  border-radius: 50%;
  padding: 10%;
}

.icon:hover {
  background-color: #ffffff;
}

.iconIndustrias{
  width: 200px;
  height: 200px;
  margin-right: 8px;
  vertical-align: middle;
}

.iconInfo{
  border: 1px solid rgb(255, 255, 255);
}
</style>
