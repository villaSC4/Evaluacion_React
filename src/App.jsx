import React, { useState } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './views/Home';
import Locales from './views/Locales';
import Login from './views/Login';
import Promos from './views/Promos'; 
import CartModal from './components/CartModal';

export default function App() {
  const [view, setView] = useState('home'); 
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header cartTotal={cartTotal} onCartClick={() => setIsCartOpen(true)} currentView={view} setView={setView}/>
      {view === 'home' && <Home onAddToCart={handleAddToCart} />}
      {view === 'promos' && <Promos onAddToCart={handleAddToCart} />} 
      {view === 'login' && <Login />}                              
      {view === 'locales' && <Locales setView={setView} />}

      <Footer />


      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}cartItems={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} total={cartTotal}/>
    </>
  );
}