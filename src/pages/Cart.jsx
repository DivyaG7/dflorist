// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/reducer/cart';
import { Link } from 'react-router-dom';
import '../pages/cart.css'

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  const incrementItem = (index) => {
    dispatch(incrementQuantity({ index }));
  };

  const decrementItem = (index) => {
    dispatch(decrementQuantity({ index }));
  };

  const removeCartItem = (index) => {
    dispatch(removeItem({ index }));
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="container mt-5 cart-section">
      <h2 className="text-center">Shopping Cart</h2>
      <div className="d-flex flex-column">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-order row mb-4">
              <div className='col-md-4'>
                <div className='card h-100 bg'>
                  <section className='section-first zoom-image-container'>
                    <img className='card-img-top zoom-image' src={item.image} alt={item.name} />
                  </section>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card h-100 bg'>
                  <section className='section-second'>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <p className='card-text'>Price: Rs. {calculateTotalPrice(item).toFixed(2)}</p>
                    </div>
                    <div className='cart-buttons'>
                      <button className='btn btn-cart' onClick={() => incrementItem(index)}>+</button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button className='btn btn-cart' onClick={() => decrementItem(index)}>-</button>
                    </div>
                  </section>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card h-100 bg'>
                  <section className='section-third d-flex flex-column justify-content-between'>
                    <Link className='btn btn-cart mt-2 mb-2' to={`/PaymentPage/${index}`}>Order Now</Link>
                    <button className='btn btn-cart mt-2' onClick={() => removeCartItem(index)}>Remove</button>
                  </section>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <a href="/">Go to home page</a>
          </div>
        )}
      </div>
    </div>
  );
};
