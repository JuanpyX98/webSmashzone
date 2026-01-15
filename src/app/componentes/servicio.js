import Image from 'next/image'
import React from 'react'
import '../estilos/servicio.css'

const Servicio = ({imagen ,titulo, texto, reverse}) => {
  return (
    <div className={`${reverse ? 'servicio-reverse' : ''} servicio`}>
        <Image src={imagen} width={350} height={200} alt='servicio'/>
        <div className={`${reverse ? 'informacion-reverse' : ''} informacion`}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default Servicio