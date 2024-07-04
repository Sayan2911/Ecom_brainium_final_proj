
import './App.css';
import Header from "./pages/head-cont/Header"
import Footer from "./pages/head-cont/Footer"
import Navbar from "./pages/head-cont/Navbar"
import {Outlet,BrowserRouter,Routes,Route, Navigate} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import Account from "./pages/Account"
import Wishlist from "./pages/Wishlist"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"
// import Cards from './pages/Non-linked/Cards';
import CardsCont from './pages/Non-linked/CardsCont';
import Mens from './pages/categories/Mens';
import Womens from './pages/categories/Womens';
import Electronics from './pages/categories/Electronics';
import Jewelery from './pages/categories/Jwellery';
import Update from './pages/Auth/Update';
import BillPayment from './pages/BillPayment';



const Layout = () => (
  <>
    <Header />
    <Navbar/>
    <Outlet />
    <Footer/>
  </>
);



function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
          
      <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account" element={<Account />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="allProduct" element={<CardsCont />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="jewelery" element={<Jewelery />} />
        <Route path="update" element={<Update />} />
        <Route path="payment" element={<BillPayment />} />

        <Route path="*" element={<Error />} />
      </Route>
       
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App;
