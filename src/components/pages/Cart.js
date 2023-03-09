import React from "react";
import '../styles/cart.css'

import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-page">
      <table>
     
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
       
      </table>
    </div>
  );
};

export default Cart;
