import React from 'react';
import useRegister from '../../hooks/useRegister'; 
import '../register/Register.css';

const Register = () => {
  const {
    fields, 
    handleFieldChange, 
    handleSubmit,
    message,
    error,
  } = useRegister();

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleFieldChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
    </div>
  );
}

export default Register;
