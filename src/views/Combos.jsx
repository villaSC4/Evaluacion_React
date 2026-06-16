import React from 'react';
import { productsData } from '../data/products';

export default function Combos({ onAddToCart }) {
  const listCombos = productsData.filter(product => product.category === 'combos');

  return (
    <main className="container py-5">

      <div className="text-start mb-4">
        <h2 className="fw-bold text-uppercase m-0" style={{ color: '#002855', fontSize: '2.5rem' }}>Combos</h2>
      </div>

      <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 list-unstyled"> {listCombos.map((product) => (
          
          <li className="col" key={product.id}>
            <article className="product-card h-100 shadow-sm border rounded-3 p-3 d-flex flex-column justify-content-between position-relative bg-white">
              
              {product.isNew && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>
              )}
              
              <div className="product-image text-center mb-3">
                <img src={product.image} className="img-fluid" alt={product.name} style={{ maxHeight: '150px', objectFit: 'contain' }} />
              </div>
              
              <div className="product-content d-flex flex-column flex-grow-1 justify-content-between text-start">
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="fw-bold m-0 fs-6 text-dark">{product.name}</h4>
                    <button className="btn btn-link p-0 text-danger shadow-none">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                  <p className="text-muted small mb-3 lh-sm" style={{ fontSize: '0.75rem' }}>{product.description}</p>
                </div>
                
                <div className="product-action d-flex align-items-center justify-content-between mt-auto pt-2">
                  <div className="price-container">
                    <strong className="fs-5 d-block text-dark">S/ {product.price.toFixed(2)}</strong>
                  </div>
                  <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
                    <span style={{ fontSize: '24px', lineHeight: '1', fontWeight: 'bold', color: 'white' }}>+</span>
                  </button>
                </div>
              </div>

            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}