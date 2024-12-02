/* eslint-disable */
import { createContext, useContext, useReducer } from 'react';
import data from '../Data';
import CartReducer from './CartReducer';

// Create the CartContext
const CartContext = createContext();

// Define the CartProvider component
export const CartProvider = ({ children }) => {
  // Retrieve user data from localStorage or set to null
  const user = JSON.parse(localStorage.getItem('user')) || null;

  // Initial state for the cart
  const initialState = {
    products: data,
    cart: [],
    user,
  };

  // Initialize state and dispatch with useReducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access CartContext
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
