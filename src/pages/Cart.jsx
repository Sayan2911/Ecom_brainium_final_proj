import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  useStore  from '../useStore';
import Cards from './Non-linked/Cards';
import store from "../store.json"

const Cart = () => {
  const navigate = useNavigate();
  const { cred,data } = useStore();
  
console.log(data);
  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

   console.log();
function navCheckout(){
  navigate('/checkout')
}
  
  
  return (  


    <div className='container gap-2 d-flex flex-wrap'>
  
       
       {
        data.map((item) => (
          <Cards
          
            id={store[item].id}
            image={store[item].image}
            title={store[item].title}
            desc={store[item].desc}
            price={store[item].price}
            star={store[item].rating.rate}
            rates={store[item].rating.count}
          />
        ))}
       
       <button className='btn btn-danger' onClick={()=>{navCheckout()}}>checkout</button>
       </div>
    
  )
}

export default Cart