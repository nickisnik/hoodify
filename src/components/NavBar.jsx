import React from 'react';
import '../styles/NavBar.css';
import {ShoppingCart} from './'
import cartImg from '../assets/cart 1.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = ({showCart, setShowCart, cartItems, setCartItems}) => {
  let navigate = useNavigate();
  const handleCartShow = () => {
    setShowCart((prevState) => !prevState)
  }

  return (
    <div className='NavBar__content'>
      <div className="NavBar__content__link-container"><a onClick={() => {navigate('/products')}} className="NavBar__content__link">Shop</a></div>
      
      <div className="NavBar__content__logo-container"><span onClick={() => {navigate('/')}} className='NavBar__content__logo'>Hoodify</span></div>
      <div className="NavBar__content__cart-container"><img src={cartImg} className="NavBar__content__cart-button" onClick={handleCartShow} /></div>
      

      {showCart ? <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} /> : ''}
    </div>
  )
}

export default NavBar