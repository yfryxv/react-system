import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contáctenos</h3>
          <p>Correo electrónico: apiperu@esolutions.dev</p>
          <p>Celular: 947 299 925</p>
        </div>
        <div className="footer-column">
          <h3>Términos</h3>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ApiPerúDev. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;