import React, { useEffect, useState } from 'react'
import image6 from "../../images/SideImage.png"
import { Link, useNavigate } from 'react-router-dom';
import  useStore  from '../../useStore';



const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { email: storedEmail, password: storedPassword, setEmail, setPassword, setCred } = useStore();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate form data
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    // Check against stored signup data
    if (email !== storedEmail || password !== storedPassword) {
      setError('Invalid email or password');
      return;
    }

    // Clear error message
    setError('');

    // Store data in Zustand store
    setEmail(email);
    setPassword(password);
    setCred(true); 

    console.log("Login form submitted:", { email, password });

  
    navigate('/cart');
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
              <h2 className="card-title text-center">Log in to Exclusive</h2>
              <p className="text-center">Enter your details below</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <p><Link to="/forgot-password">Forget password?</Link></p>
                <p>Don't have an account? <Link to="/signUp">Create one</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login