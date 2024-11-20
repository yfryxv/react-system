function App() {
  return (
    <div>
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
          <a href="#">¿Ya tienes una cuenta? Inicia sesión</a>
        </div>

        {/* Formulario de Inicio de Sesión */}
        <div className="form">
          <h1>Iniciar Sesión</h1>
          <form>
            <input type="email" placeholder="CORREO ELECTRONICO" required />
            <input type="password" placeholder="CONTRASEÑA" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <a href="#">¿No tienes cuenta? Regístrate</a>
        </div>

      </div>

      {/* Pie de página */}
      <footer>© 2024 APIS FYP. Todos los derechos reservados.</footer>
    </div>
  );
}

export default App;

