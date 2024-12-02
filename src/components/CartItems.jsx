import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

// Reusable ButtonCart component
const ButtonCart = ({ faIcon, onClick }) => (
  <button
    className="btn-cart"
    onClick={onClick}
    style={{
      border: 'none',
      background: '#fff',
      padding: '5px',
      cursor: 'pointer',
    }}
  >
    {faIcon}
  </button>
);

// CartItems component for displaying details of a single cart item
const CartItems = ({ item, dispatch }) => {
  const totalItem = item.qty * item.price; // Calculate the total price for the item

  const handleQtyIncrement = () =>
    dispatch({
      type: 'INCREMENT_CART_QTY',
      payload: { id: item.id, val: 1 },
    });

  const handleQtyDecrement = () => {
    if (item.qty > 0) {
      dispatch({
        type: 'DECREMENT_CART_QTY',
        payload: { id: item.id, val: 1 },
      });
    }
  };

  const handleDelete = () =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item.id,
    });

  return (
    <tr>
      <td className="cart-item-details">
        <img src={item.imgUrl} alt={item.title} width="40" height="40" />
        <span>{item.title}</span>
      </td>
      <td>${item.price}</td>
      <td className="add-btn">
        <ButtonCart faIcon={<FaMinus />} onClick={handleQtyDecrement} />
        <span className="item-qty">{item.qty}</span>
        <ButtonCart faIcon={<FaPlus />} onClick={handleQtyIncrement} />
      </td>
      <td>${totalItem}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartItems;
