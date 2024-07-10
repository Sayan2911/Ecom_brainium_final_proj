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
    
    <div className='container gap-2 d-flex flex-wrap d-flex align-items-center justify-content-center' style={{width:"100%"}}>
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


   <div className='d-flex  align-items-center justify-content-center  '>

   <button className='btn btn-primary m-1 ' onClick={()=>(pass())}> add to bag</button>

</div>
    <div>
    <RelatedItems categories={store[Math.floor(Math.random() * 13)].category}/>
    </div>
    </>
    
  )
}

export default Wishlist