import React from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

export default function Promos({ onAddToCart }) {
  const promosPara2 = productsData.filter(p => p.category === 'promos-para-2');
  const promosPersonales = productsData.filter(p => p.category === 'promos-personales');
  const promosCompartir = productsData.filter(p => p.category === 'inicio-promos');
  const cupones = productsData.filter(p => p.category === 'cupones');

  return (
    <main className="container py-4 px-3 px-sm-4">
      <section id="promo-banner">
        <div className="alert text-center py-2 mb-4 shadow-sm" style={{ backgroundColor: '#0000FF', color: 'white', border: 'none', borderRadius: '50px' }}>
          <span className="fw-bold text-uppercase d-block d-sm-inline" style={{ fontSize: "0.8rem" }}>Solo hoy 40% de dto en combos, hamburguesas y complementos con el cupón BEMBOS40M | </span>
          <a href="#" className="text-white text-decoration-underline italic small d-inline-block mt-1 mt-sm-0">Válido en web y app</a>
        </div>
      </section>

      <nav className="category-tabs mb-5 border-bottom overflow-auto" aria-label="Categorías de promociones" style={{ whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch' }}>
        <ul className="nav d-flex flex-row flex-nowrap justify-content-start justify-content-xl-between list-unstyled mb-0 pb-1">
          <li className="nav-item">
            <a className="nav-link active fw-bold border-bottom border-danger border-3 text-primary-bembos px-3" href="#para-2">Promociones para 2</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark fw-bold px-3" href="#personales">Promociones Personales</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark fw-bold px-3" href="#compartir">Promociones para Compartir</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold px-3" href="#cupones">Cupones</a>
          </li>
        </ul>
      </nav>

      <section id="para-2" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h5 h-md-4 m-0">Promociones para 2</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-sm-3 g-md-4 list-unstyled">
          {promosPara2.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>

      <section id="personales" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h5 h-md-4 m-0">Promociones Personales</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-sm-3 g-md-4 list-unstyled">
          {promosPersonales.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>

      <section id="compartir" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h5 h-md-4 m-0">Promociones para Compartir</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-sm-3 g-md-4 list-unstyled">
          {promosCompartir.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>

      <section id="cupones" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-black text-uppercase h5 h-md-4 m-0">Cupones</h2>
          <a href="#" className="text-primary-bembos fw-bold small text-decoration-none">Ver todo</a>
        </div>
        <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-sm-3 g-md-4 list-unstyled">
          {cupones.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      </section>
    </main>
  );
}