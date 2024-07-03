import React from 'react'
import usecartStore from '../usecartStore';

const Bill = () => {

  const {  getTotalValue } = usecartStore();
  return (
    <>
    
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
      <button className='btn btn-danger' >Checkout</button>
    
    </>
  )
}

export default Bill