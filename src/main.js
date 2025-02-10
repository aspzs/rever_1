import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import VueSplide from '@splidejs/vue-splide';

import './assets/main.css';

const app = createApp(App);
app.use(router);
app.use(VueSplide);
app.mount('#app');

// 🟢 Captura el movimiento del mouse y actualiza el fondo dinámico
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 500;
  
  document.documentElement.style.setProperty("--x", `${x}vw`);
  document.documentElement.style.setProperty("--y", `${y}vh`);
});
