import React, { useState } from 'react';
import axios from "axios";
import './login.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const SignInLoginModal = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // Create a navigate object

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Handle sign-in logic
      try{
        const response=await axios.post("http://localhost:3000/api/signup",{
          email:email,
          password:password,
        });
        console.log("Signup Credentials sent Successfully");
        setMessage(response.data);
        if (response.data.redirectUrl) {
          navigate(response.data.redirectUrl); // Redirect to the specified URL
          setMessage(response.data.message);
        }
      }catch(err){
        console.log("Error in sending Signup Credentials",err);
      }
      
    } else {
      // Handle login logic
      try{
        const response = await axios.post("http://localhost:3000/api/login",{
          email:email,
          password:password,
        });
        console.log("Login Credentials sent Successfully");
        console.log(response);
          setMessage(response.data);
        if (response.data.redirectUrl) {
          navigate(response.data.redirectUrl); // Redirect to the specified URL
          setMessage(response.data.message);
        }
      }catch(err){
        console.log("Error in sending login Credentials",err);
      }
    }
  };

  return (
    <div className="sign-in-login-modal">
      <div className="modal-content">
        <h2 className="login-signin">{isSignIn ? 'Sign In' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <button type="submit">{isSignIn ? 'Sign In' : 'Login'}</button>
          </div>
          <div className="error"><b>{message}</b></div>
        </form>
        <br></br>
        <div className="toggle-form">
          {isSignIn ? 'Already have an account? ' : 'Don\'t have an account? '}
          <button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Login' : 'Sign In'}
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default SignInLoginModal;

