import React from 'react';

import Tarea from "./Tarea";

const ListadoTarea = ({ tareas }) => {
    return (
    <div className="lg:w-4/6">
        <h2 className=" font-black sm:text-2xl text-xl  mt-5 mb-10 text-center">Listado de Tareas</h2>
        
        {
            tareas.map( tarea => (
                <Tarea
                    key= {tarea.id}
                    tarea = {tarea}
                />
                )
            )
        }
    </div> 
    );
}

export default ListadoTarea;