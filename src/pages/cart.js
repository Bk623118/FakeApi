// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , remove } from '../productSlice'; // adjust path

const Cart = () => {
  // Ensure cartItems is always an array to prevent reduce error
  const cartItems = useSelector((state) => state.cart?.items) || [];
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3 className="item-name">{item.title}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <p className="item-category">
                    Category: {item.category?.name || 'Uncategorized'}
                  </p>
                </div>

                <div className="item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(decrement(item.id))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(increment(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>$5.99</span>
            </div>
            <div className="total-row total-final">
              <span>Total:</span>
              <span>${(totalPrice + 5.99).toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
