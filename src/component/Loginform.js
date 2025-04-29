import React, { useState } from 'react';
import './LoginForm.css'; // We'll style it like your provided image

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation for email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    let errors = {};
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({
        email,
        password,
      });
      alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <div className="toggle-btns">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {isLogin && (
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        )}
        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <div className="signup-link">
        {isLogin ? (
          <>
            Not a member? <a href="#">Signup now</a>
          </>
        ) : (
          <>
            Already a member? <a href="#">Login here</a>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
