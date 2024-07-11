import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  useStore  from '../useStore';

import store from "../store.json"
import RelatedItems from './RelatedItems';
import CartCard from './CartCard';
import usecartStore from '../usecartStore';
import { useUpdateStore } from '../useUpdateStore';
const Wishlist = () => {
  const navigate = useNavigate();
  const { cred,data,resetData } = useStore();
  const { setDataUp } = useUpdateStore();

  
console.log(data);
  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

   console.log(data);

  function pass(){
  return  (data.length!==0)?(
      setDataUp(data),
    resetData(),
    navigate('/cart')):(
     console.log("please add data")
    )
  }
  
  return (
    <>
    <div className='d-flex  align-items-center justify-content-between   m-5'>
      <p className=''>Wishlist  ({data.length})</p>

<button className='form-control m-1 px-5 py-2'  style={{width:'15%'}} onClick={()=>(pass())}> add to bag</button>

</div>
    
    <div className='m-5 gap-4 d-flex flex-wrap d-flex align-items-center justify-content-start' style={{width:"93%"}}>
    {
     (data.length!==0)?( data.map((item)=>{
        
    
      return  (
      <CartCard 
      id={store[item].id}
      key={store[item].id}
      image={store[item].image}
      title={store[item].title}
      desc={store[item].desc}
      price={store[item].price}
      star={store[item].rating.rate}
      rates={store[item].rating.count}
      />
     
      )
      }
    )):(
      <div className='d-flex align-items-center justify-content-center'><p>no item found</p></div>
      
    )
            }



    </div>


   
    <div>
    <RelatedItems categories={store[Math.floor(Math.random() * 13)].category}/>
    </div>
    </>
    
  )
}

export default Wishlist