
import { CartState } from '../context/CartContext';
import Button from '../components/Button';
import CartItems from '../components/CartItems';

function Cart() {
  // Retrieve cart state and dispatch function from CartContext
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // Calculate the total price of items in the cart
  const calculateTotal = () =>
    cart?.reduce((total, item) => total + parseFloat(item.price) * item.qty, 0) || 0;

  const totalAmount = calculateTotal();

  return (
    <div className="cart-table">
      <h1>Shopping Cart</h1>

      {cart && cart.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItems key={item.id} item={item} dispatch={dispatch} />
              ))}
            </tbody>
          </table>

          {/* Display total amount and checkout button */}
          <div className="cart-total">
            <span>
              <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
            </span>
            <Button name="Checkout" />
          </div>
        </>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </div>
  );
}

export default Cart;
