import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ContactUs } from "../ContactUs";
import Login from '../Login'
import SignUp from '../pages/SignUp'
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";

const Routers = () => {
  return (
    <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
  );
};

export default Routers;