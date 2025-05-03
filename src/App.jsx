import { useState } from "react";
import Buscador from "./components/Buscador";

function App() {
  const [vuelos, setVuelos] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Buscador vuelos={vuelos} setVuelos={setVuelos} />
      {/* Other components like ListaVuelos can be added here */}
    </div>
  );
}

export default App;
