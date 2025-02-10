<template>
  <div>
    <h1>Direccion</h1>

    <div>
      <h2>A donde nos dirigimos...</h2>
      <p>Buscamos posicionarnos como la solución para lograr los objetivos de nuestros clientes, no solo en el mercado nacional sino a nivel global, siendo una empresa confiable para sus proyectos.</p>

      <h2>160,000+</h2>
      <p>M2 de instalación de geomembrana</p>

      <h2>10,000+</h2>
      <p>Pulgadas diam de tuberías instaladas</p>

      <h2>1,500+</h2>
      <p>Metros lineales de tuberías aisladas</p>

      <h2>400+</h2>
      <p>Toneladas de Estructura Metálica</p>
    </div>

    <div>
      <h3>Oil & Gas</h3>
      <h3>Energía</h3>
      <h3>Minería</h3>

      <p>Desarrollamos proyectos industriales en los diferentes sectores (Oil
& Gas, Energía y Minería, ) aplicando nuestra experiencia y
capacidad para lograr los objetivos de los proyectos.</p>
    </div>


<div>
  <h1>Objetivos</h1>
  <table border="1">
    <tbody>
      <tr>
        <td>{{ cell1 }}</td>
        <td>{{ cell2 }}</td>
      </tr>
      <tr>
        <td>{{ cell3 }}</td>
        <td>{{ cell4 }}</td>
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
      cell1: 'MERCADO GLOBAL', // Fila 1, Columna 1
      cell2: 'Iniciamos y continuaremos expandiendo nuestros servicios a nivel global, convirtiéndonos en una empresa confiable a través de las fronteras, ya que contamos con la experiencia y los conocimientos para llevar nuestros especialistas y los recursos necesarios a cualquier punto.', // Fila 1, Columna 2
      cell3: 'EXCELENCIA Y CALIDAD', // Fila 2, Columna 1
      cell4: 'Ejecutar proyectos en cumplimiento con los mas altos estándares de calidad a nivel mundial, siempre en el tiempo previsto y salvaguardando la integridad de nuestros colaboradores, lo cual nos lleva a lograr la excelencia en nuestros proyectos.', // Fila 2, Columna 2
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: center;
}
td {
  padding: 10px;
}
</style>
