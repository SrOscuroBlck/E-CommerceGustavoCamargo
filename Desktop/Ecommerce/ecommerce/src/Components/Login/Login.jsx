import React, { useState, useRef } from 'react';
import { AreaCodes } from './AreaCodes';
import './Login.css';

/**
 * @returns {JSX.Element} Login
 * @description El componente Login se compone de un formulario con validaciones, fue el componente al cual
 * le aplique todo lo que se de backend, en este caso el manejo de estados y validaciones.
 * @function Login - Funcion que retorna un formulario con validaciones
 */

export const Login = ({placeOrder, setBeforePurchase}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  /**
   * @function handleNameChange - Funcion que maneja el cambio de estado del input name, comprueba que el nombre no este vacio
   * y si no lo esta, cambia el estado de isNameValid a true, de lo contrario a false y almacena el valor del input en el estado name.
   * @function handleEmailChange - Funcion que maneja el cambio de estado del input email, comprueba que el email sea valido
   * y si lo es, cambia el estado de isEmailValid a true, de lo contrario a false y almacena el valor del input en el estado email.
   * @function handlePhoneChange - Funcion que maneja el cambio de estado del input phone, comprueba que el telefono sea valido
   * y si lo es, cambia el estado de isPhoneValid a true, de lo contrario a false y almacena el valor del input en el estado phone.
   * @function handleAreaCodeChange - Funcion que maneja el cambio de estado del input areaCode, almacena el valor del input en el estado areaCode.
   * @function handleSubmit - Funcion que maneja el evento submit del formulario, comprueba que todos los campos esten validos y si lo estan, habilita el boton.
   * @function handlePlaceOrder - Funcion que aplica todas las anteriores y envia la orden al componente padre donde se envia a la base de datos.
   * 
   */

  const handleNameChange = event => {
    setName(event.target.value);
    setIsNameValid(event.target.value.length > 0);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
    setIsEmailValid(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value)
    );
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
    setIsPhoneValid(/^\d{9,}$/.test(event.target.value));
  };

  const handleAreaCodeChange = event => {
    setAreaCode(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handlePlaceOrder = () => {
    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      // show a message indicating that all fields must be filled
      setErrorMessage('All fields must be filled');
      return;
    }

    placeOrder(name, email, areaCode + phone);
    setErrorMessage('');
    };
    
  return (
    <form onSubmit={handleSubmit} className="login-form">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="form-control"
        />
        {isNameValid ? (
          
          <span className="valid-icon">&#10003;</span>
        ) :
          <span className="invalid-icon">&#10007;</span>
        }
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="form-control"
        />
        {isEmailValid ? (
          <span className="valid-icon">&#10003;</span>
        ) : (
            <span className="invalid-icon">&#10007;</span>
            )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <div className="phone-input-group">
            <select
              id="phone"
              value={areaCode}
              onChange={handleAreaCodeChange}
              className="form-control"
            >
              {AreaCodes.map(areaCode => (
                <option key={areaCode.code} value={areaCode.value}>
                  {areaCode.label} ({areaCode.value})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              className="form-control"
            />
          </div>
          {isPhoneValid ? (
            <span className="valid-icon">&#10003;</span>
          ) : (
              <span className="invalid-icon">&#10007;</span>
            )}
        </div>
        <button type="submit" className="btn btn-success" id='submit-btn' onClick={handlePlaceOrder} disabled={isSubmitDisabled}>
          Submit
        </button>
        <button type="cancel" className="btn btn-danger" id='cancel-btn' onClick={() => setBeforePurchase(true)}>
          Cancel
        </button>
        </form>
        );
        };