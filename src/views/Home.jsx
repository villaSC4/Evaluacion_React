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
    <main>
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
        <div className="category-nav d-flex justify-content-center gap-4 flex-wrap">
          
          <div className="category-card cursor-pointer" onClick={() => navigate('/promos')} style={{ cursor: 'pointer' }}>
            <div className="category-btn">Hamburguesas</div>
            <div className="category-img-container">
              <img src="https://www.bembos.com.pe/media/catalog/product/2/1/2146463859_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg" alt="Hamburguesas" />
            </div>
          </div>

          <div className="category-card cursor-pointer" onClick={() => navigate('/combos')} style={{ cursor: 'pointer' }}>
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

        <div 
          ref={promosRef}
          className="d-flex gap-4 list-unstyled overflow-hidden pb-3" 
        >
          {promosList.map((product) => ( 
            <div 
              className="flex-shrink-0" 
              key={product.id}
              style={{ width: 'calc((100% - 64px) / 5)' }}
            >
              <article className="product-card h-100 shadow-sm border rounded-3 p-3 d-flex flex-column justify-content-between position-relative bg-white">
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>
                <div className="product-image text-center mb-3">
                  <img src={product.image} className="img-fluid" alt={product.name} style={{ maxHeight: '140px', objectFit: 'contain' }} />
                </div>
                <div className="product-content d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h4 className="fw-bold m-0 fs-6 text-start">{product.name}</h4>
                      <button className="btn btn-link p-0 text-danger shadow-none">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                    <p className="text-muted text-start small mb-3 lh-sm" style={{ fontSize: '0.75rem' }}>{product.description}</p>
                  </div>
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto pt-2">
                    <div className="price-container text-start">
                      <strong className="fs-5 d-block">S/ {product.price.toFixed(2)}</strong>
                    </div>
                    <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
                      <span style={{ fontSize: '24px', lineHeight: '1', fontWeight: 'bold', color: 'white' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-primary rounded-circle" onClick={() => handleRotate('left', promosRef, setPromosList)} style={{ borderColor: '#002855', color: '#002855' }}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-primary rounded-circle" onClick={() => handleRotate('right', promosRef, setPromosList)} style={{ borderColor: '#002855', color: '#002855' }}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>

      <section className="promociones container py-5">
        <h3 className="mb-4 fw-bold">LOS MÁS VENDIDOS</h3>
        
        <div 
          ref={masVendidosRef}
          className="d-flex gap-4 list-unstyled overflow-hidden pb-3" 
        >
          {masVendidosList.map((product) => (
            <div 
              className="flex-shrink-0" 
              key={product.id}
              style={{ width: 'calc((100% - 64px) / 5)' }}
            >
              <article className="product-card h-100 shadow-sm border rounded-3 p-3 d-flex flex-column justify-content-between position-relative bg-white">
                {product.isNew && <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>}
                <div className="product-image text-center mb-3">
                  <img src={product.image} className="img-fluid" alt={product.name} style={{ maxHeight: '140px', objectFit: 'contain' }} />
                </div>
                <div className="product-content d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h4 className="fw-bold m-0 fs-6 text-start">{product.name}</h4>
                      <button className="btn btn-link p-0 text-danger shadow-none">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                    <p className="text-muted text-start small mb-3 lh-sm" style={{ fontSize: '0.75rem' }}>{product.description}</p>
                  </div>
                  <div className="product-action d-flex align-items-center justify-content-between mt-auto pt-2">
                    <div className="price-container text-start">
                      <strong className="fs-5 d-block">S/ {product.price.toFixed(2)}</strong>
                      {product.oldPrice && <small className="text-decoration-line-through text-muted">S/ {product.oldPrice.toFixed(2)}</small>}
                    </div>
                    <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
                      <span style={{ fontSize: '24px', lineHeight: '1', fontWeight: 'bold', color: 'white' }}>+</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-primary rounded-circle" onClick={() => handleRotate('left', masVendidosRef, setMasVendidosList)} style={{ borderColor: '#002855', color: '#002855' }}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-primary rounded-circle" onClick={() => handleRotate('right', masVendidosRef, setMasVendidosList)} style={{ borderColor: '#002855', color: '#002855' }}>
            <i className="bi bi-arrow-right"></i>
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