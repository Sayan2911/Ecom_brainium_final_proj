import React from 'react';
import useStore from '../useStore';
import Star from './Non-linked/Star';
import { MdDeleteOutline } from "react-icons/md";


const CartCard = ({ id, image, title, price, star, rates }) => {
  const { deleteData } = useStore();

  const handleDelete = () => {
    deleteData(id-1);
    console.log("Deleted item with ID:", id);
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex align-items-start" style={{ width: "15vw" }}>
      <div className="card p-2" style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column' }}>
        <div className="position-relative align-items-end">
        <button className="btn btn-danger btn-sm ms-auto position-absolute right-0" onClick={handleDelete}><MdDeleteOutline /></button>
          <img className="card-img-top object-fit-scale p-2" src={image} alt="none" style={{ height: '150px', width: '100%', marginBottom: "3vw" }} />
          <button className="position-absolute btn btn-dark text-white cart-button" >
            Add to Cart
          </button>
        </div>
        <div className="card-body d-flex justify-content-center align-items-start flex-column flex-grow-1" style={{ height: '130px', width: '100%' }}>
          <h6 className="card-title ">{title}</h6>
          <div className='d-flex gap-2' style={{ height: "2.5vh" }}>
            <p className="card-text text-success ">${price}</p>
            <p className="card-text text-danger text-decoration-line-through ">${Math.floor(price + 10)}</p>
          </div>
          <div className="d-flex align-items-center">
            <Star value={star} />
            <p>({rates})</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
