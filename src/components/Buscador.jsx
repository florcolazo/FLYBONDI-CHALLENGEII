import { useState } from 'react';

const Buscador = ({ vuelos, setVuelos }) => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fecha, setFecha] = useState('');
  const [precio, setPrecio] = useState('');
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([origen, destino, fecha, precio].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const nuevoVuelo = {
      origen,
      destino,
      fecha,
      precio,
      id: generarId(),
    };

    setVuelos([...vuelos, nuevoVuelo]);

    setOrigen('');
    setDestino('');
    setFecha('');
    setPrecio('');
  };

  return (
    <div className="px-5 py-5 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Agregar Vuelo</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-md">
        {error && (
          <div className="text-red-800 font-bold mb-3">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="origen">Origen</label>
          <input
            id="origen"
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="text"
            placeholder="Ej: BUE"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="destino">Destino</label>
          <input
            id="destino"
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="text"
            placeholder="Ej: COR"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="number"
            placeholder="Ej: 25000"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Agregar Vuelo"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md"
        />
      </form>
    </div>
  );
};

export default Buscador;
