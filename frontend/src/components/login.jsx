import React, { useState } from "react";
import './register.css'
import axios from "axios";
import { Await, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add code to submit form data to server
    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      alert("Login Successful")
      console.log(response.data);
      // Handle successful login
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === "Incorrect password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert("Login Unsuccessful: " + error.response.data.message);
        console.log(error.response.data);
        // Handle other login errors
      }
    }
    
  };
  
  


  return (
    <div className="card" style={{ backgroundColor: "#d3eaf7" }}>
      <h1 className="mainhead">Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <Link to="/register" style={{ color: 'white' }}>Don't have an account? Click here</Link>
      </form>
    </div>
  );
};

export default Login;
