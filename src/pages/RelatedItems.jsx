import React from 'react'
import store from "../store.json"
import Cards from './Non-linked/Cards'
import image6 from "../images/Rectangle 18.png"
const RelatedItems = ({categories}) => {



  return (
    <>
    <div>
    <div className="m-3 d-flex justify-content-start align-items-center h-16 w-full" style={{width:"100%"}}>
        <div className=" rounded mx-2" > <img src={image6} alt="none" /> </div>
        <p className="m-3 text-danger">Related Items </p>
      </div>
    </div>
    
    <div  className='d-flex justify-content-center align-item-center gap-2 m-4' style={{width:"100%"}}>

  
        <div className='d-flex justify-content-between align-item-center gap-5 m-4' style={{width:"90%"}}>{
            store.map((item)=>{
                if(item.category===categories){
            
                    return  (
                    <Cards 
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    star={item.rating.rate}
                    rates={item.rating.count}
                    />
                    
                    )}
                    })
                    
                    }
                 
        </div>
    </div>

    </>
  )
}

export default RelatedItems