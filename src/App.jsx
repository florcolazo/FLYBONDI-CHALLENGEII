import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

function App() {
  const tareasIniciales = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(tareasIniciales);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="container mx-auto px-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Tareas</h1>
      <Formulario tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
}

export default App;
