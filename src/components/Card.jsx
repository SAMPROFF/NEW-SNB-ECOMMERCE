// import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Card = ({ item }) => (
  <div className="card">
    <div className="card-image">
      <img src={item.imgUrl} alt={item.name} />
    </div>

    <div className="card-content">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>

    <div className="card-footer">
      <Link to={`/product/${item.id}`}>
        <Button name="Place Order" />
      </Link>
      <span>${item.price}</span>
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
