import React from 'react';
import './NavBar.css';
import {ShoppingCart} from './'
import cartImg from './cart 1.svg'

const NavBar = ({showCart, setShowCart, cartItems, setCartItems}) => {

  const handleCartShow = () => {
    setShowCart((prevState) => !prevState)
  }

  return (
    <div className='NavBar__content'>
      <div className="NavBar__content__link-container"><a href="" className="NavBar__content__link">Shop</a></div>
      
      <div className="NavBar__content__logo-container"><span className='NavBar__content__logo'>Hoodify</span></div>
      <div className="NavBar__content__cart-container"><img src={cartImg} className="NavBar__content__cart-button" onClick={handleCartShow} /></div>
      

      {showCart ? <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} /> : ''}
    </div>
  )
}

export default NavBar