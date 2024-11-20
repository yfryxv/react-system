<<<<<<< HEAD
import React from 'react';
import 'styles/dni.css';
=======
import './App.css';
>>>>>>> e5e15e6e7f8e058b66effd897e409d490b252401

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h3>ENDPOINTS</h3>
        <ul>
          <li><a href="#consulta-dni">Consulta DNI</a></li>
          <li><a href="#consulta-ruc">Consulta RUC</a></li>
        </ul>
      </aside>

      <div className="documentation">
        <h2 id="consulta-dni">Consulta DNI</h2>
        <section>
          <h3>Consideraciones</h3>
          <ul>
            <li>Este servicio no se conecta con RENIEC.</li>
            <li>El origen de datos depende del padrón reducido SUNAT y otras fuentes públicas.</li>
            <li>El padrón reducido SUNAT no devuelve datos de menores de edad, dirección, etc.</li>
          </ul>
        </section>

        <section>
          <h3>Consulta DNI</h3>
          <p><span className="method">POST</span>http://localhost:8080/api/search/1/dni</p>

          <h4>Headers</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accept</td>
                <td>String</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>String</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Authorization</td>
                <td>String</td>
                <td>Bearer {`{token}`}</td>
              </tr>
            </tbody>
          </table>

          <h4>Body</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dni</td>
                <td>String</td>
                <td>8 dígitos</td>
              </tr>
            </tbody>
          </table>

          <h4>Respuesta 200</h4>
          <pre>
            {`
{
  "success": true,
  "data": {
    "numero": "7***53",
    "nombre_completo": "PE** A**LAR, CA***INA",
    "nombres": "CA***INA",
    "apellido_paterno": "PE**",
    "apellido_materno": "A**LAR",
    "codigo_verificacion": "8"
  }
}
            `}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default App;
