import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white pt-5 pb-3 border-top w-100">
      <div className="container">
        <div className="row g-4">
          
          <div className="col-lg-3 col-md-6 text-start">
            <div className="footer-brand mb-4">
              <img src="https://www.bembos.com.pe/static/version1776085287/frontend/Ngr/bembos/es_PE/images/logo.svg" alt="Bembos"  className="img-fluid mb-3" style={{ maxHeight: '60px' }}/>
              <p className="fw-bold mb-2">Síguenos en</p>
              <div className="d-flex gap-2">
                <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              </div>

            </div>
          </div>


          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="fw-bold mb-3">Nuestros Productos</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Promociones</a></li>
              <li><a href="#">Combos</a></li>
              <li><a href="#">Hamburguesas</a></li>
              <li><a href="#">Pollo</a></li>
              <li><a href="#">Complementos</a></li>
              <li><a href="#">Menus</a></li>
              <li><a href="#">Helados</a></li>
              <li><a href="#">Bebidas</a></li>
              <li><a href="#">Loncheritas</a></li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="fw-bold mb-3">Ayuda</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Comprobante electrónico</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Términos y condiciones de promociones</a></li>
              <li><a href="#">Políticas de datos personales</a></li>
              <li><a href="#">Derechos Arco</a></li>
              <li><a href="#">Política de cookies</a></li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-6 text-start">
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Libro de Reclamaciones</h5>
              <a href="#">
                <img src="https://www.bembos.com.pe/static/version1776085287/frontend/Ngr/bembos/es_PE/images/libro-de-reclamaciones.jpg" alt="Libro de Reclamaciones" className="img-fluid" style={{ maxHeight: '50px' }}/>
              </a>
            </div>
            
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Métodos de Pago</h5>
              <div className="d-flex gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhfgW6C_B1NEFuFxX0PaXF1AmC6dgJ_F9jw&s" alt="Visa" width="40" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SHuPLJLGPPdr-mIWoQvR1qDRK9M4UAbMoQ&s" alt="Mastercard" width="40" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1280px-American_Express_logo_%282018%29.svg.png" alt="Amex" width="40" />
              </div>
            </div>

            <div>
              <h5 className="fw-bold mb-3">Bembos App</h5>
              <div className="d-flex flex-column gap-2">
                <a href="#">
                  <img src="https://storage.googleapis.com/support-kms-prod/dCVdVst3A3cmbTkiGoxcUJZq0orhKw4LPDeH" alt="Google Play" width="120" />
                </a>
              </div>
            </div>
          </div>

        </div>


        <div className="row mt-5 pt-3 border-top">
          <div className="col-md-12 text-start">
            <p className="text-muted small">
              © 2026 Todos los derechos reservados. <span className="fw-bold">Developed by Raquel Villafuerte</span>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}