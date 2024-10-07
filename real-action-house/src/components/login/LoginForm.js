import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../loadingSpiner/loadSpiner';

const LoginForm = ({ email, password, setEmail, setPassword, handleSubmit, loading }) => (
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded-lg p-2 w-full"
        disabled={loading} 
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-bold mb-2">Senha:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-300 rounded-lg p-2 w-full"
        disabled={loading} 
      />
    </div>
    <button
      type="submit"
      className={`bg-black text-white rounded-lg py-2 px-4 w-full hover:bg-gray-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? <LoadingSpinner /> : 'Login'} 
    </button>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool, 
};

export default LoginForm;
