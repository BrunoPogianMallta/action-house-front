import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, setEmail, setPassword, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="login-form">
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-control"
      />
    </div>
    <button type="submit" className="submit-button">Login</button>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
