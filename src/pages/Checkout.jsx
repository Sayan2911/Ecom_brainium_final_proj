import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';

const Checkout = () => {
  const navigate = useNavigate();
  const { cred } = useStore();

  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

  return (
    <div>Checkout</div>
  )
}

export default Checkout