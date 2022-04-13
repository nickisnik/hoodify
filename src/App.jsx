import './App.css';
import {NavBar, ShoppingContent, Footer} from './components';
import {useState} from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <NavBar cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />
      <ShoppingContent cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />
      <Footer />
    </div>
  );
}

export default App;
