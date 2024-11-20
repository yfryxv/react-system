import React from "react";
import "./App.css";

const Sidebar = () => (
  <nav className="sidebar">
    <div className="menu">
      <span className="menu-icon">&#9776;</span>
      <ul>
        <li><a href="#">INICIO</a></li>
        <li><a href="/Page/dni">PANEL</a></li>
        <li><a href="#">TOKEN</a></li>
        <li><a href="#">DOCUMENTACIÓN</a></li>
      </ul>
    </div>
  </nav>
);

const Content = () => (
  <main className="content">
    <h1>INICIO</h1>
    <div className="notice">
      <p>Te sugerimos usar clientes REST como Postman e Insomnia para probar tus APIs sin la complicación de codificar.</p>
    </div>
    <div className="download">
      <button>ApiPeruDevExport.postman_collection.zip</button>
    </div>
    <p className="token-instruction">
      Actualiza el <span className="highlight">{"token"}</span> en la sección correspondiente de variables.
    </p>
    <div className="next-section">
      <button>Consulta DNI</button>
    </div>
    <Footer />
  </main>
);

<<<<<<< HEAD
export default App
<<<<<<< HEAD
=======

>>>>>>> alejandro
=======
const Footer = () => (
  <footer className="footer">
    <p>Última actualización hace un mes</p>
  </footer>
);

const App = () => (
  <div className="container">
    <Sidebar />
    <Content />
  </div>
);

export default App;
>>>>>>> alejandro
