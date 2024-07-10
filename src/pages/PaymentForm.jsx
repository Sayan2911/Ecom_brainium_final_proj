import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentForm = () => {
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
  });

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errors = state.errors;

    switch (name) {
      case 'number':
        if (value.length <= 16) {
          errors.number = value.length !== 16 ? 'Card number must be 12 digits' : '';
          setState({ ...state, [name]: value, errors });
        }
        break;
      case 'expiry':
        const formattedValue = value.replace(/[^0-9]/g, '');
        if (formattedValue.length <= 4) {
          const currentYear = new Date().getFullYear();
          const month = parseInt(formattedValue.substring(0, 2), 10);
          const year = parseInt(`20${formattedValue.substring(2, 4)}`, 10);
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

  return (
    <div id="PaymentForm" className='contianer border rounded' >
      <form className='d-flex align-items-center justify-content-center flex-column  '>
      <h3>Card info</h3>
<div className='d-flex align-items-center justify-content-center flex-column gap-1 my-3 border p-3  rounded'>

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
          placeholder="MMYY Expiry"
          value={state.expiry}
          maxLength="4"
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
      </form>
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
    </div>
  );
};

export default PaymentForm;
