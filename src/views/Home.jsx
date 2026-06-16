import React from 'react';

export default function Home({ onAddToCart, setView }) {
  const productoChicharronera = {
    id: 1,
    name: "Promo Chicharronera",
    description: "1 Chicharronera regular, 1 papa regular, 1 gaseosa personal...",
    price: 20.90,
    image: "https://www.bembos.com.pe/media/catalog/product/2/1/2146469168_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg"
  };

  return (
    <main>
      <section className="container-fluid p-0">
        <div id="heroBembos" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.bembos.com.pe/media/wysiwyg/BANNER_HEADER_-_MOBILE_2_1.png" className="d-block w-100 banner-img" alt="Sorteo Shakira" />
            </div>
            <div className="carousel-item">
              <img src="https://www.bembos.com.pe/media/wysiwyg/BANNER_HEADER_MOBILE_1_.png" className="d-block w-100 banner-img" alt="Promo Bembos" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroBembos" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroBembos" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section className="products-section container py-5">
        <div className="category-nav d-flex justify-content-center gap-4 flex-wrap">
          <div className="category-card">
            <div className="category-btn">Hamburguesas</div>
            <div className="category-img-container">
              <img src="https://www.bembos.com.pe/media/catalog/product/2/1/2146463859_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg" alt="Hamburguesas" />
            </div>
          </div>


          <div className="category-card cursor-pointer" onClick={() => setView('combos')} style={{ cursor: 'pointer' }}>
            <div className="category-btn">Combos</div>
            <div className="category-img-container">
              <img src="https://www.bembos.com.pe/media/catalog/product/_/c/_chicharronera_med_papas_med_gaseosa_1000x1000_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2" alt="Combo" />
            </div>
          </div>
        </div>
      </section>

      <section className="promociones container py-5">
        <h2 className="text-center fw-bold text-uppercase">Las mejores hamburguesas</h2>
        <h3 className="mb-4 fw-bold">PROMOCIONES</h3>

        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 list-unstyled">
          {[1, 2, 3, 4, 5].map((index) => (
            <li className="col" key={index}>
              <article className="product-card h-100 shadow-sm border rounded-3 p-3 position-relative">
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>
                <div className="product-image text-center mb-3">
                  <img src="https://www.bembos.com.pe/media/catalog/product/2/1/2146469168_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg" className="img-fluid" alt="Promo Chicharronera" />
                </div>
                <div className="product-content">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="fw-bold m-0 fs-6">Promo Chicharronera</h4>
                    <button className="btn btn-link p-0 text-danger shadow-none">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                  <p className="text-muted small mb-3">1 Chicharronera regular, 1 papa regular, 1 gaseosa personal...</p>
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto">
                    <div className="price-container">
                      <strong className="fs-5 d-block">S/ 20.90</strong>
                      <small className="text-decoration-line-through text-muted">S/ 29.70</small>
                      <span className="badge bg-danger ms-1">-29%</span>
                    </div>
                    <button className="btn-add-cart" onClick={() => onAddToCart(productoChicharronera)}>
                      <span style={{ fontSize: '24px', lineHeight: '1', fontWeight: 'bold', color: 'white' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-primary rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-primary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </section>

      <section className="promociones container py-5">
        <h3 className="mb-4 fw-bold">LOS MÁS VENDIDOS</h3>
        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 list-unstyled">
          {[1, 2, 3, 4, 5].map((index) => (
            <li className="col" key={index}>
              <article className="product-card h-100 shadow-sm border rounded-3 p-3 position-relative">
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>
                <div className="product-image text-center mb-3">
                  <img src="https://www.bembos.com.pe/media/catalog/product/2/1/2146463725_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2" className="img-fluid" alt="Promo Chicharronera" />
                </div>
                <div className="product-content">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="fw-bold m-0 fs-6">Promo Chicharronera</h4>
                    <button className="btn btn-link p-0 text-danger shadow-none">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                  <p className="text-muted small mb-3">1 Chicharronera regular, 1 papa regular, 1 gaseosa personal...</p>
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto">
                    <div className="price-container">
                      <strong className="fs-5 d-block">S/ 20.90</strong>
                      <small className="text-decoration-line-through text-muted">S/ 29.70</small>
                      <span className="badge bg-danger ms-1">-29%</span>
                    </div>
                    <button className="btn-add-cart" onClick={() => onAddToCart(productoChicharronera)}>
                      <span style={{ fontSize: '24px', lineHeight: '1', fontWeight: 'bold', color: 'white' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-primary rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-primary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </section>

      <section className="container py-5">
        <div className="row mb-5">
          <div className="col-12">
            <article className="banner-eventos rounded-3 overflow-hidden">
              <img src="https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/DESKTOP.webp" alt="Cotiza tus eventos con Bembos" className="img-fluid w-100" />
            </article>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <article className="info-card d-flex align-items-center shadow-sm border rounded-3 overflow-hidden bg-white">
              <div className="card-image w-50">
                <img src="https://www.bembos.com.pe/media/wysiwyg/COBERTURA_BANNER_DESKTOP.png" alt="Zonas de reparto" className="img-fluid h-100 object-fit-cover" />
              </div>
              <div className="card-text w-100 p-4 text-start">
                <h4 className="fw-bold fs-5 text-uppercase">Descubre nuestras zones de reparto</h4>
                <p className="text-muted small">¡Pide y recibe tu pedido ahora mismo!</p>
                <button className="btn btn-primary-bembos rounded-pill px-4 btn-sm">Encuéntralas aquí</button>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article className="info-card d-flex align-items-center shadow-sm border rounded-3 overflow-hidden bg-white">
              <div className="card-image w-50">
                <img src="https://www.bembos.com.pe/media/wysiwyg/LEALTAD_BANNER_DESKTOP.png" alt="Programa de puntos" className="img-fluid h-100 object-fit-cover" />
              </div>
              <div className="card-text w-100 p-4 text-start">
                <h4 className="fw-bold fs-5 text-uppercase">Programa Lealtad</h4>
                <p className="text-muted small">¡Alcanza Destinados y que nadie te pare! Delivery Gratis + Nuggets x4 de regalo.</p>
                <button className="btn btn-primary-bembos rounded-pill px-4 btn-sm">Descúbrelo aquí</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}