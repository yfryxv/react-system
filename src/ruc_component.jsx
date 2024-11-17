import { useState } from 'react';

export default function Component() {
  const [activeSection, setActiveSection] = useState('consulta-ruc');

  const renderContent = () => {
    switch (activeSection) {
      case 'consulta-ruc':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Consulta RUC</h2>
            <p>Búsqueda por número de RUC</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Consideraciones</h3>
              <p>Los datos se obtienen del padrón reducido de SUNAT.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Headers</h3>
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Accept</td>
                    <td className="px-4 py-2 border">String</td>
                    <td className="px-4 py-2 border">application/json</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Content-Type</td>
                    <td className="px-4 py-2 border">string</td>
                    <td className="px-4 py-2 border">application/json</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Authorization</td>
                    <td className="px-4 py-2 border">string</td>
                    <td className="px-4 py-2 border">Bearer {'{token}'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Body</h3>
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">name</th>
                    <th className="px-4 py-2 border">type</th>
                    <th className="px-4 py-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">ruc</td>
                    <td className="px-4 py-2 border">string</td>
                    <td className="px-4 py-2 border">11 dígitos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">JSON</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify({
                  "data": {
                    "ruc": "20601491860",
                    "razon_social": "EMPRESA DEMO",
                    "estado": "ACTIVO",
                    "condicion": "HABIDO",
                    "direccion": "JR. ANDAHUAYLAS NRO. 100 INT. 201 URB. BARRIOS ALTOS - LIMA - LIMA - LIMA",
                    "departamento": "LIMA",
                    "provincia": "LIMA",
                    "distrito": "LIMA",
                    "fecha_inscripcion": "2017-03-08T00:00:00.000Z",
                    "fecha_inicio_actividades": "2017-03-08T00:00:00.000Z"
                  }
                }, null, 2)}
              </pre>
            </div>
          </div>
        )
      default:
        return <div>Selecciona una sección</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">DOCUMENTACIÓN</h1>
        <nav className="space-y-2">
          <button 
            className={`w-full text-left px-4 py-2 ${activeSection === 'inicio' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
            onClick={() => setActiveSection('inicio')}
          >
            INICIO
          </button>
          <button 
            className={`w-full text-left px-4 py-2 ${activeSection === 'panel' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
            onClick={() => setActiveSection('panel')}
          >
            PANEL
          </button>
          <button 
            className={`w-full text-left px-4 py-2 ${activeSection === 'token' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
            onClick={() => setActiveSection('token')}
          >
            TOKEN
          </button>
          <div>
            <button 
              className={`w-full text-left px-4 py-2 ${activeSection === 'documentacion' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
              onClick={() => setActiveSection('documentacion')}
            >
              DOCUMENTACIÓN
            </button>
            <div className="pl-4 space-y-2 mt-2">
              <button 
                className={`w-full text-left px-4 py-2 ${activeSection === 'endpoints' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
                onClick={() => setActiveSection('endpoints')}
              >
                ENDPOINTS
              </button>
              <button 
                className={`w-full text-left px-4 py-2 ${activeSection === 'consulta-dni' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
                onClick={() => setActiveSection('consulta-dni')}
              >
                consulta DNI
              </button>
              <button 
                className={`w-full text-left px-4 py-2 ${activeSection === 'consulta-ruc' ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-800'}`}
                onClick={() => setActiveSection('consulta-ruc')}
              >
                consulta RUC
              </button>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-bold">API Documentation</h2>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}
