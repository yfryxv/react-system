function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className="logo">APIS FYP</div>

      {/* Contenedor de formularios */}
      <div className="container">
        {/* Formulario de Registro */}
        <div className="form">
          <h1>Registro</h1>
          <p>Hazlo ahora y obtén nuestro servicio totalmente gratis. ¡Más de 200 comprobantes gratuitos al mes!</p>
          <form>
            <input type="text" placeholder="NOMBRE DE USUARIO" required />
            <input type="email" placeholder="CORREO ELECTRONICO" required />
            <input type="password" placeholder="CONTRASEÑA" required />
            <button type="submit">Registrarse</button>
          </form>
        </div>

        {/* Formulario de Inicio de Sesión */}
        <div className="form">
          <h1>Iniciar Sesión</h1>
          <form>
            <input type="email" placeholder="CORREO ELECTRONICO" required />
            <input type="password" placeholder="CONTRASEÑA" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Contáctenos</h3>
            <p>Correo electrónico: apiperu@esolutions.dev</p>
            <p>Celular: 947 299 925</p>
          </div>
          <div className="footer-column">
            <h3>Términos</h3>
            <p><a href="#" className="footer-link">Términos y condiciones</a></p>
            <p><a href="#" className="footer-link">Política de privacidad</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 ApiPerúDev. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
