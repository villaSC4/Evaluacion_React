import React, { useState } from 'react';
import RegisterModal from '../components/RegisterModal'; 

export default function Login({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    let baseName = email.split('@')[0];
    
    if (baseName.includes('.')) {
      baseName = baseName.split('.')[0];
    }
    
    const cleanName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    
    if (onAuthSuccess) {
      onAuthSuccess({ 
        firstName: cleanName, 
        email: email 
      });
    }
  };

  return (
    <main className="auth-container py-4 py-md-5">
      <div className="container px-4">
        <div className="row justify-content-center g-4 g-md-5">
          
          <div className="col-12 col-md-6 col-lg-5 login-column pe-md-4 pe-lg-5">
            <h2 className="auth-title mb-4 text-uppercase text-center text-md-start fs-4 fs-md-3">Iniciar Sesión</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3 text-start">
                <label className="form-label">Correo electrónico <span className="text-danger">*</span></label>
                <input type="email" className="form-control" placeholder="Ej. nombre@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Contraseña <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Aa12345" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <span className="input-group-text bg-white border-start-0 cursor-pointer" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </span>
                </div>
              </div>
              <div className="mb-4 text-start">
                <a href="#" className="forgot-password">Olvidé mi contraseña</a>
              </div>
              <button type="submit" className="btn btn-auth text-uppercase py-2 py-sm-3">Iniciar sesión</button>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-5 ps-md-4 ps-lg-5 mt-0 mt-md-5 text-start">
            <div className="pt-md-2">
              <h2 className="auth-title mb-4 text-uppercase text-center text-md-start fs-4 fs-md-3">Crear Cuenta</h2>
              <p className="text-muted small mb-4 text-center text-md-start">Crea una y aprovecha los benefits:</p>
              <ul className="benefit-list mb-4 mb-md-5">
                <li>Realiza tus compras de manera más ágil.</li>
                <li>Guarda múltiples direcciones de envío y facturación.</li>
                <li>Realiza el seguimiento a tus compras y revisa tus pedidos realizados.</li>
                <li>Haz una lista de productos favoritos.</li>
              </ul>
              <button type="button" className="btn btn-auth text-uppercase py-2 py-sm-3" onClick={() => setIsRegisterOpen(true)}>
                Crear cuenta
              </button>
            </div>
          </div>

        </div>
      </div>

      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onAuthSuccess={onAuthSuccess} />
    </main>
  );
}