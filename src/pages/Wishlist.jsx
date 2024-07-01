import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  useStore  from '../useStore';
import Cart from './Cart';
import Cards from './Non-linked/Cards';
import store from "../store.json"
import RelatedItems from './RelatedItems';

const Wishlist = () => {
  const navigate = useNavigate();
  const { cred,data } = useStore();
  
console.log(data);
  
  useEffect(() => {
    if (!cred) {
      navigate('/login');
    }
  }, [cred, navigate]);

   console.log(data);

  function pass(){
    navigate('/cart');
  }
  
  return (
    <>
    
    <div className='container gap-2 d-flex flex-wrap' style={{width:"100%"}}>
    {
      data.map((item)=>{
        
    
            return  (
            <Cards 
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
          )
         
            }



    </div>

   <button className='btn btn-primary ' onClick={()=>(pass())}> add to bag</button>
    <div>
    <RelatedItems categories={store[data[data.length-1]].category}/>
    </div>
    </>
    
  )
}

export default Wishlist