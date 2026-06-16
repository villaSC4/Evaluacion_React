import React, { useState } from 'react';

export default function RegisterModal({ isOpen, onClose, onAuthSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    console.log("Datos de registro enviados:", formData);
    
    if (onAuthSuccess) {
      onAuthSuccess({
        firstName: formData.firstName,
        email: formData.email
      });
    }

    onClose(); 
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 border-0 rounded-3 shadow">
          
          <div className="modal-header border-0 pb-0 justify-content-between align-items-center">
            <h3 className="fw-bold text-uppercase m-0 fs-4" style={{ color: '#002855' }}>Crea tu Cuenta</h3>
            <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
          </div>

          <div className="modal-body text-start">
            <form onSubmit={handleSubmit}>
              
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold">Nombres *</label>
                  <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold">Apellidos *</label>
                  <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Celular *</label>
                <input type="tel" name="phone" className="form-control" placeholder="987654321" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Correo electrónico *</label>
                <input type="email" name="email" className="form-control" placeholder="ejemplo@correo.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Contraseña *</label>
                <input type="password" name="password" className="form-control" placeholder="Mínimo 6 caracteres" value={formData.password} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Confirmar Contraseña *</label>
                <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
              </div>

              <div className="mb-4 form-check">
                <input type="checkbox" name="terms" className="form-check-input" id="checkTerms" checked={formData.terms} onChange={handleChange} required />
                <label className="form-check-label text-muted small" htmlFor="checkTerms">
                  Acepto las Políticas de datos personales y Términos y condiciones. *
                </label>
              </div>

              <button type="submit" className="btn btn-auth text-uppercase w-100 py-2 fw-bold text-white" style={{ backgroundColor: '#002855' }}>
                Registrarme
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}