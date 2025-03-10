<template>
  <footer class="footer">
    <div class="container">
      <!-- Sección Principal -->
      <div class="footer-grid">
        <!-- Columna 1: Información de la Empresa -->
        <div class="footer-column company-info">
          <h3 class="footer-title">Rêver</h3>
          <p class="company-description">
            Empresa mexicana fundada en 2022, especializada en soluciones industriales 
            para los sectores de Oil & Gas, Energía y Minería. Nos enfocamos en la innovación 
            tecnológica, la eficiencia operativa y la seguridad industrial, ofreciendo 
            soluciones personalizadas que optimizan los procesos y reducen costos.
          </p>
          <p class="company-mission">Comprometidos con la sostenibilidad y el futuro de la industria.</p>
        </div>
        
        <!-- Columna 2: Navegación -->
        <div class="footer-column navigation">
          <h3 class="footer-title">Enlaces</h3>
          <nav class="footer-nav">
            <a href="/quienes-somos" class="footer-link">¿Quiénes Somos?</a>
            <a href="/proyectos" class="footer-link">Proyectos</a>
            <a href="/negocios" class="footer-link">Servicios</a>
            <a href="/contacto" class="footer-link">Contacto</a>
          </nav>
          <div class="logo-container">
            <img src="../assets/icono_R.png" alt="Logo Rêver" class="logo-footer">
          </div>
        </div>
        
        <!-- Columna 3: Contacto -->
        <div class="footer-column contact">
          <h3 class="footer-title">Contacto</h3>
          <div class="social-links">
            <!-- Puedes agregar enlaces a redes sociales aquí -->
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <!-- Línea divisoria -->
      <div class="footer-divider"></div>
      
      <!-- Sección de créditos -->
      <div class="credits-section">
        <div class="copyright">
          <p>© 2025 Rêver. Todos los derechos reservados.</p>
        </div>
        <div class="developer-info">
          <p>
            Developed on <strong>planet earth</strong> by 
            <a href="https://arnolsegovia.com" target="_blank" class="developer-link">
              makersA1 / <img src="../assets/atlante.png" alt="Logo Atlante" class="logo-credits">
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Variables de colores y estilos */
:root {
  --primary-color: rgb(245, 191, 106);
  --text-color: #ffffff;
  --background-color: #000000;
  --hover-background: rgba(255, 255, 255, 0.1);
  --divider-color: rgba(255, 255, 255, 0.2);
}

/* Estilos básicos */
.footer {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 4rem 2rem 2rem;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Grid principal */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

/* Estilos de columna */
.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

/* Información de empresa */
.company-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.company-mission {
  font-style: italic;
  opacity: 0.9;
}

/* Navegación */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-link:hover::after {
  width: 100%;
}

/* Logo en footer */
.logo-container {
  margin-top: 2rem;
  text-align: left;
}

.logo-footer {
  width: 80px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo-footer:hover {
  transform: scale(1.05);
}

/* Social links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
}

/* Divisor */
.footer-divider {
  height: 1px;
  background-color: var(--divider-color);
  margin: 3rem 0 1.5rem;
}

/* Sección de créditos */
.credits-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

.developer-link {
  color: var(--primary-color);
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.developer-link:hover {
  background-color: white;
  color: black;
}

.logo-credits {
  width: 1rem;
  height: auto;
  margin-left: 0.25rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }
  
  .footer-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .credits-section {
    flex-direction: column;
    text-align: center;
  }
  
  .logo-container {
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .logo-footer {
    width: 70px;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-column {
    align-items: center;
    text-align: center;
  }
  
  .footer-nav,
  .social-links {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }
  
  .footer-title {
    font-size: 1.125rem;
  }
  
  .credits-section {
    font-size: 0.75rem;
  }
}
</style>