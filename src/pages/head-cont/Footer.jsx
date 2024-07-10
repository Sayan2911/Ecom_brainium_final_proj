import React from 'react'
import image7 from "../../images/Frame 719.png"

const Footer = () => {
  return (
<>
<div className='bg-dark p-2 mt-auto w-100 d-flex flex-column justify-content-center align-items-center'>
  <div className='container'>
    <div className='row w-100 d-flex justify-content-center align-items-start m-2'>
      <div className='col-lg-2 col-md-3 col-sm-6 text-white mx-2 text-center'>
        <h5>Subscribe</h5>
        <p>Get 10% off on your first order</p>
        <input type="text" placeholder='Enter your details ' className='form-control bg-dark  placeholder placeholder-glow text-white' />
      </div>
      <div className='col-lg-2 col-md-3 col-sm-6 text-white mx-2 text-center'>
        <h5>Support</h5>
        <p>Address line 1</p>
        <p>Address line 2</p>
        <p>Email</p>
        <p>Mobile number</p>
      </div>
      <div className='col-lg-2 col-md-3 col-sm-6 text-white mx-2 text-center'>
        <h5>Account</h5>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className='col-lg-2 col-md-3 col-sm-6 text-white mx-2 text-center'>
        <h5>Quick Links</h5>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className='col-lg-2 col-md-3 col-sm-6 text-white mx-2 text-center'>
        <h5>Download App</h5>
        <p>Save $3 for new users only</p>
        <img src={image7} alt="none" />
      </div>
    </div>
    <div className='h-16 w-100 m-0 p-0 d-flex justify-content-center align-items-center text-white text-center'>
      ©️ copyright Sayan 2024. All rights reserved
    </div>
  </div>
</div>

</>
  )
}

export default Footer