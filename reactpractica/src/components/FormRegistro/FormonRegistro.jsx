import React, { useRef, useState } from 'react'

function FormonRegistro() {

    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [password,setPassword]=useState("")

    const cargarDatos =() =>{
        console.log(nombre,apellido,password)

    }

    const Modal = useRef(null)

    const abrirModal =() =>{
            Modal.current.showModal()
        }

        const closeModal  =() =>{
            Modal.current.close()
        }


  return (
    <div>as

        <dialog ref={Modal}>

            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" className="input-text" placeholder='Nombre' value={nombre} type="text" onChange={(e)=>setNombre(e.target.value)}/>

            <label htmlFor="apellido">Apellido</label>
            <input id="apellido" className="input-text" placeholder='Apellido' value={apellido} type="text" onChange={(e)=>setApellido(e.target.value)}/>

            <label htmlFor="">Contraseña</label>
            <input type="password"id="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='boton3' onClick={closeModal}>xxxxxxxxxxx</button>
            
        </dialog>
        
        <button className='boton' onClick={cargarDatos} >Registrar</button>
        <button className='boton2' onClick={abrirModal}>iniciar sesion</button>

    </div>
  )
}

export default FormonRegistro