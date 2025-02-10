<script setup>
import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

import HomePage from './components/HomePage.vue'
import TheWelcome from './components/TheWelcome.vue'
import FooterMain from './components/Footer.vue'


// Vistas
const Proyectos = defineAsyncComponent(() => import('./components/Proyectos.vue'));
const Identidad = defineAsyncComponent(() => import('./components/Identidad.vue'));
const Direccion = defineAsyncComponent(() => import('./components/Direccion.vue'));
const Servicios = defineAsyncComponent(() => import('./components/Servicios.vue'));
const Contacto = defineAsyncComponent(() => import('./components/Contacto.vue'));



// Rutas del enrutador
const routes = [
  { path: '/', component: HomePage },
  { path: '/quienes-somos', component: Identidad },
  { path: '/proyectos', component: Proyectos },
  { path: '/direccion', component: Direccion },
  { path: '/negocios', component: Servicios },
  { path: '/contacto', component: Contacto },


];

// Configuración del enrutador
const router = createRouter({
  history: createWebHistory(),
  routes,
});



</script>

<template>
      <HomePage/>

        <FooterMain/>


</template>


