// Define the CartReducer function to manage cart state changes
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Add the payload to the cart with an initial quantity of 1
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }

    case 'REMOVE_FROM_CART': {
      // Remove the item with the matching ID from the cart
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    }

    case 'INCREMENT_CART_QTY': {
      // Increment the quantity of the specified item in the cart
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.val } : item
        ),
      };
    }

    case 'DECREMENT_CART_QTY': {
      // Decrement the quantity of the specified item in the cart
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: Math.max(item.qty - action.payload.val, 0) } : item
        ),
      };
    }

    case 'SEARCH_PRODUCT': {
      // Filter products based on the search query
      const query = action.payload.toLowerCase();
      return {
        ...state,
        products: state.products.filter(product => product.title.toLowerCase().includes(query)),
      };
    }

    default: {
      // Return the current state for unrecognized actions
      return state;
    }
  }
};

export default CartReducer;
