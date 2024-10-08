import React, { useEffect, useState } from 'react';
import Bill from './Bill';
import usecartStore from '../usecartStore';
import useStore from '../useStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreditCardInput from 'react-credit-card-input';
import banks from "../images/Frame 834.png"
import PaymentForm from './PaymentForm';
// import { useInvoice } from './Non-linked/Invoice';
import { useNavigate } from 'react-router-dom';
import { useOrderStorage } from './useOrderStorage';
const BillPayment = () => {
  const {  setUserName,setUserStreetAddress,setUserFloorNo,setUserCity,setUserPhoneNumber,setUserMail,setUserPaymentStat} = useOrderStorage();
  const navigate = useNavigate();
const notify = (detailing) => toast.success("Order "+ detailing +"succsesfully");


const [check, setCheck] = useState(false)
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  
    const {resetCartData }=usecartStore()
    const {resetData }=useStore()

    const [formData, setFormData] = useState({
      name: '',
      streetAddress: '',
      floorApartmentNo: '',
      townCity: '',
      phoneNumber: '',
      emailAddress: '',
    });


    function reset(){
      if(selectedPaymentMethod==="banks"){

       if( formData.name.length!==0 && formData.streetAddress.length!==0 && formData.floorApartmentNo.length!==0 && formData.townCity.length!==0 && formData.phoneNumber.length!==0 && formData.emailAddress.length){
          console.log(formData.name,formData.streetAddress,formData.floorApartmentNo,formData.townCity,formData.phoneNumber,formData.emailAddress)
          notify(" details filled ")
          setUserName( formData.name)
          setUserStreetAddress(formData.streetAddress)
          setUserFloorNo(formData.floorApartmentNo)
          setUserCity(formData.townCity)
          setUserPhoneNumber(formData.phoneNumber)
          setUserMail(formData.emailAddress)
          setUserPaymentStat("card")

          navigate('/creditCards')
       
      
      }
      
        else
         console.log("please fill details")

        
      }
      else{
         if( formData.name.length!==0 && formData.streetAddress.length!==0 && formData.floorApartmentNo.length!==0 && formData.townCity.length!==0 && formData.phoneNumber.length!==0 && formData.emailAddress.length){
          console.log(formData.name,formData.streetAddress,formData.floorApartmentNo,formData.townCity,formData.phoneNumber,formData.emailAddress)
        notify(" submitted ")
        console.log(formData.name,formData.streetAddress,formData.floorApartmentNo,formData.townCity,formData.phoneNumber,formData.emailAddress);
        
        setUserName( formData.name)
        setUserStreetAddress(formData.streetAddress)
        setUserFloorNo(formData.floorApartmentNo)
        setUserCity(formData.townCity)
        setUserPhoneNumber(formData.phoneNumber)
        setUserMail(formData.emailAddress)
        setUserPaymentStat("cash on delivary")
          navigate('/paymentConfirmation')  
       
         }

         else
         console.log(" submmited ")

        }
        
    }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  const {  getTotalValue } = usecartStore();




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
      <form onSubmit={handleSubmit} action='post'>
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

      awd

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
         
          checked="checked"
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
    
    </div>

</div>
        
    </div>
    </div>

    </>

  );
};

export default BillPayment;
