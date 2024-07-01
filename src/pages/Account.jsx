import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';

const Account = () => {
  const navigate = useNavigate();
  const { cred } = useStore();

  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

  return (
    <div>Account</div>
  )
}

export default Account