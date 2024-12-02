import { createContext, useContext, useReducer } from 'react';
import data from '../Data';
import CartReducer from './CartReducer.jsx';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Define the initial state for the cart context
  const initialState = {
    products: data,
    cart: [],
    user: user || null,
  };

  // Set up reducer with initial state
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Prop validation for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);

  // Ensure the context is being used within the provider
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
