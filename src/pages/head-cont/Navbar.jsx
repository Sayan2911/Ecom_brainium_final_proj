import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import useStore from '../../useStore';


const Navbar = () => {


  function hello(){
    console.log("hello");
  }

  const { data,name } = useStore();
  return (
      <>
      <div  className='  w-screen d-flex justify-content-between align-items-center  mx-4 my-2'>
        <div><h3>Exclusive</h3></div>
        <div className='  w-screen d-flex justify-content-between align-items-center  mx-4 my-2 '>
            <Link to="/home" className='text-dark text-decoration-none  mx-4 my-2 '>Home</Link>
            <Link to="/contact" className='text-dark text-decoration-none  mx-4 my-2 '>Contact</Link>
            <Link to="/about" className='text-dark text-decoration-none  mx-4 my-2 '>About</Link>
            <Link to="/signup" className='text-dark text-decoration-none  mx-4 my-2 '>Sign Up</Link>


        </div>

        <div className='  w-screen d-flex justify-content-between align-items-center  mx-4 my-2 gap-2' >
        <input type="text"  /><CiSearch  size={30}/>
        <Link to="/wishlist" className='text-decoration-none ' >
        
        <div className='  d-flex '>
        <CiHeart   size={30} />
       <div>{data.length}</div>
       </div>
        
        </Link>
       <Link to="/cart" className='text-decoration-none ' > 
       
       <div className='  d-flex '>
       <CiShoppingCart  size={30} /> 
       <div>{data.length}</div>
       </div>
       
       </Link>
       <CiUser size={25} className='bgChange rrr' onClick={()=>(hello())} />

        <div>welcome {name}</div>
        </div>


        
         </div>
      
      </>

  )
}

export default Navbar