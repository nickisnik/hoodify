import React, {useState} from 'react';
import '../styles/ShoppingContent.css';
import {ShoppingItemsList, ShoppingCart} from './';


const ShoppingContent = ({showCart, setShowCart, cartItems, setCartItems}) => {

  return (
    <div className='ShoppingContent__wrapper'>
      
 
      

      <ShoppingItemsList />

      
    </div>
  )
}

export default ShoppingContent