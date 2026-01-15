import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Data = ({icono, texto}) => {
  return (
    <div className='data'>
        {<FontAwesomeIcon icon={icono} size='2x'/>}
        <div>{texto}</div>
    </div>
  )
}

export default Data