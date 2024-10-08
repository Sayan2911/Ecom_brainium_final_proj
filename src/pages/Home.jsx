
import { Link,  useNavigate } from "react-router-dom"
import Swiper from "./Non-linked/Swiper"
import image from "../images/image.png"
// import CardsCont from "./Non-linked/CardsCont"
import Cards from "./Non-linked/Cards"
import store from "../store.json"
import { useRef } from "react"
import image2 from "../images/Frame 600.png"
import image3 from "../images/Frame 684.png"
import image4 from "../images/Frame 738.png"
import image5 from "../images/Frame 702.png"
import image6 from "../images/Rectangle 18.png"
import image7 from "../images/Fill With Left Arrow.png"
import image8 from "../images/Fill with Right Arrow.png"
import phone from "../images/icons/Category-CellPhone.png"
import pc from "../images/icons/Category-Computer.png"
import watch from "../images/icons/Category-SmartWatch.png"
import camera from "../images/icons/Category-Camera.png"
import headphone from "../images/icons/Category-Headphone.png"
import game from "../images/icons/Category-Gamepad.png"

import { TbShirt } from "react-icons/tb";
import { GiLargeDress } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { GiPearlNecklace } from "react-icons/gi";
import Timer from "./Timer"




const Home = () => {   
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };     
  const scrollLeft2 = () => {
    containerRef2.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
    containerRef3.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight2 = () => {
    containerRef2.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
    containerRef3.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };     

 
  return (
   <>

   <hr className="m-0" />
  
  <div className="mx-4">

 
    <div className="d-flex px-4  " style={{ width: '100vw' }}>

    
    <div className="d-flex justify-content-start align-items-start  flex-column    pt-3  " style={{ width: '39%' ,borderRight:' 1px solid #DEE2E6'}}>
  
      <Link to={"/womens"}  className=" text-decoration-none m-1 text-dark" >Women's Fashion&#160;   &#160; &#160;  &#160; &#160; &#160; &#160; 〉 </Link>
      <Link to={"/mens"} className="text-decoration-none m-1 text-dark">Men's Fashion  &#160; &#160; &#160; &#160; &#160;    &#160; &#160;  &#160;  &#160; &#160;  〉</Link>
      <Link to={"/electronics"} className="text-decoration-none m-1 text-dark">Electronics</Link>
      <Link to={"/jewelery"} className="text-decoration-none m-1 text-dark">Home & Lifestyle</Link>
      <Link to={"/mens"} className=" text-decoration-none m-1 text-dark">Medicine</Link>
      <Link to={"/womens"} className="text-decoration-none m-1 text-dark">Sports & Outdoor</Link>
      <Link to={"/electronics"} className="text-decoration-none m-1 text-dark">Baby's & Toys</Link>
      <Link to={"/jewelery"} className="text-decoration-none m-1 text-dark">Groceries & Pets</Link>
      <Link to={"/jewelery"} className="text-decoration-none m-1 text-dark">Health & beauty</Link>
    </div>

      <div className="  d-flex justify-content-center align-items-center  mt-4   " style={{ width: '80%' ,height:"110%",marginRight:" 2.5rem",marginLeft:"1.5rem" ,display:"none"}}><Swiper/> </div>
    
      </div>

      <div className="m-4 d-flex justify-content-start align-items-center h-16 w-full ">
        <div className=" rounded " > <img src={image6} alt="none" /> </div>
        <p className="m-2 text-danger">Today's </p>
      </div>



      <div className=" d-flex justify-content-center align-items-center h-16 w-full" style={{marginLeft:'1.5rem' }}>
       
        <h2 className=" m-0 " style={{width:"20%" }} >Flash Sales </h2>
        <div style={{width:"40%"}} className="mb-4"> 

<Timer/>
</div>
        <div className="d-flex  justify-content-end w-full" style={{width:"40%" ,marginLeft:"20vh" }} >
      <button className="btn " onClick={scrollLeft}> <img src={image7} alt="" /> </button>
      <button className="btn " onClick={scrollRight}><img src={image8} alt="" /></button>
      </div>
      </div>
     


      <div className="border-bottom " style={{marginLeft:"1.5rem"}}>
      <div className="d-flex justify-content-between align-items-center">
        
        <div className="d-flex  gap-3 overflow-hidden" style={{ scrollBehavior: 'smooth' }} ref={containerRef}>
          {store.slice(0, 10).map((item, index) => (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              price={item.price}
              star={item.rating.rate}
              rates={item.rating.count}
            />
          ))}
        </div>

      </div>
      <div className="d-flex align-item-center justify-content-center">

        <Link className="btn btn-danger px-4" to={"/allProduct"} style={{marginBottom:"3rem"}} >View All Products</Link>
      </div>
    </div>


          <div className="border-bottom m-4">

        
    <div className=" d-flex justify-content-start align-items-center h-16 w-full">
    <div className=" rounded " > <img src={image6} alt="none" /> </div>
        <p className="m-3 text-danger">Categories</p>
      </div>

    <div className=" d-flex justify-content-between align-items-center h-16 w-full">
        {/* <div className=" rounded" style={{width:"2vh" ,height:"6vh" ,backgroundColor:"red"}} > </div> */}
        <h1 className="my-3   font-weight-bold">Browse by Categories </h1>
      
        <div className="d-flex  justify-content-end w-full" style={{width:"40%" ,marginLeft:"20vh" }} >
      <button className="btn "> <img src={image7} alt="" /> </button>
      <button className="btn " ><img src={image8} alt="" /></button>
      </div>
      </div>

      <div className="  gap-1 w-full d-flex align-items-center justify-content-center mb-5" >
      <div className="border p-4 icon-container bgChange " >
       <Link to={"/mens"}> <img src={phone} alt="" className="changeColor" /> </Link> 
      </div>
      <div className="border p-4 icon-container bgChange">
      <Link to={"/womens"}> <img src={pc} alt=""  className="changeColor"/></Link> 
      </div>
      <div className="border p-4 icon-container bgChange">
      <Link to={"/electronics"}> <img src={watch} alt="" className="changeColor" /> </Link> 
      </div>
      <div className="border p-4 icon-container bgChange ">
      <Link to={"/jewelery"}> <img src={camera} alt="" className="changeColorss camera"/> </Link> 
      </div>
      <div className="border p-4 icon-container bgChange">
      <Link to={"/jewelery"}> <img src={headphone} alt="" className="changeColor" /> </Link> 
      </div>
      <div className="border p-4 icon-container bgChange">
      <Link to={"/jewelery"}> <img src={game} alt="" className="changeColor " /> </Link> 
      </div>
    </div>
    </div>


<div className="m-4">



    <div className=" d-flex justify-content-start align-items-center h-16 w-full">
    <div className=" rounded mx-2" > <img src={image6} alt="none" /> </div>
        <p className="m-3 text-danger">This Month </p>
     
      </div>
      <div className=" d-flex justify-content-between align-items-center h-16 w-full">
        {/* <div className=" rounded" style={{width:"2vh" ,height:"6vh" ,backgroundColor:"red"}} > </div> */}
        <h1 className="my-3 mx-1  fw-bold">Best Selling Products  </h1>
        <div className="d-flex align-item-center justify-content-center">

        <Link className="btn btn-danger" to={"/allProduct"} >View All</Link>
      </div>
      
      </div>


      <div className="   overflow-hidden mb-5" >
      <div className="row d-flex justify-content-center ">
      <div className="d-flex  gap-2 flex-row justify-content-between ">
          {store.slice(4, 9).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              price={item.price}
              star={item.rating.rate}
              rates={item.rating.count}
            />
          ))}
        </div>
        </div>
        </div>

        </div>




          <div className="d-flex align-items-center justify-content-center m-4" style={{width:"92vw"}}>
            <img src={image2} alt="none"style={{width:"100%"}} />
          </div>

          <div className="m-3 d-flex justify-content-start align-items-center h-16 w-full">
          <div className=" rounded mx-2" > <img src={image6} alt="none" /> </div>
        <p className="m-3 text-danger">Our Products </p>
      </div>

      <div className="m-3 d-flex justify-content-between align-items-center h-16 w-full">
        {/* <div className=" rounded" style={{width:"2vh" ,height:"6vh" ,backgroundColor:"red"}} > </div> */}
        <h1 className="my-3 mx-1  font-weight-bold">Explore Our Products </h1>
        <div className="d-flex align-item-center justify-content-center">


        <button className="btn " onClick={scrollLeft2}> <img src={image7} alt="" /> </button>
        <button className="btn " onClick={scrollRight2}><img src={image8} alt="" /></button>
      </div>


      
      </div>


      <div className="">
        
        <div className="d-flex m-2 p-2 gap-3 overflow-hidden" style={{ scrollBehavior: 'smooth' }} ref={containerRef2}>
          {store.slice(3, 10).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              price={item.price}
              star={item.rating.rate}
              rates={item.rating.count}
            />
          ))}
        </div>
        <div className="d-flex m-2 p-2 gap-3 overflow-hidden" style={{ scrollBehavior: 'smooth' }} ref={containerRef3}>
          {store.slice(7, 14).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              price={item.price}
              star={item.rating.rate}
              rates={item.rating.count}
            />
          ))}
        </div>

      </div>
      <div className="d-flex align-item-center justify-content-center">

<Link className="btn btn-danger" to={"/allProduct"} style={{marginBottom:"5rem"}}>View All Products</Link>
</div>

<div>

<div className="m-3 d-flex justify-content-start align-items-center h-16 w-full">
<div className=" rounded mx-2" > <img src={image6} alt="none" /> </div>
        <p className="m-3 text-danger">featured</p>
      </div>

    <div className="m-3 d-flex justify-content-between align-items-center h-16 w-full">
        {/* <div className=" rounded" style={{width:"2vh" ,height:"6vh" ,backgroundColor:"red"}} > </div> */}
        <h1 className="m-2  font-weight-bold">New Arrival </h1>
      
      </div>
</div>
          

          <div className=" d-flex justify-content-center align-items-center p-1" style={{width:'94vw'}}>
          <img src={image3} alt="none" className="m-3 " style={{width:'50%'}}/>
          <img src={image4} alt="none" className="m-3 " style={{width:'50%'}}/>
          </div>

          <div className="m-5 d-flex justify-content-center align-items-center">
          <img src={image5} alt="none" className="m-3 "/>

          </div>

          </div> 
   </>
  )
}

export default Home