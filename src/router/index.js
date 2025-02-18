import { createRouter, createWebHistory } from 'vue-router';
import Identidad from '../components/Identidad.vue';
import Direccion from '../components/Direccion.vue';
import Contacto from '../components/Contacto.vue';
import Proyectos from '../components/Proyectos.vue';
import Home from '../components/Introduccion.vue';
import Servicios from '../components/Servicios.vue';




const routes = [
  { path: '/', name: 'Introducción', component: Home },
  { path: '/quienes-somos', name: 'Identidad', component: Identidad },
  { path: '/direccion', name: 'Dirección', component: Direccion },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/negocios', name: 'Servicios', component: Servicios },
  { path: '/proyectos', name: 'Proyectos', component: Proyectos },





];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // Hace scroll hacia arriba con animación suave
  }
});


export default router;
