<template>
  <div class="contact-container">
    <h2>Contáctanos</h2>
    <table class="contact-table">
      <tbody>
        <tr>
          <td><strong>País</strong></td>
          <td>México</td>
        </tr>
        <tr>
          <td><strong>Télefono</strong></td>
          <td><a href="https://wa.me/525534744687" target="_blank" rel="noopener noreferrer">+52 55 3474 4687</a></td>
        </tr>
        <tr>
          <td><strong>Mándanos un e-mail</strong></td>
          <td>
            <p>
              <a href="mailto:lsanchez@reverlat.com" target="_blank" rel="noopener noreferrer">lsanchez@reverlat.com</a>
              <br>
              <a href="mailto:info@reverlat.com" target="_blank" rel="noopener noreferrer">info@reverlat.com</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <img src="/images/fotos/jamalcoStean/jamalcoStean_35.jpg" alt="Rever_foto" class="contactoImg">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #333;
}

h2 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}

/* Estilos de la tabla */
.contact-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: rgb(0, 0, 0);
  background-color: rgb(245,191,106);
}

.contact-table td {
  padding: 15px;
  border: 1px solid #000000;
  text-align: left;
}

.contact-table td:first-child {
  font-weight: bold;
}

/* Estilos del enlace */
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Estilos de la imagen */
.contactoImg {
  max-width: 100%;
  margin: 20px auto;
  display: block;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Responsividad */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .contact-table td {
    padding: 12px;
  }

  .contactoImg {
    width: 80%;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.2rem;
  }

  .contactoImg {
    width: 90%;
  }
}
</style>
