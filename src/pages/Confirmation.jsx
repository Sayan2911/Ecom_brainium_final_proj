import React from 'react'
import image from "../images/social-contactless-payment-with-mobile-phone.gif"
import { useNavigate } from 'react-router-dom';
const Confirmation = () => {
    const navigate = useNavigate();
    function navHome(){
        navigate('/home')
        window.location.reload()
      }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column object-fit-scale'>

    <img src={image} alt="confirmation" />

    <button className='btn btn-danger' onClick={navHome}>back to home</button>
    </div>
  )
}

export default Confirmation