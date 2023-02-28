import { disabled } from 'express/lib/application';
import React from 'react';

import {useSelector,useDispatch} from "react-redux";
import {addItem,deleteItem} from '../actions/cartActions'

const Cart=()=> {
  const state=useSelector((state)=>state);
  const dispatch=useDispatch();
  
  
  return (
    <div>
      <h2>Num Of Items: {state.numOfItems}</h2><br/>
      <button onClick={()=>{
        dispatch(addItem())
      }}
        > Add Item</button>&nbsp;
      <button  onClick={()=>{
        dispatch(deleteItem())
      }}>Delete Item</button>
    </div>
  )
}
export default Cart
