import React from 'react';

export default function Login() {
  return (
    <main className="auth-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          

          <div className="col-md-5 login-column px-lg-5">
            <h2 className="auth-title mb-4 text-uppercase text-center text-md-start">Iniciar Sesión</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              
              <div className="mb-3">
                <label className="form-label">Correo electrónico <span className="text-danger">*</span></label>
                <input type="email" className="form-control" placeholder="Ej. nombre@mail.com" required />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Contraseña <span className="text-danger">*</span></label>

                <div className="input-group">
                  <input type="password" className="form-control" placeholder="Aa12345" required />
                  <span className="input-group-text bg-white border-start-0"><i className="bi bi-eye"></i></span>
                </div>
              </div>
              
              <div className="mb-4">
                <a href="#" className="forgot-password">Olvidé mi contraseña</a>
              </div>
              
              <button type="submit" className="btn btn-auth text-uppercase">Iniciar sesión</button>
              
            </form>
          </div>


          <div className="col-md-5 px-lg-5 mt-5 mt-md-0">
            <h2 className="auth-title mb-4 text-uppercase text-center text-md-start">Crear Cuenta</h2>
            <p className="text-muted small mb-4">Crea una y aprovecha los beneficios:</p>
            
            <ul className="benefit-list mb-5">
              <li>Realiza tus compras de manera más ágil.</li>
              <li>Guarda múltiples direcciones de envío y facturación.</li>
              <li>Realiza el seguimiento a tus compras y revisa tus pedidos realizados.</li>
              <li>Haz una lista de productos favoritos.</li>
            </ul>
            
            <button className="btn btn-auth text-uppercase">Crear cuenta</button>
          </div>

        </div>
      </div>
    </main>
  );
}