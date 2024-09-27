import React from 'react';
import useRegister from '../../hooks/useRegister'; 

const Register = () => {
  const {
    fields, 
    handleFieldChange, 
    handleSubmit,
    message,
    error,
  } = useRegister();

  return (
    <div className="register-container p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="register-form space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldChange}
            required
            className="form-control w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            required
            className="form-control w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleFieldChange}
            required
            className="form-control w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Senha:</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
            required
            className="form-control w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="submit-button w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition duration-200">Cadastrar</button>
      </form>
      {message && <p className="message text-green-600 mt-4">{message}</p>}
      {error && <p className="message text-red-600 mt-4">{error}</p>}
    </div>
  );
}

export default Register;
