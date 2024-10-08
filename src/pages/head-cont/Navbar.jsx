// 
import React, { useState } from 'react';
import { CiHeart, CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useStore from '../../useStore';
import './navbar.css'; // Create a separate CSS file for styles
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import store from "../../store.json"
import SearchComponent from './Search';
import { useUpdateStore } from '../../useUpdateStore';
import { useNavigate } from 'react-router-dom';
import { useOrderStorage } from '../useOrderStorage';
import { localStorageClear } from '../../localStorageUtil';

const Navbar = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const { data,cred } = useStore();
  const { dataUp ,resetDataUp} = useUpdateStore();
  const navigate = useNavigate();
  
  const { resetData}=useStore()
  const { setProductId}=useOrderStorage()
  // const [Value, setValue] = useState()
  // function hello(e) {
  //   console.log(e.target.value);
  //   setValue(e.target.value)

  // }
  // function search(searchTerm) {
  //   console.log(searchTerm);

  // }
  // const view = (id) => {
  //   console.log(" id issss   "+id);
  //   navigate(`/productdetails/${id}`);


    const [value, setValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    
    if (inputValue.trim() === '') {
      setFilteredItems([]);
    } else {
      const matchingItems = store.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(matchingItems);
    }
  };

  const handleSearch = () => {
    if (value.trim() !== '') {
      const matchingItems = store.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(matchingItems);
    } else {
      setFilteredItems([]);
    }
  };

  const handleItemClick = (id) => {
    // Implement your view function logic here
    console.log('View item with id:', id);
    navigate(`/productdetails/${id}`);
    setValue('')
  };
  
  const goHome = () => {
    // Implement your view function logic here
   
    navigate(`/home`);
   
  };
  
  const logOut = () => {
    // Implement your view function logic here
   
    navigate(`/home`);
    setProductId(dataUp)
    resetDataUp()
    resetData()
    localStorageClear()
    window.location.reload()
  };


  return (
    <>
      <div className='navbar-container w-screen d-flex justify-content-between align-items-center mx-4 my-2'>
        <div><h3 className='mx-4' onClick={()=>(goHome())}>Exclusive</h3></div>
        <div className='navbar-links w-screen d-flex justify-content-between align-items-center mx-4 my-2'>
          <Link to="/home" className='text-dark text-decoration-none mx-4 my-2'>Home</Link>
          <Link to="/contact" className='text-dark text-decoration-none mx-4 my-2'>Contact</Link>
          <Link to="/about" className='text-dark text-decoration-none mx-4 my-2'>About</Link>

          {
            (cred!==true)?(<Link to="/signup" className='text-dark text-decoration-none mx-4 my-2'>Sign Up</Link>):(console.log())
          }
          {

          (cred===true)?(<Link to="/order" className='text-dark text-decoration-none mx-4 my-2'>My Orders</Link>):(console.log())
          }
        </div>
      

        <div className='navbar-actions w-screen d-flex justify-content-between align-items-center mx-0 my-2 gap-2'>


       


        {/* <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <CiSearch size={30} onClick={handleSearch} />

      <div className='drop'>
        {value.trim() !== '' && filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <p key={item.id} onClick={() => handleItemClick(item.id)}>
              {item.title}
            </p>
          ))
        ) : value.trim() !== '' && filteredItems.length === 0 ? (
          <p>No items found</p>
        ) : null}
      </div>
    </div> */}
     <div  className=' bg-transparent form-control' >
      <input type="text" value={value} onChange={handleInputChange} placeholder='what you looking for?'className=' bg-transparent outline-none'/>
      
      <CiSearch size={30} onClick={handleSearch}  />
      {value.trim() !== '' && (
        <div className='drop d-flex align-items-center justify-content-center flex-column'>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (         
              <p key={item.id} onClick={() => handleItemClick(item.id)} role='button'>
                {item.title}
              </p>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      )}
    </div>






          <Link to="/wishlist" className='text-decoration-none text-dark'>
            <div className='d-flex'>
              <CiHeart size={30} />
              <div>{data.length}</div>
            </div>
          </Link>
          <Link to="/cart" className='text-decoration-none text-dark'>
            <div className='d-flex'>
              <CiShoppingCart size={30} />
              <div>{dataUp.length}</div>
            </div>
          </Link>


          {
            (cred===true)?( <div className='user-icon-container'>
              <CiUser
                size={25}
                className='bgChange rrr'
                onClick={() => setShowDialogue(!showDialogue)}
              />
              {showDialogue && (
                <div className='dialogue-box d-flex flex-column'>
                  <Link to={"/update"} className='text-decoration-none text-white ' onClick={() => setShowDialogue(!showDialogue)}> <CiUser size={20} className='m-2'/>Manage My Account</Link>
                  <Link to={"/update"} className='text-decoration-none text-white' onClick={() => setShowDialogue(!showDialogue)}> <IoBagRemoveOutline size={20} className='m-2'/>My Account</Link>
                  <Link to={"/update"} className='text-decoration-none text-white' onClick={() => setShowDialogue(!showDialogue)}><RxCrossCircled size={20} className='m-2'/>My Cancelation</Link>
                  <Link to={"/update"} className='text-decoration-none text-white'onClick={() => setShowDialogue(!showDialogue)}><CiStar size={20} className='m-2'/>My reviews</Link>
                  <Link to={"/home"} className='text-decoration-none text-white' onClick={() => {logOut()} }><IoIosLogOut size={20} className='m-2'/>Log Out</Link>
                  
                </div>
              )}
            </div>):(console.log())
          }
          

         
          
        </div>
      </div>
    </>
  );
}

export default Navbar;