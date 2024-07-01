import React, { useState } from 'react'
import store from "../store.json"         
import Star from "./Non-linked/Star"
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
var val=null
const ProductDetails = () => {


  var {id}=useParams()
   console.log(id);
 
  
 
   val = store.find((item) =>item.id.toString()===id.toString());
 
   if (val) {
     console.log(val);
   } else {
     console.log('Item not found');
   }
 


  const [quantity, setQuantity] = useState(1);
 
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1); 

  return (
<>
<div className="container product-details mt-5">
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-6 mb-3">
          <img src={val.image} alt="none" className="img-fluid product-image" />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <h2>{val.title}</h2>
          <div className="stars-reviews mb-3">
            <Star value={val.rating.rate} />
            <span>({val.reviews} reviews)</span>
          </div>
          <div className="price mb-3">${val.price}</div>
          <div className="description mb-3">{val.description}</div>
          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
            <div className="quantity mx-3">{quantity}</div>
            <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
            <button className="btn btn-danger ms-3">Add to Cart</button>
            <FaRegHeart className="ms-3 heart-icon" />
          </div>
        </div>
      </div>
    
    </div>

</>
  )
}

export default ProductDetails