import React from 'react'
import MyOrderCard from './MyOrderCard'
import { setLocalStorageItem, getLocalStorageItem } from '../localStorageUtil';
import { useOrderStorage } from './useOrderStorage';
import { useProductStore } from '../useProductStore'
import Star from './Non-linked/Star';
import { useNavigate } from 'react-router-dom';
const MyOrders = () => {
  const {  userData,orderData} = useOrderStorage();
  const {productData}=useProductStore()
    // const {dataUp}=useUpdateStore()
    // console.log(getLocalStorageItem);
    const navigate = useNavigate();
    console.log(userData,orderData);
  return (
    <div>

        <div className='m-5 d-flex justify-content-center flex-column '>

          <div className='d-flex justify-content-center '>

         <h3> 
           Recent Orders
          </h3> 
          </div>

            <div>
    
    {
(orderData.ProductId.length!==0)?(
  orderData.ProductId[0].map((index)=>{
    let fetchData= productData[0].filter((item )=> item.id === index+1  )
    
    
    function navToOrderDeteails(id){
    
      console.log("click recognised  "+id);
      navigate(`/order/orderDetails/${id}`);

    }
    console.log(fetchData);
    return <div className='d-flex align-items-end justify-content-between gap-2 m-5 border p-3' onClick={(id)=>(navToOrderDeteails(fetchData[0].id))}>
    
      <div className='d-flex align-items-end ' style={{width:"50%"}}>
    
      <img src={fetchData[0].image} alt="none" className='p-2' style={{width:"50px",height:"60px"}} />
      <p>{fetchData[0].title}</p>
      </div>
    
      <div className='d-flex align-items-end  justify-content-end  ' style={{width:"20%"}}>
    
      <p><Star value={fetchData[0].rating.rate}/></p>
      <p>{fetchData[0].rating.rate}</p>
      <p>({fetchData[0].rating.count})</p>
    
      </div>
    
      <div className='d-flex align-items-end '>
      <p>${fetchData[0].price}</p>
      </div>
      <p className='text-success'>ordered on {new Date().getDate()}/{new Date().getMonth()}</p>
      
      </div>
    })
):(
  <p>no recent orders</p>
)
  
    }



            </div>

        </div>
    </div>
  )
}

export default MyOrders