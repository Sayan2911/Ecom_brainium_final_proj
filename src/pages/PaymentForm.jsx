import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    errors: {
      number: '',
      expiry: '',
      cvc: '',
    },
    isFormValid: false,
  });

  useEffect(() => {
    const { cvc, expiry, name, number, errors } = state;
    const isFormValid =
      cvc.length === 3 &&
      expiry.length === 5 && // MM/YY format
      name.trim() !== '' &&
      number.length === 16 &&
      !errors.number &&
      !errors.expiry &&
      !errors.cvc;
    setState((prevState) => ({ ...prevState, isFormValid }));
  }, [state.cvc, state.expiry, state.name, state.number]);

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errors = state.errors;

    switch (name) {
      case 'number':
        if (value.length <= 16) {
          errors.number = value.length !== 16 ? 'Card number must be 16 digits' : '';
          setState({ ...state, [name]: value, errors });
        }
        break;
      case 'expiry':
        let formattedValue = value.replace(/[^0-9]/g, '');
        if (formattedValue.length > 2) {
          formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
        }
        if (formattedValue.length <= 5) {
          const currentYear = new Date().getFullYear() % 100;
          const month = parseInt(formattedValue.substring(0, 2), 10);
          const year = parseInt(formattedValue.substring(3, 5), 10);
          const isMonthValid = month >= 1 && month <= 12;
          const isYearValid = year >= currentYear;
          errors.expiry = !isMonthValid || !isYearValid ? 'Expiry date is invalid or in the past' : '';
          setState({ ...state, [name]: formattedValue, errors });
        }
        break;
      case 'cvc':
        if (value.length <= 3) {
          errors.cvc = value.length !== 3 ? 'CVC must be 3 digits' : '';
          setState({ ...state, [name]: value, errors });
        }
        break;
      default:
        setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.cvc, state.expiry, state.name, state.number);
    if (state.isFormValid) {
      navigate('/paymentConfirmation');
    }
  };

  return (
    <div id="PaymentForm" className='container rounded d-flex justify-content-center align-items-center flex-column m-5'>
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <form className='d-flex align-items-center justify-content-center flex-column' onSubmit={handleSubmit}>
        <h3>Card info</h3>
        <div className='d-flex align-items-center justify-content-center flex-column gap-1 my-3 border p-3 rounded'>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={state.number}
            maxLength="16"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.errors.number && <p style={{ color: 'red' }}>{state.errors.number}</p>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={state.expiry}
            maxLength="5"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.errors.expiry && <p style={{ color: 'red' }}>{state.errors.expiry}</p>}
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            maxLength="3"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {state.errors.cvc && <p style={{ color: 'red' }}>{state.errors.cvc}</p>}
        </div>
        <button type="submit" className='btn btn-danger' disabled={!state.isFormValid}>Place Order</button>
      </form>
    </div>
  );
};

export default PaymentForm;
