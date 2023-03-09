import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signUp.css";


const SignUp = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(fname.length<5){
      
    }
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    navigate("/login");
  };
  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>

        <input
          onChange={(e) => setFname(e.target.value)}
          id="fname"
          className="input-feild"
          type="text"
          placeholder="Enter your FirstName"
          value={fname}
          required
        />

        <label>Last Name:</label>

        <input
          onChange={(e) => setLname(e.target.value)}
          id="lname"
          className="input-feild"
          type="text"
          placeholder="Enter your LastName"
          value={lname}
          required
        />

        <label>Email:</label>

        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="input-feild"
          type="text"
          placeholder="Enter your email"
          value={email}
          required
        />

        <label>Password:</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="input-feild"
          type="password"
          placeholder="Enter your Password"
          value={password}
          required
        />

        <label>Confirm Password:</label>

        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          className="input-feild"
          placeholder="Re-type Password"
          type="password"
          value={confirmPassword}
          required
        />

        <button className="btn" type="submit" value="submit">
          Sign Up
        </button>
        <hr />
        <p>
          Do you already have account?<a href="#">Sign In</a>
        </p>
      </form>
      <div></div>
    </div>
  );
};
export default SignUp;
