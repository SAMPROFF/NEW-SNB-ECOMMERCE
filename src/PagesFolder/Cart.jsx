/* eslint-disable */
import { createContext, useContext, useReducer } from 'react';
import data from '../Data';
import CartReducer from './CartReducer';

// Create the CartContext
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user')) || null;

  // Initial state for the context
  const initialState = {
    products: data,
    cart: [],
    user,
  };

  // Reducer to manage state updates
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to access the CartContext
export const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Cart must be used within a CartProvider');
  }

  return context;
};

/* eslint-enable */
