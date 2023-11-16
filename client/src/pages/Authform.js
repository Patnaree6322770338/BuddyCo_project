import React, { useState } from 'react';
import './Apptwo.css'; // Import your CSS file here
import './SignUp.module.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AuthForms() {

    const navigate = useNavigate();
   
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate] = useState('');

    const addUsers = () => {
        Axios.post('http://localhost:3000/create', {
            username,
            password,
            email,
            date_of_birth
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error adding user:", error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers();
    };

    const handleLogin = (e) => {
      e.preventDefault();
      Axios.post('http://localhost:3000/login', { 
          username,
          password
      }).then((response) => {
          console.log("Login Response:", response);
          navigate('/home'); 
      }).catch((error) => {
          console.error("Error logging in:", error);
      });
    }

    

    

   
  const [isLogin, setIsLogin] = useState(true); // Default to login view

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '', 
  });

  // Updated errors to include dateOfBirth
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '', // new date of birth field for errors
  });

  

  // Add your validation functions here

  const switchForm = () => {
    
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      email: '',
      password: '',
      dateOfBirth: '',
    });
    setErrors({
      username: '',
      email: '',
      password: '',
      dateOfBirth: '',
    });
  };

  return (
    <div className={`container ${isLogin ? '' : 'right-panel-active'}`}>
            <div className="form-container login-container">
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(event)=>{setName(event.target.value)}}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                    <button type="submit">Login</button>
    

        
          {/* Social media buttons */}
        </form>
      </div>
      <div className="form-container register-container">
        <form onSubmit={handleSubmit}>
          <h1>Register here</h1>
          <div className="form-control">
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={(event)=>{setName(event.target.value)}}
            />
            <small>{errors.username}</small>
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event)=>{setEmail(event.target.value)}}
            />
            <small>{errors.email}</small>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event)=>{setPassword(event.target.value)}}
              
            />
            <small>{errors.password}</small>
          </div>
            {/* New Date of Birth field */}
            <div className="form-control">
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of Birth"
              onChange={(event)=>{setDate(event.target.value)}}
            />
            <small>{errors.dateOfBirth}</small>
          </div>
          <button type="submit" onClick={handleSubmit}>Register</button>
          <span>or use your account</span>
          {/* Social media buttons */}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
                <h1>Hello, Friend!</h1>
            <h4>Enter your personal details and start journey with us</h4>
            <button className="ghost" onClick={switchForm}>Login</button>
          </div>
          <div className="overlay-panel overlay-right">
          <h1>Welcome Back!</h1>
            <h4>To keep connected with us please login with your personal info</h4>
            <button className="ghost" onClick={switchForm}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForms;