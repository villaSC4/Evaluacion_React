import React from 'react';

export default function Header({ cartTotal, cartCount, onCartClick, currentView, setView, user, onLogout }) {
  return (
    <header className="bg-primary-bembos py-2 sticky-top">
      <div className="container-fluid px-lg-5">
        <nav className="d-flex align-items-center justify-content-between">
          
          <div className="header-logo cursor-pointer" onClick={() => setView('home')}>
            <img src="https://www.bembos.com.pe/static/version1776085287/frontend/Ngr/bembos/es_PE/images/logo.svg" alt="Bembos" className="img-fluid" style={{ maxHeight: "50px" }} />
          </div>

          <ul className="nav d-none d-xl-flex align-items-center mx-auto">
            <li className="nav-item">
              <button onClick={() => setView('home')} className={`btn nav-link text-white fw-bold d-flex align-items-center ${currentView === 'home' ? 'text-warning' : ''}`}>
                <i className="bi bi-list-columns-reverse me-2"></i> MENÚ
              </button>
            </li>
            
            <li className="nav-item">
              <button 
                onClick={() => setView('promos')} 
                className={`btn nav-link text-white fw-bold d-flex align-items-center ${currentView === 'promos' ? 'text-warning' : ''}`}>
                <i className="bi bi-patch-check me-2"></i> PROMOS EXCLUSIVAS
              </button>
            </li>

            <li className="nav-item">
              <span 
                onClick={() => setView('login')} 
                className={`nav-link text-white fw-bold d-flex align-items-center ${currentView === 'login' ? 'text-warning' : ''}`}
                style={{ cursor: 'pointer', userSelect: 'none' }}>
                <i className="bi bi-heart-fill me-2"></i> PROGRAMA LEALTAD
              </span>
            </li>

            <li className="nav-item">
              <button onClick={() => setView('locales')} className={`btn nav-link text-white fw-bold d-flex align-items-center ${currentView === 'locales' ? 'text-warning' : ''}`}>
                <i className="bi bi-shop me-2"></i> LOCALES 
              </button>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link text-white px-2">
                <i className="bi bi-search fs-5"></i>
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4 text-white">
            <div className="d-none d-md-flex align-items-center gap-2">
              <i className="bi bi-telephone fs-4"></i>
              <div className="lh-1">
                <small className="d-block fw-bold" style={{ fontSize: "0.7rem" }}>Llámanos</small>
                <span className="fw-black text-warning">01 419-1919</span>
              </div>
            </div>

            {user ? (
              <div 
                className="d-flex align-items-center gap-2 cursor-pointer p-1 rounded transition-all user-profile-box" 
                onClick={onLogout} 
                title="Cerrar Sesión"
              >
                <i className="bi bi-person-check-fill fs-3 text-warning" style={{ lineHeight: 1 }}></i>
                
                <div className="lh-sm text-start">
                  <small className="d-block text-white fw-semibold" style={{ fontSize: "0.75rem" }}>
                    Hola, {user.firstName}
                  </small>
                  <span className="fw-bold text-white text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                    Mi Cuenta <span className="text-warning text-none" style={{ fontSize: "0.75rem" }}>(Salir)</span>
                  </span>
                </div>
              </div>
            ) : (
              <div 
                className={`d-flex align-items-center gap-2 cursor-pointer transition-all ${currentView === 'login' ? 'text-warning' : 'text-white'}`} 
                onClick={() => setView('login')}
              >
                <i className="bi bi-person fs-3"></i>
                <div className="lh-1 text-start">
                  <small className="d-block" style={{ fontSize: "0.7rem" }}>Hola,</small>
                  <span className="fw-bold">Iniciar Sesión</span>
                </div>
              </div>
            )}

            <button onClick={onCartClick} className="btn btn-warning rounded-pill d-flex align-items-center px-4 py-2 fw-bold position-relative">
              <i className="bi bi-cart3 me-2"></i> 
              S/ {cartTotal.toFixed(2)}
              {cartCount > 0 && (
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
} 