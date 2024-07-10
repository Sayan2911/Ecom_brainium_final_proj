import React, { useEffect, useState } from 'react';
import Bill from './Bill';
import usecartStore from '../usecartStore';
import useStore from '../useStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreditCardInput from 'react-credit-card-input';
import banks from "../images/Frame 834.png"
import PaymentForm from './PaymentForm';

import { useNavigate } from 'react-router-dom';
const BillPayment = () => {
  const navigate = useNavigate();
const notify = () => toast.success("Order submitted succsesfully");


const [check, setCheck] = useState(false)

    const {resetCartData }=usecartStore()
    const {resetData }=useStore()

    function reset(){
        resetCartData()
        resetData()
        navigate('/paymentConfirmation')
    }

  const [formData, setFormData] = useState({
    name: '',
    streetAddress: '',
    floorApartmentNo: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a toast notification (or alert in this case)

    console.log(
      formData
      
    );
    
notify()
    // Clear the form fields
    setFormData({
      name: '',
      streetAddress: '',
      floorApartmentNo: '',
      townCity: '',
      phoneNumber: '',
      emailAddress: '',
    });
   
   
  };
  const {  getTotalValue } = usecartStore();


  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  useEffect(() => {
              
            
             
  }, [check])

  return (
    <>
   
    <h2 className='m-5'>Exclusive</h2>
    <div className='d-flex m-5' style={{width:"100%"}}>


 <ToastContainer />
  
    <div className="container  " style={{width:"40%"}} >
      <h1>Billing Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
              required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Street Address</label>
          <input 
            type="text" 
            className="form-control" 
            name="streetAddress" 
            value={formData.streetAddress} 
            onChange={handleChange} 
            required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Floor/Apartment No.</label>
          <input 
            type="text" 
            className="form-control" 
            name="floorApartmentNo" 
            value={formData.floorApartmentNo} 
            onChange={handleChange} 
            required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Town/City</label>
          <input 
            type="text" 
            className="form-control" 
            name="townCity" 
            value={formData.townCity} 
            onChange={handleChange} 
            required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input 
            type="tel" 
            className="form-control" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-control" 
            name="emailAddress" 
            value={formData.emailAddress} 
            onChange={handleChange} 
            required
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <button type="submit" className="btn btn-danger" onClick={()=>(reset())}>Place Order</button>
      </form>
    </div>

    <div style={{width:"60%"}} className='d-flex align-items-center justify-content-center'>


    <div style={{width:"45%"}}>

<div  >
  <h4>Cart Total</h4>
</div>

<div className='d-flex justify-content-between allign-item-center m-2 border-bottom' style={{backgroundColor:"#F5F5F5"}}>
  <p>subtotal</p>
  <p>{getTotalValue()}</p>
</div>


<div className='d-flex justify-content-between allign-item-center m-2 border-bottom'>
  <p>shipping</p>
  <p>free</p>
</div>


<div className='d-flex justify-content-between allign-item-center m-2 border-bottom' style={{backgroundColor:"#F5F5F5"}}>
  <p>total</p>
  <p>{getTotalValue()}</p>
</div>
{/* 
<div>
  
<label htmlFor="" className='mx-2'><input type="radio"  name="bank" id="" className=' mx-2'/> cash on delivary</label>
  <div className='d-flex align-items-center justify-content-between  gap-2 m-2'>

    <label htmlFor=""><input type="radio" name="bank" id=""className='m-2' />banks</label>
    <img src={banks} alt="none" />

  </div>
<div required>

  <CreditCardInput
   onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
   cardCVCInputProps={{
     onBlur: e => console.log('cvc blur', e.target.value),
     onChange: e => console.log('cvc change',),
     onError: err => console.log(`cvc error: ${err}`)
    }}
    cardExpiryInputProps={{
      onBlur: e => console.log('expiry blur', e.target.value),
      onChange: e => console.log('expiry change', ),
      onError: err => console.log(`expiry error: ${err}`)
    }}
    cardNumberInputProps={{
      onBlur: e => console.log('number blur', e.target.value),
      onChange: e => console.log('number change'),
      onError: err => console.log(`number error: ${err}`)
    }}
    
/>
    </div>








</div> */}

<div>
      <label className='mx-2'>
        <input
          type='radio'
          name='bank'
          value='cash'
          className='mx-2'
          onChange={handlePaymentMethodChange}
        />
        Cash on Delivery
      </label>
      <div className='d-flex align-items-center justify-content-between gap-2 m-2'>
        <label>
          <input
            type='radio'
            name='bank'
            value='banks'
            className='m-2'
            onChange={handlePaymentMethodChange}
          />
          Banks
        </label>
        <img src={banks} alt='banks' />
      </div>
      {selectedPaymentMethod === 'banks' && (
        <div>

          
            
            
           <PaymentForm/>
          
        </div>
      )}
    </div>

</div>
        
    </div>
    </div>

    </>

  );
};

export default BillPayment;
