import Viaje from './components/Viaje'
import Header from './components/Header'

function App() { 
  // El componente App es el componente principal de la aplicación.
  // Se encarga de renderizar el encabezado y el componente Viaje.
  return (
    <div className="bg-fondo min-h-screen bg-cover bg-center">
      <Header />
      <Viaje />
    </div>
  )
}

export default App
