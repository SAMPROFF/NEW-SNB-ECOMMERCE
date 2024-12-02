const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case 'INCREMENT_CART_QTY': {
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + action.payload.val }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case 'DECREMENT_CART_QTY': {
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: Math.max(item.qty - action.payload.val, 0) } // Prevent qty from going below 0
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case 'SEARCH_PRODUCT': {
      const filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, products: filteredProducts };
    }

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export default CartReducer;
