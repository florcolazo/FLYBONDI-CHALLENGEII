import { useState } from "react";

const Tarea = ( { tarea }) => {
    const {nombre, puesto, fecha, descripcion} = tarea
    const [completo, setCompleto] = useState(false)


    const handleClick = () =>{    
        
        //validacion del form
        if (completo){
            setCompleto(false)
            console.log('incompleto')
        }else{
            setCompleto(true)
            console.log('completo')}

    }




    return (
        

        
        <div className="mx-10 my-10 bg-indigo-200 shadow-xl px-10 py-10 rounded-xl">
            <form onClick = {handleClick} className="flex justify-end mb-5">         
                    <input
                    type="checkbox"
                    onClick={(e) => setCompleto(e.target.checked)}                    
                    />
            </form>

    
            
            

            <p className={`font-bold mb-3 text-gray-700 uppercase ${completo ? 'line-through' : ''}`}> Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className={`font-bold mb-3 text-gray-700 uppercase ${completo ? 'line-through' : ''}`}>Puesto: {''}
                <span className="font-normal normal-case">{puesto}</span>
            </p>

            <p className={`font-bold mb-3 text-gray-700 uppercase ${completo ? 'line-through' : ''}`}>Fecha de la tarea: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className={`font-bold mb-3 text-gray-700 uppercase ${completo ? 'line-through' : ''}`}>Descripcion: {''}
                <span className="font-normal normal-case">{descripcion}</span>
            </p>

        </div>   
    );
}

export default Tarea;