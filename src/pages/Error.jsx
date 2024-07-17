import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Timer from './Timer'
import { useProductStore } from '../useProductStore'
import PaymentForm from './PaymentForm'
import store from "../store.json"
import Star from "../pages/Non-linked/Star"
const Error = () => {
  const params= useParams()
  const {productData}=useProductStore()

console.log(params["*"]);

let navigate = useNavigate(); 
  const changeRoute=()=>{
    navigate("/home")
  }

  let exArr=[1,8,6]
  console.log(productData[0]);


  return (


    <>




    <p>home/{params["*"]}</p>

    {


// console.log(store[0]);


exArr.map((index)=>{
let fetchData= productData[0].filter((item )=> item.id === index  )


function navToOrderDeteails(id){

  console.log("click recognised  "+id);
}
return <div className='d-flex align-items-end justify-content-between gap-2 m-5 border p-3' onClick={(id)=>(navToOrderDeteails(fetchData[0].id))}>

  <div className='d-flex align-items-end '>

  <img src={fetchData[0].image} alt="none" className='p-2' style={{width:"50px",height:"60px"}} />
  <p>{fetchData[0].title}</p>
  </div>

  <div className='d-flex align-items-end '>

  <p><Star value={fetchData[0].rating.rate}/></p>
  <p>{fetchData[0].rating.rate}</p>
  <p>({fetchData[0].rating.count})</p>

  </div>

  <div className='d-flex align-items-end '>
  <p>${fetchData[0].price}</p>

  </div>
  
  </div>
})
}



    <div  className='h-screen  w-screen d-flex justify-content-center align-items-center flex-column m-5'>
      <h1>
        404 Not Found
      </h1>
      <p>Your visited page not found. you may go home page</p>
      <button className='btn btn-danger' onClick={()=>(changeRoute())}>back to home page</button>
    </div>
    </>
  )
}

export default Error