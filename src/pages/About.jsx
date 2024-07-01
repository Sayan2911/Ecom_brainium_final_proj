import React from 'react'
import image8 from "../images/about.png"
import image9 from "../images/Frame 890.png"
import image10 from "../images/Frame 702.png"
import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
const About = () => {

  return (

<>
<div className=' m-5' >Home/About</div>


<div className='d-flex justify-content-between align-items-center' style={{width:"100% ",height:"70vh"}}>
  <div className=' m-5' style={{width:"40% ",height:"40%"}}>
    <h1 className=' mb-3' >Our Story</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic nihil iusto quia accusantium molestias laborum nam esse cum. Eveniet ex architecto inventore veritatis mollitia, numquam vel beatae eos. Similique non animi, tempora fugiat pariatur quasi? Id perspiciatis recusandae officia aliquid ex ut alias exercitationem, assumenda expedita, pariatur autem </p>
  </div>

  <img src={image8} alt="none" className=' '  style={{width:"55% ",height:"100%"
}}/>
</div>


<div className='container d-flex justify-content-center align-items-center mt-5 mb-5  gap-4' >
      <div className='cards border d-flex justify-content-center align-items-center p-3'>
        <div className='content d-flex justify-content-center align-items-center flex-column text-center'>
          <CiShop className="icon" size={30} />
          <h1>10.5k</h1>
          <p>Sellers active our site</p>
        </div>
      </div>
      <div className='cards border d-flex justify-content-center align-items-center p-3'>
        <div className='content d-flex justify-content-center align-items-center flex-column text-center'>
          <CiDollar className="icon" size={30} />
          <h1>33k</h1>
          <p>Monthly products sell</p>
        </div>
      </div>
      <div className='cards border d-flex justify-content-center align-items-center p-3'>
        <div className='content d-flex justify-content-center align-items-center flex-column text-center'>
          <MdOutlineShoppingBag className="icon" size={30} />
          <h1>45.5k</h1>
          <p>Customer active in our site</p>
        </div>
      </div>
      <div className='cards border d-flex justify-content-center align-items-center p-3'>
        <div className='content d-flex justify-content-center align-items-center flex-column text-center'>
          <FaSackDollar className="icon "  size={30}/>
          <h1>25k</h1>
          <p>Annual gross sell in our site</p>
        </div>
      </div>
    </div>

    <div  className=' d-flex justify-content-center align-items-center flex-column gap-5 m-5'>
      <img src={image9} alt="none" />
      <img src={image10} alt="none" />

    </div>

</>
    
  )
}

export default About