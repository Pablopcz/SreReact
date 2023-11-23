// se realiza la importacion de react.

import React from 'react';
import './Title.css';

// Declaramos los componentes el objeto.
// Se declaran las clases.

const Title = ({ text }) => {
  return (
    <div className='title-container'>
       <label className='title-label'> {text} </label>
    </div>
  )
};

export default Title;