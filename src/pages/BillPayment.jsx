import React, { useState } from 'react';
import Bill from './Bill';
import usecartStore from '../usecartStore';
import useStore from '../useStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BillPayment = () => {

const notify = () => toast.success("Order submitted succsesfully");


    const {resetCartData }=usecartStore()
    const {resetData }=useStore()

    function reset(){
        resetCartData()
        resetData()
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
  return (

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
              
            style={{backgroundColor:"#F5F5F5"}}
          />
        </div>
        <button type="submit" className="btn btn-danger" onClick={()=>(reset())}>Place Order</button>
      </form>
    </div>

    <div style={{width:"60%"}} className='d-flex align-items-center justify-content-center'>


    <div style={{width:"40%"}}>

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
</div>
        
    </div>
    </div>
  );
};

export default BillPayment;
