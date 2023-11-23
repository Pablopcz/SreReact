import React from 'react';
import './Input.css';

// Delaracion y sus atributos.

const Input = ({ attribute, handleChange, param  }) => {
  return (
    <div className='input-container'>
        <input 
        id={attribute.id}  // Id es para validar con que input estamao trabajando.
        name={attribute.name} // accesibilidad.
        placeholder={attribute.placeholder} //elementos de entrada de formulario, como campos o áreas de texto,
        type={attribute.type} // determina el tipo de entrada que se va a utilizar y sus valores pueden ser uno de los siguientes: text, muestra una caja donde introducir texto.
        onChange={ (e) => handleChange(e.target.name, e.target.value) }  // Los datos de una columna de formulario cambian y se pierde el foco.
        className='regular-style'
        />
    </div>
  )
};

export default Input;