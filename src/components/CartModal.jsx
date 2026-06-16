import React from 'react';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, total }) {
  if (!isOpen) return null;

  return (
    <div class="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }} role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content border-0 shadow-lg">

          <div class="modal-header bg-primary-bembos text-white">
            <h5 class="modal-title fw-bold"><i class="bi bi-cart3 me-2"></i>Tu Carrito de Compras</h5>
            <button type="button" class="btn-close btn-close-white" onClick={onClose}></button>
          </div>


          <div class="modal-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {cartItems.length === 0 ? (
              <div class="text-center py-4">
                <i class="bi bi-basket text-muted fs-1"></i>
                <p class="mt-2 text-muted">¡Tu carrito está vacío!</p>
              </div>
            ) : (
              <ul class="list-group list-group-flush">
                {cartItems.map((item) => (
                  <li key={item.id} class="list-group-item d-flex align-items-center justify-content-between py-3">
                    <div class="d-flex align-items-center gap-3">
                      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                      <div>
                        <h6 class="fw-bold mb-0 small">{item.name}</h6>
                        <small class="text-muted">S/ {item.price.toFixed(2)} c/u</small>
                      </div>
                    </div>

                    <div class="d-flex align-items-center gap-3">
                      <div class="d-flex align-items-center border rounded bg-light">
                        <button class="btn btn-sm px-2 py-0 border-0" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span class="px-2 fw-bold small">{item.quantity}</span>
                        <button class="btn btn-sm px-2 py-0 border-0" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>

                      <span class="fw-bold text-dark small" style={{ minWidth: '65px', textAlign: 'right' }}> S/ {(item.price * item.quantity).toFixed(2)}</span>
                      <button class="btn btn-sm btn-outline-danger border-0" onClick={() => onRemoveItem(item.id)}><i class="bi bi-trash3"></i></button>

                    </div>

                  </li>
                ))}
              </ul>
            )}
          </div>


          <div class="modal-footer bg-light d-flex flex-column align-items-stretch">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fw-bold text-uppercase">Total a pagar:</span>
              <span class="fs-4 fw-black text-primary-bembos">S/ {total.toFixed(2)}</span>
            </div>
            <button class="btn btn-warning w-100 fw-bold py-2 rounded-pill shadow-sm text-uppercase" disabled={cartItems.length === 0} onClick={() => alert('¡Pedido procesado con éxito!')}>
              Continuar Compra <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}