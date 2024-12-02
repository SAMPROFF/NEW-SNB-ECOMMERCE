// import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ products }) => (
  <div className="card-container">
    {products.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </div>
);

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
