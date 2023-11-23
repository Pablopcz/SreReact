// Importacion de librerias.

import React, {useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

// se declara el login.
const Login = () => {

  // Declaraciones de constantes.

  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');

// se declara la funcion.
  function handleChange(name, value) {
    if (name === 'estudiante') {

      // Varable para almacenar.
      setUser(value)
      } else {
        setPassword(value)
    }
  };

  function handleSubmit(){
    let account ={ user, password }
    if (account) {
      console.log('account', account)

    }
  };
// componentes con susuatributos.
  return (
    <div className='login-container'>   
        <Title text='Bienvenido SRE'/>
        <Label text='Estudiante' /> 
        <Input 
        attribute={{
          id: 'estudiante',
          name: 'estudiante',
          type: 'text',
          placeholder: 'Ingrese estudiante'
        }}
        handleChange={handleChange}  // cuando se ingresan valores en la entrada, que se usa para establecer un nuevo estado para la entrada.
        />
        <Label text='Contraseña' /> 
       <Input 
        attribute={{
          id: 'contraseña',
          name: 'contraseña',
          type: 'password',
          placeholder: 'Ingrese su contraseña'
        }}
        handleChange={handleChange}
        />
         <button>
          Ingresar
          </button>        
        
       
    </div>
  )
};

export default Login;