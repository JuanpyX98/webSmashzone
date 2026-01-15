import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BotonContacto = ({ icono, texto, funcion }) => {
  return (
    <div className="boton-seccion-contacto" onClick={funcion}>
      {<FontAwesomeIcon icon={icono} size='2x' />}
      {texto}
    </div>
  );
};

export default BotonContacto;
