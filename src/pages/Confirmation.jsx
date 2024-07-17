import React from 'react'
// import image from "../images/social-contactless-payment-with-mobile-phone.gif"
import { useNavigate } from 'react-router-dom';
import { useUpdateStore } from '../useUpdateStore';
import useStore from '../useStore';
import { useOrderStorage } from './useOrderStorage';
import { localStorageClear } from '../localStorageUtil';

const Confirmation = () => {

  const {resetDataUp,dataUp}=useUpdateStore()
  const { resetData}=useStore()
  const { setProductId}=useOrderStorage()

    const navigate = useNavigate();
    function navHome(){
        navigate('/home') 
        setProductId(dataUp)
        resetDataUp()
        resetData()
        localStorageClear()
      }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column object-fit-scale'>

    <h1 className='m-5'>order placed succsesfully</h1>
    <p className='m-5'>Thank you</p>

    <button className='btn btn-danger' onClick={navHome}>back to home</button>
    </div>
  )
}

export default Confirmation
 