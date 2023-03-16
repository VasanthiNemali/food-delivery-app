import React from 'react'
import Restaurants from "../pages/Restaurants";
import NavBar from '../Navbar/Navbar'
import Cart from '../pages/Cart'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ContactUs from "../pages/ContactUs";
import OrderNow from "../pages/OrderNow";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Routing = () => {
 
  return (
    <div>

<BrowserRouter>
        <div>
          <NavBar />
        
          <Routes>
            <Route exact path="/restaurants" element={<Restaurants />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route extac path="/contactus" element={<ContactUs />}></Route>
            <Route extac path="/ordernow" element={<OrderNow />}></Route>
          </Routes>
        </div>
        
      </BrowserRouter>


    </div>
  )
}

export default Routing