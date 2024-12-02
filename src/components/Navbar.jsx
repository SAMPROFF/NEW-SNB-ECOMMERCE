/* eslint-disable */
import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
// import { CartState } from '../ContextFolder/CartContext';
import { useCart } from '../ContextFolder/CartContext';

import Button from './Button';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state: { cart = [], user = null } = {} } = useCart() || {};
  const [credential, setCredential] = useState(user);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedin');
    setCredential(null); // Clear the credential state
    navigate('/login');
  };

  // Determine navigation links based on the current route
  const renderAuthLinks = () => {
    if (location.pathname === '/register') {
      return (
        <div className="nav-reg">
          <p>Already have an account?</p>
          <Link to="/login">
            <Button name="Sign in" />
          </Link>
        </div>
      );
    }

    if (location.pathname === '/login') {
      return (
        <div className="nav-reg">
          <p>New to AzubiShop?</p>
          <Link to="/register">
            <Button name="Sign up" />
          </Link>
        </div>
      );
    }

    return (
      <>
        <div className="navbar-links">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/cart">
            <span className="cart-badge">
              Cart {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </span>
          </NavLink>
        </div>
        <div className="navbar-btn">
          {credential ? (
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <Button name="Login" />
            </Link>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="navbar-nav">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Azubi logo" />
        </Link>
      </div>
      {renderAuthLinks()}
    </div>
  );
};

export default Navbar;
