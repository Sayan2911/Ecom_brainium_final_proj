import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Star from './Star';  
import useStore from '../../useStore';
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import usecartStore from '../../usecartStore';
import store from "../../store.json"


const Cards = ({id,image,title,price,star,rates}) => {
  const navigate = useNavigate();
  const { cred, setData  } = useStore();
  const { addItemByPriceData } = usecartStore();

  const isLogged = () => {
    if (cred === false) {
      navigate("/signUp")
      console.log("cred is false and not logged in yet, changing to true");
    } else {
      console.log(id);
      setData(id-1)
      // 
      console.log("cred is true and logged in");
    }
  };

  const addCart2 = () => {
    setData(id-1)
    navigate("/cart")
 

  }
  const view = () => {
    console.log(" id issss   "+id);
    navigate(`/productdetails/${id}`);
  }




  return (
    
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex align-items-start" style={{width:"15vw",  }}>
    <div className="card p-2" style={{ width: "100%", height:"100%", display: 'flex', flexDirection: 'column' }}>
      <div className="position-relative">
        <div className='position-absolute top-0 end-0 d-flex flex-column p-2'>
          <CiHeart className="mb-2 " onClick={()=>(isLogged())} />
          <IoEyeOutline onClick={()=>(view())}  />
        </div>
        <img className="card-img-top object-fit-scale p-2" src={image} alt="none" style={{ height: '150px', width: '100%' ,marginBottom:"3vw" }} />
        <button className="position-absolute btn btn-dark text-white cart-button" onClick={()=>(addCart2())} >
          Add to Cart
        </button>
      </div>
      <div className="card-body d-flex justify-content-center align-items-start flex-column flex-grow-1" style={{ height: '130px', width: '100%'  }} >
        <h6 className="card-title ">{title}</h6>
        <div className='d-flex gap-2  ' style={{height:"2.5vh",  }}>
          <p className="card-text text-success ">${price}</p>
          <p className="card-text text-danger text-decoration-line-through ">${Math.floor(price + 10)}</p>
        </div>
        <div className="d-flex">
          <Star value={star} />
          <p>( {rates})</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards