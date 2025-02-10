<template>
  <body>
    <div class="min-h-screen flex flex-col">
      <!-- Barra de navegación -->
      <div class="sticky top-0 bg-white shadow-md z-50"> 
        <nav :class="{ 'scrolled': isScrolled }" class="p-4 flex items-center justify-between">
          <!-- Menú de navegación -->
          <div class="secciones flex flex-wrap justify-center gap-4 md:gap-6">
            <RouterLink to="/" class="hover:text-gray-300">Inicio</RouterLink>
            <RouterLink to="/quienes-somos" class="hover:text-gray-300">¿Quiénes somos?</RouterLink>
            <RouterLink to="/negocios" class="hover:text-gray-300">Negocios</RouterLink>
            <RouterLink to="/proyectos" class="hover:text-gray-300">Proyectos</RouterLink>
            <RouterLink to="/contacto" class="hover:text-gray-300">Contacto</RouterLink>
          </div>
            <img src="../assets/icono_gris.png" alt="Logo" class="Logo" />
        </nav>
      </div>

      <!-- Contenido de las páginas -->
      <main class="p-6">
        <RouterView />
      </main>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Cambia 50 por la cantidad de scroll deseada
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
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

/* Animación para el logo */
@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300%);
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(0);
  }
}

.Logo {
  width: 25%;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  transition: width 1s ease, transform 1s ease;
}

nav {
  color: white;
  z-index: 50;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  transition: all 1s ease;
  position: relative;
}

/* Sticky Navbar */
.sticky {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgb(245, 244, 241);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo general del cuerpo */
body {
  background-color: rgb(95,96,83);
  color: rgb(240, 235, 220);
  font-family: 'Montserrat', sans-serif;
}

/* Estilo de los enlaces del menú */
.secciones a {
  text-decoration: none;
  color: rgb(139,140,138);
  transition: 0.4s;
  font-size: 20px;
  padding-bottom: 1%;
  position: relative;
  overflow: hidden;
}

.secciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-family: 'evolve', sans-serif;
  border-top: 1px solid black;
  padding-top: 0.5%;
  border-bottom: 1px solid black;
}

/* Efecto hover en los enlaces */
.secciones a::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0%;
  height: 4px;
  background-color: rgb(248, 207, 71);
  transition: width 1s ease-in-out;
}

@media (hover: hover) {
  .secciones a:hover {
    color: rgb(248, 207, 71);
  }
  .secciones a:hover::after {
    width: 100%;
    left: 0;
  }
}

@media (max-width: 1686px) {
  .Logo {
    width: 20%;
  }

  .secciones a {
    font-size: 20px;
    padding-bottom: 1%;
    margin-left: 5%;
  }
}

@media (max-width: 768px) {
  .secciones {
    flex-direction: column;
    gap: 10px;
  }
  .secciones a {
    font-size: 16px;
  }
  .Logo {
    width: 25%;
  }
}

/* Estilo cuando se hace scroll */
nav.scrolled {
  padding: 10px 20px;
}

nav .Logo {
  width: 13%;
  transition: transform 0.5s ease, width 0.5s ease;
}

nav.scrolled .Logo {
  transform: scale(0.5); /* Reduce ligeramente el tamaño */
}

nav:not(.scrolled) .Logo {
  transform: scale(1); /* Vuelve a su tamaño original */
}



</style>
