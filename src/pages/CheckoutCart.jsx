

import React, { useEffect, useState } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '../localStorageUtil';
import usecartStore from '../usecartStore';
// import { useUpdateStore } from '../useUpdateStore';
import { useOrderStorage } from './useOrderStorage';
const CheckoutCart = ({ title, price }) => {
  const { addItemByPriceData, removeItemByPriceData } = usecartStore();
  // const { deleteDataUp } = useUpdateStore();
  const [quantity, setQuantity] = useState(getLocalStorageItem(title) || 1);
  const {  setProductQty} = useOrderStorage();

  useEffect(() => {
    setLocalStorageItem(title, quantity);
    setProductQty(  quantity)
  }, [ title,quantity]);
  



  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    addItemByPriceData(price);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      removeItemByPriceData(price);
    }
    // if(quantity===0)
    //   deleteDataUp(price)
  };

  return (
    <>
      <div className='d-flex justify-content-between m-5'>
        <div style={{ width: '100%' }} className='d-flex justify-content-between'>
          <table style={{ width: '100%' }}>
            
            <tbody style={{backgroundColor:"#F5F5F5"}}>
              <tr style={{ width: '100%' }}>
                <td style={{ width: '40%', overflow: 'hidden' }}>{title}</td>
                <td style={{ width: '10%', overflow: 'hidden' }}>{price}</td>
                <td style={{ width: '10%' }}>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex border justify-content-between' style={{width:"58%",height:"40px"}}>

                    <div className="m-1  d-flex align-items-center justify-content-center" style={{width:"40%",height:"30px"}} >{quantity}</div>

                    <div className='d-flex flex-column'>

                    <button className="bg-danger text-white rounded border d-flex align-items-end justify-content-center " onClick={handleIncrement}style={{width:"30px",height:"20px"}} >︿</button>
                    <button className="bg-danger text-white rounded border d-flex align-items-END justify-content-center" onClick={handleDecrement} style={{width:"30px",height:"20px"}}>﹀</button>
                    </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: '10%' }}>{Math.floor(quantity * price)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;