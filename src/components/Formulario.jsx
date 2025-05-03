import { useState } from 'react'  
import React from 'react';


const Formulario = ({ tareas, setTareas }) => {

    const [ nombre, setNombre] = useState('')
    const [ puesto, setPuesto] = useState('')
    const [ fecha, setFecha] = useState('')
    const [ descripcion, setDescripcion] = useState('')
    const [ error, setError] = useState (false)
    
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
    return (random + fecha)
    }

    const handleSubmit = (e) =>{
        e.preventDefault() 
        
        if ([nombre, puesto, fecha, descripcion].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
        }else{
            console.log('Todos llenos')
            setError(false)

            const objetoTareas ={
                nombre,
                puesto,
                fecha,
                descripcion,
                id: generarId()
            }

            setTareas([...tareas, objetoTareas]) 

            setNombre('')
            setPuesto('')
            setFecha('')
            setDescripcion('')
        }
        
        
        console.log('Enviando formulario')
    }
    
    

    return (
        <div className="px-5 py-5 lg:w-2/5">
            <h2 className="font-black sm:text-3xl text-2xl  text-center ">Seguimiento de tareas</h2>    

            <p className="text-lg mt-5 mb-5 text-center">
                Añade tareas y {" "}
                <span className="text-indigo-600 font-bold">Administralas</span>
            </p>

            <form 
                onSubmit = {handleSubmit}
                className="bg-white shadow-md text-left">

                { error && 
                <div className=' text-red-800 text-left p-3-uppercase font-bold mb-3 mt-3 rounded-md'>
                    <p>Debe completar todos los campos</p>
                </div>
                }
                <div className="mb-5">
                    <label htmlFor="Nombre">Nombre del Dev</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input
                        id = "nombre" 
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="text"
                        placeholder="Nombre del desarrollador"
                        value = {nombre} 
                        onChange ={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="Puesto">Puesto del Dev</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input 
                        id = "puesto"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="text"
                        placeholder="Puesto del desarrollador"
                        value = {puesto}
                        onChange = {(e) => setPuesto(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta">Fecha de alta</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input 
                        id = "alta"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="date"
                        value = {fecha}
                        onChange = {(e) => setFecha(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="detalle">Descripción de la tarea</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <textarea 
                        id = "detalle"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        placeholder="Describa la tarea..."
                        value={descripcion}
                        onChange = {(e) => setDescripcion(e.target.value)}

                    />
                </div>

                <input
                    type="submit"
                    className="mb-5 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transitions-color rounded-md"
                />
            </form>
        </div>
    );
}

export default Formulario;