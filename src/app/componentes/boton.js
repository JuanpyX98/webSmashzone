import React from 'react'
import '../estilos/boton.css'

const Boton = ({texto, funcion}) => {
  return (
    <div className='boton' onClick={funcion}>
        {texto}
    </div>
  )
}

export default Boton