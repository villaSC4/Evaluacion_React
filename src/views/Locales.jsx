import React, { useState } from 'react';

export default function Locales({ setView }) {
  const localesBembos = [
    {
      id: 1,
      name: "Bembos SJL",
      address: "Av. Próceres de la Independencia (Frente al Mall Aventura SJL)",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=11gFhwRO_yezrYgC26vrr2TNZLY7I96k&ehbc=2E312F&ll=-12.01641,-76.99908&z=18"
    },
    {
      id: 2,
      name: "Bembos Plaza Vea Ate",
      address: "Av. Carretera Central Km 4.5, Ate",
      phone: "01 419-1919",
      tags: ["Solo Retiro en Tienda"],
      mapUrl: "https://www.google.com/maps/d/embed?mid=TU_ID_DE_MAPA6"
    },
    {
      id: 3,
      name: "Bembos Primavera",
      address: "Av. Aviación / Av. Primavera, San Borja",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/d/embed?mid=TU_ID_DE_MAPA7"
    },
    {
      id: 4,
      name: "Bembos Las Gardenias",
      address: "Av. Benavides 5200, Santiago de Surco",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/d/embed?mid=TU_ID_DE_MAPA8"
    },
    {
      id: 5,
      name: "Bembos Chacarilla",
      address: "Calle Monterrey 250, Chacarilla, Surco",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/d/embed?mid=TU_ID_DE_MAPA9"
    },
    {
      id: 6,
      name: "Bembos Aviación",
      address: "Av. Aviación 2824, San Borja",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/d/embed?mid=1S9B7R_xJvV0V3xWnQG-xYz4P7Uo0"
    }
  ];

  const [currentMap, setCurrentMap] = useState("https://www.google.com/maps/d/embed?mid=1S9B7R_xJvV0V3xWnQG-xYz4P7Uo1");

  return (
    <main>
      <section className="search-section py-4 bg-light">
        <div className="container text-center">
          <h2 className="fw-black text-uppercase mb-2" style={{ color: '#002855' }}>Locales Bembos cerca de ti</h2>
          <p className="text-muted small mb-3">Encuentra tu Bembos más cercano y disfruta de la mejor hamburguesa a la parrilla.</p>
          <div className="search-box mx-auto position-relative" style={{ maxWidth: '500px' }}>
            <input type="text" className="form-control rounded-pill ps-4 pe-5" placeholder="Ingresa nombre de tienda o dirección..." />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
          </div>
        </div>
      </section>

      <section className="container-fluid p-0 locales-wrapper">
        <div className="row g-0">
          
          <div className="col-lg-4 col-md-5 scrollable-list border-end shadow-sm" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            {localesBembos.map((local) => (
              <div className="store-card p-3 border-bottom text-start" key={local.id}>
                <h5 className="fw-bold mb-2" style={{ color: '#002855' }}>{local.name.toUpperCase()}</h5>
                <div className="store-info small text-muted mb-3">
                  <p className="mb-1"><i className="bi bi-geo-alt-fill me-1 text-danger"></i> {local.address}</p>
                  <p className="mb-2"><i className="bi bi-telephone-fill me-1"></i> {local.phone}</p>
                  <div className="d-flex gap-2">
                    {local.tags.map((tag, idx) => (
                      <span key={idx} className={`badge px-2 py-1 ${tag.includes('Delivery') ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  className="btn btn-sm btn-primary-bembos w-100 text-uppercase fw-bold py-2 text-white"
                  style={{ backgroundColor: '#002855', borderRadius: '5px' }}
                  onClick={() => setCurrentMap(local.mapUrl)}
                >
                  Ver en Mapa
                </button>
              </div>
            ))}
          </div>

          <div className="col-lg-8 col-md-7 d-none d-md-block p-0 position-relative" style={{ height: 'calc(100vh - 200px)' }}>
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=11gFhwRO_yezrYgC26vrr2TNZLY7I96k&ehbc=2E312F"
              style={{ width: '100%', height: '100%', border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Locales Interactivos My Maps"
            ></iframe>

            <button 
              onClick={() => setView('home')} 
              className="btn btn-warning rounded-pill px-5 shadow-lg position-absolute fw-bold text-uppercase" 
              style={{ bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, border: '2px solid white' }}
            >
              <i className="bi bi-list-task me-2"></i> Ir a Menú 
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}