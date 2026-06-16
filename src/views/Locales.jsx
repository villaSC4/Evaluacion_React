import React from 'react';

export default function Locales({ setView }) {
  return (
    <main>

      <section className="search-section">
        <div className="container text-center">
          <h2 className="fw-black text-uppercase mb-3" style={{ color: 'var(--bembos-blue)' }}>Locales Bembos cerca de ti</h2>
          <p className="text-muted small mb-4">Encuentra tu Bembos más cercano y disfruta de la mejor hamburguesa a la parrilla.</p>
          <div className="search-box mx-auto">
            <input type="text" className="form-control" placeholder="Ingresa nombre de tienda o dirección..." />
            <i className="bi bi-search"></i>
          </div>
        </div>
      </section>


      <section className="container-fluid p-0 locales-wrapper">
        <div className="row g-0 h-100">
          

          <div className="col-lg-4 col-md-5 scrollable-list border-end shadow-sm">
            
            <div className="store-card">
              <div className="store-name">(2210) AREQUIPA CERRO COLORADO <span className="badge-new">NUEVO</span></div>

              <div className="store-info">
                <p className="mb-2"><i className="bi bi-geo-alt-fill me-1"></i> Av. Aviación 602, Cerro Colorado 04017</p>
                <p className="mb-3"><i className="bi bi-telephone-fill me-1"></i> 01 419-1919</p>
                <div className="d-flex gap-2">
                  <span className="dispatch-tag tag-delivery"><i className="bi bi-truck"></i> Delivery</span>
                  <span className="dispatch-tag tag-pickup"><i className="bi bi-bag-check"></i> Retiro</span>
                </div>
              </div>

              <button className="btn btn-ver-local shadow-sm">VER LOCAL</button>
            </div>

            <div className="store-card">
              <div className="store-name">(2122) BEMBOS ASIA</div>
              <div className="store-info">
                <p className="mb-2"><i className="bi bi-geo-alt-fill me-1"></i> Blvd. Asia, Km 97.5 Panamericana Sur</p>
                <p className="mb-3"><i className="bi bi-telephone-fill me-1"></i> 01 419-1919</p>
                <div className="d-flex gap-2">
                  <span className="dispatch-tag tag-pickup"><i className="bi bi-bag-check"></i> Solo Retiro en Tienda</span>
                </div>
              </div>
              <button className="btn btn-ver-local shadow-sm">VER LOCAL</button>
            </div>

          </div>


          <div className="col-lg-8 col-md-7 d-none d-md-block p-0">
            <div className="map-container position-relative w-100 h-100">
              <img 
                src="https://malldelsur.pe/wp-content/uploads/2023/12/DRCT-PLANTA-N%C2%B0-4-OK-BEMBOS-scaled.jpg" 
                alt="Mapa de Locales" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
              />
              <button onClick={() => setView('home')} className="btn btn-primary-bembos rounded-pill px-5 shadow-lg" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, border: '2px solid white' }}>
                <i className="bi bi-list-task me-2"></i> IR A MENÚ </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}