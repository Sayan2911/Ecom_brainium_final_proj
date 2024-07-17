import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Star from './Star';  
import useStore from '../../useStore';
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import usecartStore from '../../usecartStore';
import store from "../../store.json"
import { useUpdateStore } from '../../useUpdateStore';


const Cards = ({id,image,title,price,star,rates}) => {

  const navigate = useNavigate();
  const { cred, setData  } = useStore();
  const {  setDataUp  } = useUpdateStore();
  const { addItemByPriceData } = usecartStore();
  const [buttonText, setButtonText] = useState("Add to Cart");

  const [icon, setIcon] = useState(<CiHeart />);

  const isLogged = () => {
    if (cred === false) {
      navigate("/signUp")
      console.log("cred is false and not logged in yet, changing to true");
    } else {
      console.log(id);
      setData(id-1)
    
      setIcon(<FaHeart style={{ color: "red" }}/>)
      console.log("cred is true and logged in");
    }
  };

  const addCart2 = () => {
    setDataUp(id-1)
    
    // navigate("/cart")
    setButtonText("Added to Cart");
    addItemByPriceData(price) 
  }
  const view = () => {
    console.log(" id issss   "+id);
    navigate(`/productdetails/${id}`);
  }


  let num2 =price + 10
  let init=(10/price)*50
  

  return (
    
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex align-items-start border-none" style={{width:"15vw", backgroundColor:"transparent"  }}>
    <div className="card p-2 border" style={{ width: "100%", height:"100%", display: 'flex', flexDirection: 'column' ,backgroundColor:"transparent" }}>
      <div className="position-relative">
        <div className='position-absolute p-1  px-2 m-2 rounded' style={{backgroundColor:"#DB4444", color:"white" ,fontSize:"12px"}}>
          -{Math.floor(init)}%
        </div>
        <div className='position-absolute top-0 end-0 d-flex flex-column p-2'>
          {/* <CiHeart className="mb-2 " onClick={()=>(isLogged())}  style={{ color: iconColor }}/> */}

            <div className="mb-2 " onClick={()=>(isLogged())}>
              {icon}
            </div>
          <IoEyeOutline onClick={()=>(view())}  />
        </div>

    <div className="p-3" style={{ height: '200px', width: '100%' , backgroundColor:"#f5f5f5"}} >

        <img className="card-img-top object-fit-scale p-2" src={image} alt="none" style={{ height: '150px', width: '100%' ,paddingBottom:"3vw", backgroundColor:"#f5f5f5"}} />
    </div>


        <button className="position-absolute btn btn-dark text-white cart-button" onClick={()=>(addCart2())} >
        {buttonText}
        </button>
      </div>
      <div className="card-body d-flex justify-content-center align-items-start flex-column flex-grow-1" style={{ height: '130px', width: '100%'  }} >
        <h6 className="card-title fw-bold ">{title}</h6>
        <div className='d-flex gap-2  ' style={{height:"2.5vh",  }}>
          <p className="card-text text-danger ">${price}</p>
          <p className="card-text text-secondary text-decoration-line-through ">${Math.floor(num2)}</p>
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