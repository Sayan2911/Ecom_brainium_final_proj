import React, { useState } from 'react'
import store from "../store.json"         
import Star from "./Non-linked/Star"

import { useParams } from 'react-router-dom';

import delivary from "../images/Frame 911.png"
import { useOrderStorage } from './useOrderStorage';


var val=null
const MyOrderCard = () => {

  const {  userData} = useOrderStorage();

  var {id}=useParams()
   console.log(id);
 
  
 
   val = store.find((item) =>item.id.toString()===id.toString());
 
   if (val) {
     console.log(val);
   } else {
     console.log('Item not found');
   }
 


  return (

   
    <>
<div className="container product-details mt-5" style={{width:"100vw", height:"80vh"}}>
      <div className="d-flex flex-wrap" style={{width:"100%" , height:"100%"}}>
        <div className="col-12 col-md-6 mb-3 d-flex justify-content-center align-items-center " style={{width:"50%" , height:"100%"}}>
          <img src={val.image} alt="none" className="img-fluid product-image object-fit-scale"  style={{width:"100%" , height:"100%"}}/>
        </div>
        <div className="col-12 col-md-6 mb-3 p-4 d-flex justify-content-between align-items-start flex-column"style={{width:"50%" , height:"100%"}}>
          <h2>{val.title}</h2>
          <div className="stars-reviews mb-3">  
            <Star value={val.rating.rate} />
            <span>({val.rating.count} )</span>
          </div>
          <div className="price mb-3">${val.price}</div>
          <div className="description mb-3">{val.description}</div>

          
     
        </div>
      </div>

     
    
    </div>

<div className='d-flex justify-content-between m-5'  style={{width:"90%"}}>


{/* 1 */}
<div>


    <div className=''>
    <h2>View order details</h2>
    <p>Order date      {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</p>
    <p>Order#     {Math.floor(Math.random()*7*100000000000)}</p>
    <p>Order total   ${val.price}()</p>
    </div>


    <div>
        <div style={{width:"100%"} } className=''>
          <h2>Shipping Address</h2>      
        <div>
      <p className='m-0'>{userData.UserName}</p>
      <p className='m-0'>{userData.UserStreetAddress} </p>
      <p className='m-0'>  {userData.UserFloorNo} </p>
      <p className='m-0'>  {userData.UserPhoneNumber} </p>
      <p className='m-0'> {userData.UserMail}</p>
      </div>
    
        </div>
        </div>
</div>

{/* 2 */}

<div>


    <div className='' style={{textAlign:"right"} }>
    <h2>Order summary</h2>
    <p>${val.price}  Order price </p>
    <p>1   OrderQty  </p>
    <p>${val.price}   Order total</p>
    </div>


    <div>
        <div style={{width:"100%", textAlign:"right"} } className=''>
          <h2>Payment Info</h2>      
        <div>
          <p> Cash on delivary</p>
      </div>
    
        </div>
        </div>
</div>

</div>
</>
  )
}

export default MyOrderCard