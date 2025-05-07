import React, { useEffect, useState } from 'react'
import avionImage from '../assets/avion.png'

const Viaje = () => {
  const [viaje, setViaje] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('/db/dataset.json')
      .then(response => response.json())
      .then(datos => setViaje(datos))
      .catch(err => console.error('Error cargando JSON:', err))
  }, [])

  const handleSubmit = (event) => {
    setBusqueda(event.target.value)
  }

  const resultado = !busqueda
    ? viaje
    : viaje.filter((item) => item.price <= Number(busqueda))

  return (
    <>
      <nav className="bg-[#f5efe5] h-20 shadow-md flex items-center px-4">
        
      </nav>

      <div className='my-6 text-center'>
        <input 
          type="text" 
          placeholder='LOOK FOR ITS PRICE...'
          value={busqueda} 
          onChange={handleSubmit}
          className="w-[400px] h-[50px] text-center rounded-lg bg-gray-300 border-none shadow-md hover:shadow-yellow-400 transition-all"
        />
      </div>



      <div className="container-form flex flex-wrap justify-center gap-4 px-4 pb-10">
        {resultado.length > 0 ? (
          resultado.map((vuelo, index) => (
            <div key={index} className="card p-4 rounded-md shadow-lg text-sm font-semibold text-gray-800 bg-white bg-opacity-80 backdrop-blur-md w-[200px]">
              <p><strong>Data:</strong> {vuelo.data}</p>
              <p><strong>Origin:</strong> {vuelo.origin}</p>
              <p><strong>Destination:</strong> {vuelo.destination}</p>
              <p><strong>Price:</strong> ${vuelo.price}</p>
              <p><strong>Availability:</strong> {vuelo.availability}</p>
            </div>
          ))
        ) : (
          <div className='not-viaje'>
            <div className='card-not'>
              <p>There are no trips with the registered price</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Viaje

