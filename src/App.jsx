import './App.css';
import {NavBar, ShoppingContent, Footer, Home, ProductDetails} from './components';
import {useState} from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
  <div className='App'>
    <NavBar cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<ShoppingContent cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />} />
      <Route path="/products/:productId" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
    </Routes>

    <Footer />
  </div>
  );
}

export default App;
