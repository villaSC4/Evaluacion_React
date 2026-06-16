import React from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

export default function Promos({ onAddToCart }) {
  const promosPara2 = productsData.filter(p => p.category === 'promos-para-2');
  const promosPersonales = productsData.filter(p => p.category === 'promos-personales');
  const cupones = productsData.filter(p => p.category === 'cupones');

  return (
    <main className="container py-4">
      <section id="promo-banner">
        <div className="alert text-center py-2 mb-4 shadow-sm" style={{ backgroundColor: '#0000FF', color: 'white', border: 'none', borderRadius: '50px' }}>
          <span className="fw-bold text-uppercase">Solo hoy 40% de dto en combos, hamburguesas y complementos con el cupón BEMBOS40M | </span>
          <a href="#" className="text-white text-decoration-underline italic small">Válido en web y app</a>
        </div>
      </section>


      <nav className="category-tabs mb-5 border-bottom" aria-label="Categorías de promociones">
        <ul className="nav nav-justified">
          <li className="nav-item">
            <a className="nav-link active fw-bold border-bottom border-danger border-3 text-primary-bembos" href="#para-2">Promociones para 2</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#personales">Promociones Personales</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#compartir">Promociones para Compartir</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#cupones">Cupones</a>
          </li>
        </ul>
      </nav>


      <section id="para-2" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h4 m-0">Promociones para 2</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 list-unstyled">
          {promosPara2.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>


      <section id="personales" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h4 m-0">Promociones Personales</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 list-unstyled">
          {promosPersonales.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>


      <section id="cupones" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h4 m-0">Cupones</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 list-unstyled">
          {cupones.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>
    </main>
  );
}