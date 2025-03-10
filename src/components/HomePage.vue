<template>
  <body>
    <div class="min-h-screen flex flex-col">
      <!-- Barra de navegación -->
      <div class="sticky top-0 bg-white shadow-lg z-50"> 
        <!-- Logo en la parte superior -->
        <div class="flex justify-center py-8 mt-8">
          <img src="../assets/icono_gris.png" alt="Logo" class="Logo" />
        </div>
        
        <nav :class="{ 'scrolled': isScrolled }" class="p-4 flex items-center justify-between">
          <!-- Menú de navegación -->
          <div class="secciones flex flex-wrap justify-center gap-4 md:gap-6">
            <RouterLink to="/" class="nav-link hover:text-gray-300">Inicio</RouterLink>
            <RouterLink to="/quienes-somos" class="nav-link hover:text-gray-300">¿Quiénes somos?</RouterLink>
            <RouterLink to="/negocios" class="nav-link hover:text-gray-300">Negocios</RouterLink>
            <RouterLink to="/proyectos" class="nav-link hover:text-gray-300">Proyectos</RouterLink>
            <RouterLink to="/contacto" class="nav-link hover:text-gray-300">Contacto</RouterLink>
            <a href="mailto:info@reverlat.com" target="_blank" class="nav-link hover:text-gray-300">Haz tu cotización</a>
          </div>
        </nav>
      </div>

      <!-- Contenido de las páginas -->
      <main class="flex-grow p-6">
        <RouterView />
      </main>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      scrollTimeout: null
    };
  },
  methods: {
    handleScroll() {
      // Prevenir múltiples actualizaciones durante el scroll
      if (this.scrollTimeout) {
        window.cancelAnimationFrame(this.scrollTimeout);
      }
      
      this.scrollTimeout = window.requestAnimationFrame(() => {
        this.isScrolled = window.scrollY > 50;
      });
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Comprueba el scroll inicial
    this.handleScroll();
    
    // Añade clase para animaciones iniciales
    document.body.classList.add('loaded');
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.scrollTimeout) {
      window.cancelAnimationFrame(this.scrollTimeout);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

@font-face {
  font-family: 'evolve';
  src: url('../assets/fonts/evolve_sans.otf') format('otf');
  font-weight: normal;
  font-style: normal;
}

/* Animación para el logo */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.loaded .nav-link {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

.Logo {
  width: 150px; /* Tamaño fijo para evitar glitches */
  display: block;
  margin: 0 auto;
  max-width: 180px;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

nav {
  color: white;
  z-index: 50;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  transition: padding 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out;
  background-color: rgb(245, 244, 241);
  will-change: padding, background-color, box-shadow;
}

/* Sticky Navbar */
.sticky {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgb(245, 244, 241);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Estilo general del cuerpo */
body {
  background-color: rgb(245, 244, 241);
  color: rgb(75, 85, 99);
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
}

/* Estilo de los enlaces del menú */
.secciones a {
  text-decoration: none;
  color: rgb(107, 114, 128);
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.secciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 10px 0;
}

/* Efecto hover en los enlaces */
.secciones a::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0%;
  height: 3px;
  background-color: rgb(248, 207, 71);
  transition: width 0.4s ease-in-out;
}

@media (hover: hover) {
  .secciones a:hover {
    color: rgb(55, 65, 81);
    background-color: rgba(248, 207, 71, 0.1);
  }
  .secciones a:hover::after {
    width: 100%;
    left: 0;
  }
}

/* Estilos responsivos */
@media (max-width: 1024px) {
  .Logo {
    width: 130px;
  }

  .secciones a {
    font-size: 15px;
    padding: 6px 10px;
  }
}

@media (max-width: 768px) {
  .secciones {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 12px;
  }
  
  .secciones a {
    font-size: 14px;
    padding: 5px 8px;
    flex: 0 0 auto;
  }
  
  .Logo {
    width: 100px;
  }
  
  nav {
    padding: 15px 20px;
  }
}

/* Estilo cuando se hace scroll */
nav.scrolled {
  padding: 12px 40px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
}

nav.scrolled + div .Logo {
  transform: scale(0.9);
}

/* Estilos para las secciones principales */
main {
  background-color: rgb(250, 250, 250);
  min-height: 600px;
}

/* Animaciones para los elementos de la página al cargar */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Estilo para el botón CTA */
button {
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(248, 207, 71, 0.25);
}

/* Estilo para sección activa */
.router-link-active {
  color: rgb(248, 207, 71) !important;
  font-weight: 600;
}

.router-link-active::after {
  width: 100% !important;
}
</style>