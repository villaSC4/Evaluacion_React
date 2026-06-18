import React, { useState } from 'react';

export default function Locales({ setView }) {
  const localesBembos = [
    {
      id: 1,
      name: "Bembos SJL",
      address: "Av. Lurigancho Cdra. 9 (Mall Aventura SJL)",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3925769741544!2d-77.0120253!3d-12.0163353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c59525b63cee%3A0x7516191b1b123f8b!2sBembos%20SJL!5e0!3m2!1ses-419!2spe!4v1715800000000!5m2!1ses-419!2spe"
    },
    {
      id: 2,
      name: "Bembos Plaza Vea Ate",
      address: "Av. Carretera Central Km 4.5, Ate",
      phone: "01 419-1919",
      tags: ["Solo Retiro en Tienda"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.654321098765!2d-76.9405432!3d-12.0345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6543210fdfd%3A0x123456789abcdef!2sPlaza%20Vea%20Ate!5e0!3m2!1ses-419!2spe!4v1710000000000"
    },
    {
      id: 3,
      name: "Bembos Primavera",
      address: "Av. Aviación / Av. Primavera, San Borja",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.423456789012!2d-77.0012345!3d-12.1123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81234567890%3A0xabcdef123456789!2sAv.%20Aviacion%20%26%20Av.%20Primavera%2C%20San%20Borja!5e0!3m2!1ses-419!2spe!4v1710000000000"
    },
    {
      id: 4,
      name: "Bembos Las Gardenias",
      address: "Av. Benavides 5200, Santiago de Surco",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.123456789012!2d-76.9812345!3d-12.128456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91234567890%3A0xabcdef987654321!2sAv.%20Alfredo%20Benavides%205200%2C%20Santiago%20de%20Surco!5e0!3m2!1ses-419!2spe!4v1710000000000"
    },
    {
      id: 5,
      name: "Bembos Chacarilla",
      address: "Calle Monterrey 250, Chacarilla, Surco",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.234567890123!2d-76.9912345!3d-12.121234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c71234567890%3A0xabcdef0123456789!2sCalle%20Monterrey%20250%2C%20Santiago%20de%20Surco!5e0!3m2!1ses-419!2spe!4v1710000000000"
    },
    {
      id: 6,
      name: "Bembos Aviación",
      address: "Av. Aviación 2824, San Borja",
      phone: "01 419-1919",
      tags: ["Delivery", "Retiro"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.534567890123!2d-77.0023456!3d-12.091234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c61234567890%3A0xabcdef543210987!2sAv.%20Aviaci%C3%B3n%202824%2C%20San%20Borja!5e0!3m2!1ses-419!2spe!4v1710000000000"
    }
  ];

  const [currentMap, setCurrentMap] = useState(localesBembos[0].mapUrl);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocales = localesBembos.filter((local) =>
    local.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    local.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <section className="search-section py-4 bg-light">
        <div className="container text-center">
          <h2 className="fw-black text-uppercase mb-2" style={{ color: '#002855' }}>Locales Bembos cerca de ti</h2>
          <p className="text-muted small mb-3">Encuentra tu Bembos más cercano y disfruta de la mejor hamburguesa a la parrilla.</p>
          <div className="search-box mx-auto position-relative" style={{ maxWidth: '500px' }}>
            <input 
              type="text" 
              className="form-control rounded-pill ps-4 pe-5" 
              placeholder="Ingresa nombre de tienda o dirección..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
          </div>
        </div>
      </section>

      <section className="container-fluid p-0 locales-wrapper">
        <div className="row g-0">
          
          <div className="col-lg-4 col-md-5 scrollable-list border-end shadow-sm" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            {filteredLocales.length > 0 ? (
              filteredLocales.map((local) => (
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
              ))
            ) : (
              <div className="p-4 text-center text-muted small">
                No se encontraron locales que coincidan con tu búsqueda.
              </div>
            )}
          </div>

          <div className="col-lg-8 col-md-7 d-none d-md-block p-0 position-relative" style={{ height: 'calc(100vh - 200px)' }}>
            <iframe 
              key={currentMap}
              src={currentMap}
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