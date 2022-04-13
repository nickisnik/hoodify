import React, {useState} from 'react';
import './ShoppingContent.css';
import {ShoppingItemsList, ShoppingCart} from './';


const ShoppingContent = ({showCart, setShowCart, cartItems, setCartItems}) => {



  const handleAddItem = (item) => {
    const cartArr = cartItems.map((product) => product);
    if (cartArr.some((product, index) => {
      if(product.name === item.name) {
        console.log(cartItems)
        setCartItems((items) => {
          return [
            ...items.slice(0, index),
            {...product, amount: product.amount + 1},
            ...items.slice(index + 1)
          ]
        })
      }
      return product.name === item.name
    })){
      return 
    } 
      
    setCartItems((prevItems) => [...prevItems, item])
  }


  return (
    <div className='ShoppingContent__wrapper'>
      
 
      

      <ShoppingItemsList handleAddItem={handleAddItem}/>

      
    </div>
  )
}

export default ShoppingContent