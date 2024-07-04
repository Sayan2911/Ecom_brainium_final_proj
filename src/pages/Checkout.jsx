import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';
import Bill from './Bill';
import store from "../store.json"
import CheckoutCart from './CheckoutCart';

const Checkout = () => {
  const navigate = useNavigate();
  const { cred,data } = useStore();

  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

  return (
    <>
    <div className='d-flex justify-content-between  '>

    <div style={{width:"70%"}} >

      <table style={{ width: '89%' }} className='m-5'>

            <thead style={{ width: '100%' }} >
              <tr style={{ width: '100%' }}>
                <th style={{ width: '40%' }} >Product</th>
                <th style={{ width: '10%' }}>Price</th>
                <th style={{ width: '10%' }}>Quantity</th>
                <th style={{ width: '10%' }}>Subtotal</th>
              </tr>
            </thead>

      </table>

      {
        data.map((item)=>(

          <CheckoutCart 
          title={store[item].title}
          price={store[item].price}
          
          />
        ))
      }



    </div>
    <div style={{width:"30%"}} className='m-5'><Bill/></div>



    </div>
    
    </>
  )
}

export default Checkout