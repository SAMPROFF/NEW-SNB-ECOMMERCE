/* eslint-disable */
import React from 'react';
import { useCart } from '../ContextFolder/CartContext';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';

const Home = () => {
  // Retrieve products from CartState with default fallback
  const {
    state: { products = [] } = {},
  } = useCart() || {};

  // Log products for debugging purposes
  console.debug('Home Component - Products:', products);

  return (
    <div className="container">
      {/* Render the SearchBar and CardList components */}
      <SearchBar products={products} />
      <CardList products={products} />
    </div>
  );
};

export default Home;
