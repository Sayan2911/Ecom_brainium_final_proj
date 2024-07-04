// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import useStore from '../useStore';
// import Bill from './Bill';
// import store from "../store.json"
// import usecartStore from '../usecartStore';

// const CheckoutCart = ({title,price}) => {

//   const { data } = useStore();
//   const {  addItemByPriceData,removeItemByPriceData, setZero } = usecartStore();

//   const [quantity, setQuantity] = useState(0);
 
//   const handleIncrement = () => {
//     setQuantity(quantity + 1)
   


//     addItemByPriceData(price);


//   };
//   const handleDecrement = () => {setQuantity(quantity > 0 ? quantity - 1 : Math.floor(0))
//     if(quantity!==0)
//     removeItemByPriceData(price);
//   }; 
  
 

//   return (
//     <>
//     <div className='d-flex justify-content-between m-5 '>

//     <div style={{width:"100%"}} className='d-flex justify-content-between  '>

//     <table style={{width:"100%"}}  >
//       <thead>
//         <tr>
//           <th>Product</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Subtotal</th>
//         </tr>
//       </thead>
//       <tbody>
        
//           <tr style={{width:"100%"}} >
//             <td style={{width:"50%", overFlow:"hidden"}}>{title}</td>
//             <td style={{width:"10%", overFlow:"hidden"}}>{price}</td>
//             <td>
//            <div className='d-flex'>


//             <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
//             <div className=""> {quantity}</div>
//             <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
//            </div></td>
//             <td>{quantity * price}</td>
//           </tr>

          

//       </tbody>
//     </table>
//     </div>
//     </div>
    
//     </>
//   )
// }

// export default CheckoutCart


import React, { useEffect, useState } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '../localStorageUtil';
import usecartStore from '../usecartStore';

const CheckoutCart = ({ title, price }) => {
  const { addItemByPriceData, removeItemByPriceData } = usecartStore();
  const [quantity, setQuantity] = useState(getLocalStorageItem(title) || 1);

  useEffect(() => {
    setLocalStorageItem(title, quantity);
  }, [quantity, title]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    addItemByPriceData(price);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      removeItemByPriceData(price);
    }
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
                  <div className='d-flex'>
                    <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
                    <div className="">{quantity}</div>
                    <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
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