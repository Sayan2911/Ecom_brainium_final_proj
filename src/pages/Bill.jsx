import React from 'react'
import usecartStore from '../usecartStore';
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';

const Bill = () => {

  const {  getTotalValue } = usecartStore();
  const {data}=useStore()
  console.log(data);
  const navigate = useNavigate();

  function navToPayment(){
    navigate("/payment")
  }
  return (
    <>
    <div className='border p-5'>

    <div>

      <div >
        <h4>Cart Total</h4>
      </div>

      <div className='d-flex justify-content-between allign-item-center m-2 border-bottom'>
        <p>subtotal</p>
        <p>{getTotalValue()}</p>
      </div>


      <div className='d-flex justify-content-between allign-item-center m-2 border-bottom'>
        <p>shipping</p>
        <p>free</p>
      </div>


      <div className='d-flex justify-content-between allign-item-center m-2 border-bottom'>
        <p>total</p>
        <p>{getTotalValue()}</p>
      </div>
    </div>

    <div className='d-flex align-items-center justify-content-center my-5'>

      <button className='btn btn-danger' onClick={()=>(navToPayment())} >Checkout</button>
    </div>
    
    </div>
    </>
  )
}

export default Bill