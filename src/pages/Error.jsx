import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Error = () => {
  const params= useParams()

console.log(params["*"]);

let navigate = useNavigate(); 
  const changeRoute=()=>{
    navigate("/home")
  }
   

  return (


    <>
    <p>home/{params["*"]}</p>
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