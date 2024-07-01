import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  useStore  from '../useStore';
import Cart from './Cart';

const Wishlist = () => {
  const navigate = useNavigate();
  const { cred,data } = useStore();
  
console.log(data);
  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

   console.log(data);

  function pass(){
    navigate('/cart');
  }
  
  return (
    <>
    
    <div>wish {data}</div>
   <button className='btn btn-primary' onClick={()=>(pass())}> add to bag</button>
    </>
    
  )
}

export default Wishlist