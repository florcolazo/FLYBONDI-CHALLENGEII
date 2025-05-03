import React from 'react';
import vuelos from "./vuelos"; 

const ListaVuelos = ({ vuelos }) => {
    return (
        <div className="lg:w-4/6 mx-auto">
        <h2 className="font-black text-2xl mt-5 mb-10 text-center">Listado de Vuelos</h2>
    
        {vuelos.length === 0 ? (
            <p className="text-center">No hay vuelos disponibles.</p>
        ) : (
            vuelos.map(vuelo => (
            <Vuelo
            key={vuelo.id}
            vuelo={vuelo}
            />
        ))
        )}
    </div> );
};

export default ListaVuelos;
