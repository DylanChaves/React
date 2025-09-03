import React from 'react'

const nombre ="Bienvendo"
function FormUser() {
  return (
    <div>FormUser
        <h1>{nombre}</h1>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />

        <button></button>
    </div>
  )
}

export default FormUser