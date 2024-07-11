import React from 'react'
import store from "../store.json"
import Cards from './Non-linked/Cards'
import image6 from "../images/Rectangle 18.png"

const RelatedItems = ({ categories }) => {
  // Filter and slice the store array to get up to four items that match the category
  const filteredItems = store.filter(item => item.category === categories).slice(0, 4);

  return (
    <>
      <div className='m-4'>
        <div>
          <div className="m-3 d-flex justify-content-start align-items-center h-16 w-full" style={{ width: "100%" }}>
            <div className="rounded mx-2"><img src={image6} alt="none" /></div>
            <p className="m-3 text-danger">Related Items</p>
          </div>
        </div>

        <div className='d-flex justify-content-start align-item-center m-4' style={{ width: "100%" }}>
          <div className='d-flex justify-content-between align-item-center gap-5' style={{ width: "90%" }}>
            {
              // Map over the filtered and sliced items to render the Cards components
              filteredItems.map(item => (
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
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedItems
