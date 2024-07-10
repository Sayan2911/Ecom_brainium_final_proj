import React, { useState } from 'react'
import store from "../store.json"         
import Star from "./Non-linked/Star"
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import delivary from "../images/Frame 911.png"
import RelatedItems from './RelatedItems';
import { useUpdateStore } from '../useUpdateStore';
import useStore from '../useStore';
import usecartStore from '../usecartStore';


var val=null
const ProductDetails = () => {
  const navigate = useNavigate();
  const {  setData  } = useStore();
  const {  setDataUp  } = useUpdateStore();
  const { addItemByPriceData } = usecartStore();
  const [icon, setIcon] = useState(<CiHeart size={30} className='mx-2'/>);
  var {id}=useParams()
   console.log(id);
 
  
 
   val = store.find((item) =>item.id.toString()===id.toString());
 
   if (val) {
     console.log(val);
   } else {
     console.log('Item not found');
   }
 function addToCart(){
  setDataUp(id-1)
  navigate('/cart')
  addItemByPriceData(store[id-1].price) 
 }
 function addToWish(){
  setData(id-1)
      setIcon(<FaHeart style={{ color: "red" }}size={25} className='mx-2'/>)
 }


  const [quantity, setQuantity] = useState(1);
 
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1); 

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
          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
            <div className="quantity ">{quantity}</div>
            <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
            <button className="btn btn-danger ms-3" onClick={()=>(addToCart())}>Add to Cart</button>
           
           <div onClick={()=>(addToWish())}>
           {icon}
           </div>
          </div>

          <img src={delivary} alt=""style={{width:"100%" , height:"30%"}} className='object-fit-scale ' />
        </div>
      </div>
    
    </div>

    <div>
      <RelatedItems categories={val.category}/>
    </div>

</>
  )
}

export default ProductDetails