import React, { useEffect } from 'react'
import image6 from "../../images/SideImage.png"
import { Link, useNavigate } from 'react-router-dom';
import  useStore  from '../../useStore';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const { setName, setEmail, setPassword, setCred } = useStore();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      // Store data in Zustand store
      setName(name);
      setEmail(email);
      setPassword(password);
      setCred(true); 
  
      console.log("Form submitted:", { name, email, password });
  
      
      navigate('/login'); 
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <img src={image6} alt="Illustration" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title text-center">Create an Account</h2>
                <p className="text-center">Enter your details below</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Create Account</button>
                </form>
                <div className="text-center mt-3">
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignUp  