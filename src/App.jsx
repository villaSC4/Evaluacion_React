import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppState } from './hooks/useAppState';

import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './views/Home';
import Locales from './views/Locales';
import Login from './views/Login';
import Promos from './views/Promos'; 
import Combos from './views/Combos';
import CartModal from './components/CartModal';

export default function App() {
  const state = useAppState();

  return (
    <Router>
      <Header cartTotal={state.cartTotal} cartCount={state.cartCount} onCartClick={() => state.setIsCartOpen(true)} user={state.user}  onLogout={state.handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home onAddToCart={state.handleAddToCart} />} />
        <Route path="/promos" element={<Promos onAddToCart={state.handleAddToCart} />} /> 
        <Route path="/combos" element={<Combos onAddToCart={state.handleAddToCart} />} />
        <Route path="/programa-lealtad" element={<Login onAuthSuccess={state.handleAuthSuccess} />} /> 
        <Route path="/login" element={<Login onAuthSuccess={state.handleAuthSuccess} />} /> 
        <Route path="/locales" element={<Locales />} />
      </Routes>

      <Footer />

      <CartModal isOpen={state.isCartOpen}  onClose={() => state.setIsCartOpen(false)} cartItems={state.cart} onUpdateQuantity={state.handleUpdateQuantity} onRemoveItem={state.handleRemoveItem} total={state.cartTotal}/>

    </Router>
  );
}