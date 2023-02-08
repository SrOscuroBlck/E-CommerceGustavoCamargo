import React, { useState } from 'react';
import './Login.css';

const areaCodes = [  
  { label: 'Argentina (+54)', value: '+54' },  
  { label: 'Colombia (+57)', value: '+57' },  
  { label: 'Uruguay (+598)', value: '+598' },  
  { label: 'Brazil (+55)', value: '+55' }
];

export const Login = ({placeOrder}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

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

    if (isNameValid && isEmailValid && isPhoneValid) {
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${areaCode}${phone}`);
    }
  };

  const handlePlaceOrder = () => {
    placeOrder(name, email, areaCode + phone);
    };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="form-control"
        />
        {isNameValid && <span className="valid-icon">&#10003;</span>}
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
              {areaCodes.map(areaCode => (
                <option key={areaCode.value} value={areaCode.value}>
                  {areaCode.label}
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
        <button type="submit" className="btn btn-primary" id='btn' onClick={handlePlaceOrder}>
          Submit
        </button>
        </form>
        );
        };
