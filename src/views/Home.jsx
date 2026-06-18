import React, { useState, useRef, useEffect } from 'react';
import { productsData } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function Home({ onAddToCart }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.bootstrap && document.getElementById('heroBembos')) {
      const carouselEl = document.getElementById('heroBembos');
      
      const bootstrapCarousel = new window.bootstrap.Carousel(carouselEl, {
        interval: 1500, 
        ride: 'carousel',
        wrap: true 
      });

      return () => {
        bootstrapCarousel.dispose();
      };
    }
  }, []);
  
  const [promosList, setPromosList] = useState(() => 
    productsData.filter(p => p.category === 'inicio-promos' || p.category === 'hamburguesas')
  );

  const [masVendidosList, setMasVendidosList] = useState(() => 
    productsData.filter(p => p.category === 'promos-para-2' || p.category === 'hamburguesas')
  );

  const promosRef = useRef(null);
  const masVendidosRef = useRef(null);

  const isAnimating = useRef(false);

  const handleRotate = (direction, ref, setList) => {
    if (!ref.current || isAnimating.current) return;
    isAnimating.current = true;

    const container = ref.current;
    const cardWidth = container.firstChild.offsetWidth;
    const gap = 24; 
    const totalScroll = cardWidth + gap;

    if (direction === 'right') {
      container.scrollTo({
        left: totalScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setList((prevList) => {
          const list = [...prevList];
          const first = list.shift();
          list.push(first);
          return list;
        });
        container.scrollLeft = 0;
        isAnimating.current = false;
      }, 400); 

    } else {
      setList((prevList) => {
        const list = [...prevList];
        const last = list.pop();
        list.unshift(last);
        return list;
      });
      container.scrollLeft = totalScroll;

      setTimeout(() => {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
          isAnimating.current = false;
        }, 400);
      }, 10);
    }
  };

  return (
    <main style={{ backgroundColor: '#f4f6f9' }}>
      <section className="container-fluid p-0">
        <div id="heroBembos" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/DESKTOP_5.webp" className="d-block w-100 banner-img" alt="Sorteo Shakira" />
            </div>
            <div className="carousel-item">
              <img src="https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/DESKTOP_24_.webp" className="d-block w-100 banner-img" alt="Promo Bembos" />
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
        <div className="row justify-content-center g-4">
          
          <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
            <div className="category-card cursor-pointer" onClick={() => navigate('/promos')} style={{ cursor: 'pointer' }}>
              <div className="category-btn">Hamburguesas</div>
              <div className="category-img-container">
                <img src="https://www.bembos.com.pe/media/catalog/product/2/1/2146463859_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg" className="img-fluid" alt="Hamburguesas" />
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
            <div className="category-card cursor-pointer" onClick={() => navigate('/combos')} style={{ cursor: 'pointer' }}>
              <div className="category-btn">Combos</div>
              <div className="category-img-container">
                <img src="https://www.bembos.com.pe/media/catalog/product/_/c/_chicharronera_med_papas_med_gaseosa_1000x1000_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2" className="img-fluid" alt="Combo" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="promociones container py-5">
        <h2 className="text-center fw-black text-uppercase mb-1" style={{ color: '#002395', letterSpacing: '-0.5px' }}>Las mejores hamburguesas</h2>
        <h3 className="mb-4 fw-black text-start fs-5" style={{ color: '#333' }}>PROMOCIONES</h3>

        <div 
          ref={promosRef}
          className="row flex-nowrap g-3 list-unstyled overflow-hidden pb-4 m-0" 
        >
          {promosList.map((product) => ( 
            <div 
              className="col-9 col-sm-6 col-md-4 col-lg-3 col-xl-2.4 flex-shrink-0" 
              key={product.id}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <article className="product-card h-100 shadow-sm border-0 rounded-4 p-3 d-flex flex-column justify-content-between position-relative bg-white transition-all" style={{ borderRadius: '16px' }}>
                <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-2 py-1 fw-bold text-uppercase" style={{ zIndex: 10, fontSize: '0.65rem', borderRadius: '4px' }}>Nuevo</span>
                
                <div className="product-image text-center mb-2 pt-2" style={{ overflow: 'visible' }}>
                  <img src={product.image} className="img-fluid transition-all" alt={product.name} style={{ height: '160px', width: '100%', objectFit: 'contain', transform: 'scale(1.05)' }} />
                </div>

                <div className="product-content d-flex flex-column flex-grow-1 justify-content-between pt-2">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h4 className="fw-bold m-0 text-start text-dark text-truncate" style={{ fontSize: '0.95rem', maxWidth: '85%' }}>{product.name}</h4>
                      <button className="btn btn-link p-0 text-muted shadow-none hover-danger">
                        <i className="bi bi-heart fs-5"></i>
                      </button>
                    </div>
                    <p className="text-muted text-start small mb-3 lh-sm" style={{ fontSize: '0.75rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '34px' }}>{product.description}</p>
                  </div>
                  
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto pt-2 border-top border-light">
                    <div className="price-container text-start">
                      <strong className="d-block" style={{ fontSize: '1.2rem', color: '#333', fontWeight: '800' }}>S/ {product.price.toFixed(2)}</strong>
                      {product.oldPrice && (
                        <div className="d-flex align-items-center gap-1">
                          <small className="text-decoration-line-through text-muted" style={{ fontSize: '0.7rem' }}>S/ {product.oldPrice.toFixed(2)}</small>
                          <span className="badge bg-danger p-1 fw-bold" style={{ fontSize: '0.6rem', borderRadius: '4px' }}>-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span>
                        </div>
                      )}
                    </div>
                    <button className="btn-add-cart position-static" onClick={() => onAddToCart(product)} style={{ width: '36px', height: '36px', minWidth: '36px', borderRadius: '50%', backgroundColor: '#002395', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,35,149,0.2)' }}>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', lineHeight: '1' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button className="btn btn-outline-primary rounded-circle p-0 d-flex align-items-center justify-content-center" onClick={() => handleRotate('left', promosRef, setPromosList)} style={{ width: '40px', height: '40px', borderColor: '#002395', color: '#002395', backgroundColor: 'white' }}>
            <i className="bi bi-arrow-left fs-5"></i>
          </button>
          <button className="btn btn-outline-primary rounded-circle p-0 d-flex align-items-center justify-content-center" onClick={() => handleRotate('right', promosRef, setPromosList)} style={{ width: '40px', height: '40px', borderColor: '#002395', color: '#002395', backgroundColor: 'white' }}>
            <i className="bi bi-arrow-right fs-5"></i>
          </button>
        </div>
      </section>

      <section className="promociones container py-5">
        <h3 className="mb-4 fw-black text-start fs-5" style={{ color: '#333' }}>LOS MÁS VENDIDOS</h3>
        
        <div 
          ref={masVendidosRef}
          className="row flex-nowrap g-3 list-unstyled overflow-hidden pb-4 m-0" 
        >
          {masVendidosList.map((product) => (
            <div 
              className="col-9 col-sm-6 col-md-4 col-lg-3 col-xl-2.4 flex-shrink-0" 
              key={product.id}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <article className="product-card h-100 shadow-sm border-0 rounded-4 p-3 d-flex flex-column justify-content-between position-relative bg-white transition-all" style={{ borderRadius: '16px' }}>
                {product.isNew && <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-2 py-1 fw-bold text-uppercase" style={{ zIndex: 10, fontSize: '0.65rem', borderRadius: '4px' }}>Nuevo</span>}
                
                <div className="product-image text-center mb-2 pt-2" style={{ overflow: 'visible' }}>
                  <img src={product.image} className="img-fluid transition-all" alt={product.name} style={{ height: '160px', width: '100%', objectFit: 'contain', transform: 'scale(1.05)' }} />
                </div>

                <div className="product-content d-flex flex-column flex-grow-1 justify-content-between pt-2">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h4 className="fw-bold m-0 text-start text-dark text-truncate" style={{ fontSize: '0.95rem', maxWidth: '85%' }}>{product.name}</h4>
                      <button className="btn btn-link p-0 text-muted shadow-none hover-danger">
                        <i className="bi bi-heart fs-5"></i>
                      </button>
                    </div>
                    <p className="text-muted text-start small mb-3 lh-sm" style={{ fontSize: '0.75rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '34px' }}>{product.description}</p>
                  </div>
                  
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto pt-2 border-top border-light">
                    <div className="price-container text-start">
                      <strong className="d-block" style={{ fontSize: '1.2rem', color: '#333', fontWeight: '800' }}>S/ {product.price.toFixed(2)}</strong>
                      {product.oldPrice && (
                        <div className="d-flex align-items-center gap-1">
                          <small className="text-decoration-line-through text-muted" style={{ fontSize: '0.7rem' }}>S/ {product.oldPrice.toFixed(2)}</small>
                          <span className="badge bg-danger p-1 fw-bold" style={{ fontSize: '0.6rem', borderRadius: '4px' }}>-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span>
                        </div>
                      )}
                    </div>
                    <button className="btn-add-cart position-static" onClick={() => onAddToCart(product)} style={{ width: '36px', height: '36px', minWidth: '36px', borderRadius: '50%', backgroundColor: '#002395', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,35,149,0.2)' }}>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', lineHeight: '1' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button className="btn btn-outline-primary rounded-circle p-0 d-flex align-items-center justify-content-center" onClick={() => handleRotate('left', masVendidosRef, setMasVendidosList)} style={{ width: '40px', height: '40px', borderColor: '#002395', color: '#002395', backgroundColor: 'white' }}>
            <i className="bi bi-arrow-left fs-5"></i>
          </button>
          <button className="btn btn-outline-primary rounded-circle p-0 d-flex align-items-center justify-content-center" onClick={() => handleRotate('right', masVendidosRef, setMasVendidosList)} style={{ width: '40px', height: '40px', borderColor: '#002395', color: '#002395', backgroundColor: 'white' }}>
            <i className="bi bi-arrow-right fs-5"></i>
          </button>
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