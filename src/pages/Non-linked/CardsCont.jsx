import React, { useEffect, useState } from 'react'

import store from "../../store.json"
import Cards from './Cards'
const CardsCont = () => {
  const [Data, setData] = useState([])

useEffect(() => {
 
setData(store)

}, [])

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    {
      <div className="container p-3 min-vh-100" >
      <div className="row d-flex justify-content-center align-items-stretch h-100">
        {Data.map((item) => (
          <Cards
          
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            price={item.price}
            star={item.rating.rate}
            rates={item.rating.count}
          />
        ))}
      </div>
    </div>
    }


    </>
  )
}

export default CardsCont