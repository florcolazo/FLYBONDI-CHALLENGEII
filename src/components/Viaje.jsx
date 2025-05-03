import React, { useEffect, useState } from 'react'

const Viaje = () => {
  const [viaje, setViaje] = useState([]) // Estado correcto

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('/db/dataset.json') // Asegúrate de que la ruta sea correcta
      .then(response => response.json())
      .then(datos => {
        setViaje(datos)
      })
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
      <div className='input'>
        <input 
          type="text" 
          placeholder='LOOK FOR ITS PRICE...'
          value={busqueda} 
          onChange={handleSubmit}
        />
      </div>

      {resultado.length > 0 ? (
        resultado.map((vuelo, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <p><b>Data:</b> {vuelo.data}</p>
              <p><b>Origin:</b> {vuelo.origin}</p>
              <p><b>Destination:</b> {vuelo.destination}</p>
              <p><b>Price: $</b>{vuelo.price}</p>
              <p><b>Availability:</b> {vuelo.availability}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='not-viaje'>
          <div className='card-not'>
            <p>There are no trips with the registered price</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Viaje
