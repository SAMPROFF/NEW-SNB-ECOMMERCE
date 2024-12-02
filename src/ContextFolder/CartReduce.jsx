import data from '../Data';

const user = JSON.parse(localStorage.getItem('user'));

export const initialCartState = {
  products: data,
  cart: [],
  user: user || null,
};
