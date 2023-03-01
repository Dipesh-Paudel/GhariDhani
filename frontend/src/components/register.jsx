
import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/register", {
        name: name,
        email: email,
        password: password,
      });
      alert("Registration Successful")
      //console.log(response.data);
      // Handle successful registration
    } catch (error) {
      alert("Registration Unsuccessful")
      console.log(error.response.data);
      // Handle registration error
    }
  };

  return (
    <div className="body"><div className="card" style={{ backgroundColor: "#d3eaf7" }}>
      <h1 className="mainhead">Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
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
        <br />
        <button type="submit">Register</button>
        <Link to="/login" style={{ color: 'white' }}>Already have an account? Click Here To Login</Link>
      </form>
    </div>
    </div>
  );
};

export default Register;

