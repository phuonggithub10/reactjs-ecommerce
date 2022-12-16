import React, { useState, useEffect } from 'react';
import './App.css';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateToCart = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId, quantity) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async (productId, quantity) => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart && cart.total_items ? cart.total_items : 0} />
        <Routes>
          <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart} />}>
          </Route>
          <Route exact path='/cart' element={<Cart cart={cart}
            handleUpdateToCart={handleUpdateToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />}>
          </Route>
          <Route exact path='/checkout' element={<Checkout cart={cart}/>}>
          </Route>
        </Routes >
      </div>
    </Router>
  );
}

export default App;
