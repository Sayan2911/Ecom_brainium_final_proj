import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';
import Bill from './Bill';
import store from "../store.json"
import CheckoutCart from './CheckoutCart';
import { useUpdateStore } from '../useUpdateStore';
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
  const navigate = useNavigate();
  const { cred,data } = useStore();
  const { dataUp } = useUpdateStore();

   
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

  const notify = () => toast.success("Order updated succsesfully")
  return (
    <>
    <div className='d-flex  '>

    <div style={{width:"70%"}} >

      <table style={{ width: '90%' }} className='m-5'>
    <ToastContainer />

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
        dataUp.map((item,key)=>(

          <CheckoutCart 
          title={store[item].title}
          price={store[item].price}
          
          />
        ))
      }



    </div>
    <div className='d-flex justify-content-center align-items-center'>


    <div style={{width:"350px"}} className=''><Bill/></div>
    </div>


    </div>


    <div className='d-flex justify-content-between m-5'>
      <div className='border p-2  'role='button' onClick={()=>(navigate("/home"))}>return to shop</div>
      <div className='border p-2' role='button'  onClick={()=>(notify() )} >Update to cart</div>
      
    </div>


    



    
    </>
  )
}

export default Checkout