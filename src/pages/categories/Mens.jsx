import React, { useEffect, useState } from 'react'
import store from "../../store.json"
import Cards from '../Non-linked/Cards'

const Mens = () => {
   
  const [Data, setData] = useState([])
useEffect(() => {
  setData(store)
  
  }, [])
  Data.map((item)=>{
    console.log(item);
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <>
 <div className="container p-3 min-vh-100" >
 <div className="row d-flex justify-content-center align-items-stretch h-100">
    
   {
Data.map((item)=>{
    if(item.category==="men's clothing"){

        return  (
          
          

        <Cards 
        id={item.id}
        key={item.id}
        image={item.image}
        title={item.title}
        desc={item.desc}
        price={item.price}
        star={item.rating.rate} />
        
        
     
       
)}
    return null;
})

}
   
</div>  
</div>  
   </>
  )
}

export default Mens