<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-sections">
        <!-- Primera Sección: Información de la Empresa -->
        <div class="footer-section">
          <p><strong>Rêver</strong> Rêver es una empresa mexicana fundada en 2022, especializada en soluciones industriales para los sectores de Oil & Gas, Energía y Minería. Nos enfocamos en la innovación tecnológica, la eficiencia operativa y la seguridad industrial, ofreciendo soluciones personalizadas que optimizan los procesos y reducen costos. Comprometidos con la sostenibilidad y el futuro de la industria.</p>
        </div>
        
        <!-- Segunda Sección: Enlaces Internos -->
        <div class="footer-section">
          <ul>
            <li><a href="/quienes-somos">¿Quiénes Somos?</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/negocios">Servicios</a></li>
            <li><p>____________________________</p></li>
            <li>          <img src="../assets/icono_R.png" alt="Logo" class="logoFooter">            </li>
          </ul>
        </div>

        <!-- Tercera Sección: Contacto y Logo -->
        <div class="footer-section">
          <ul>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
          <ul>
            <p class="credits">
        <a class="year">© 2025</a>
        <br>

        developed in <strong>planet earth</strong><br><a href="https://arnolsegovia.com" target="_blank" class="website">makersA1 / <img src="../assets/atlante.png" alt="Logo" class="logoCredits" ></a>

      </p>
          </ul>
        </div>
      </div>
      

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgb(0, 0, 0);
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.footer-content {
  margin: 0 auto;
}

.footer-sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  min-width: 350px;
  text-align: left;
  margin-left: 5%;
}

.logoFooter {
  width: 20%;
  display: block;
}
.logoCredits {
  width: 3%;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

ul li a {
  color: rgb(245,191,106);
  text-decoration: none;
}

ul li a:hover {
  text-decoration: underline;
}

.credits {
  font-size: 13px;
  opacity: 0.7;
  display:block;

}

.year {
  font-size: 14px;
  opacity: 0.7;
  display:block;

}

.website{
  color: rgb(245,191,106);
}

.website:hover{
  background-color: white;
  color: black;
}
/* Responsive Design */
@media (max-width: 1686px) {

  .logoFooter {
    width: 30%;
    margin-bottom: 10%;
  }
  .footer-content {
  max-width: 1686px;
}
}

@media (max-width: 768px) {
  .footer-section {
    flex-direction: column;
    text-align: center;
    margin-left: -50%;
  }

  .logoFooter {
    width: 50%;
  }
  .footer-content {
  max-width: 166px;
}

}

@media (max-width: 430px) {
  .footer-sections {
    font-size: 16px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .footer {
  padding: 0px;
  width: 100%;

}

.footer-sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  min-width: 37px;
  text-align: center;
  margin-right: 5%;

}


  .logoFooter {
    width: 50%;
    margin-bottom: 10%;
    margin-left: 25%;
  }
  .footer-content {
  max-width: 375px;
}
}
</style>
