import React, { useEffect } from 'react'
import store from "../../store.json"
import Cards from '../Non-linked/Cards'

const Electronics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
   <>
            <div className="container p-3 min-vh-100" >
      <div className="row d-flex justify-content-center align-items-stretch h-100">
   {
store.map((item)=>{
    if(item.category==="electronics"){

        return  (
        <Cards 
        id={item.id}
        key={item.id}
        image={item.image}
        title={item.title}
        desc={item.desc}
        price={item.price}
        star={item.rating.rate}
        rates={item.rating.count}/>
        
        )}
        })
        
        }
   
        </div>
        </div>
   
   </>
  )
}

export default Electronics