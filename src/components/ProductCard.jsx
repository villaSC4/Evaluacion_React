import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <li className="col">
      <article className="product-card h-100 shadow-sm border rounded-3 p-3 position-relative d-flex flex-column">
        {product.isNew && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            Nuevo
          </span>
        )}
        
        <div className="product-image text-center mb-3">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>

        <div className="product-content d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h4 className="fw-bold m-0 fs-6">{product.name}</h4>
            <button className="btn btn-link p-0 text-danger">
              <i className="bi bi-heart"></i>
            </button>
          </div>
          
          <p className="text-muted small mb-3">{product.description}</p>
          
          <div className="product-action d-flex align-items-center justify-content-between mt-auto">
            <div className="price-container">
              <strong className="fs-5 d-block">S/ {product.price.toFixed(2)}</strong>
              {product.oldPrice && (
                <>
                  <small className="text-decoration-line-through text-muted">
                    S/ {product.oldPrice.toFixed(2)}
                  </small>
                  <span className="badge bg-danger ms-1">{product.discount}</span>
                </>
              )}
            </div>
            
            {/* Usando tu clase exacta para el botón del carrito */}
            <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}