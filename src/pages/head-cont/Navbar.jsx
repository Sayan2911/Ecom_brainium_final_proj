// 
import React, { useState } from 'react';
import { CiHeart, CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useStore from '../../useStore';
import './navbar.css'; // Create a separate CSS file for styles

const Navbar = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const { data, name } = useStore();

  function hello() {
    console.log("hello");
  }

  return (
    <>
      <div className='navbar-container w-screen d-flex justify-content-between align-items-center mx-4 my-2'>
        <div><h3>Exclusive</h3></div>
        <div className='navbar-links w-screen d-flex justify-content-between align-items-center mx-4 my-2'>
          <Link to="/home" className='text-dark text-decoration-none mx-4 my-2'>Home</Link>
          <Link to="/contact" className='text-dark text-decoration-none mx-4 my-2'>Contact</Link>
          <Link to="/about" className='text-dark text-decoration-none mx-4 my-2'>About</Link>
          <Link to="/signup" className='text-dark text-decoration-none mx-4 my-2'>Sign Up</Link>
        </div>

        <div className='navbar-actions w-screen d-flex justify-content-between align-items-center mx-4 my-2 gap-2'>
          <input type="text" /><CiSearch size={30} />
          <Link to="/wishlist" className='text-decoration-none'>
            <div className='d-flex'>
              <CiHeart size={30} />
              <div>{data.length}</div>
            </div>
          </Link>
          <Link to="/cart" className='text-decoration-none'>
            <div className='d-flex'>
              <CiShoppingCart size={30} />
              <div>{data.length}</div>
            </div>
          </Link>
          <div className='user-icon-container'>
            <CiUser
              size={25}
              className='bgChange rrr'
              onClick={() => setShowDialogue(!showDialogue)}
            />
            {showDialogue && (
              <div className='dialogue-box'>
                <Link to={"/update"} className='text-decoration-none'>Account</Link>
                {/* Add more options as needed */}
              </div>
            )}
          </div>
          <div>welcome {name}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;