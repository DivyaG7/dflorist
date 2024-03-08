import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/reducer/cart';
import '../pages/cart.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  const uniqueCartItems = Array.from(new Set(cartItems.map((item) => item.id)))
    .map((id) => cartItems.find((item) => item.id === id));

  const incrementItem = (index) => {
    dispatch(incrementQuantity({index}));
  };

  const decrementItem = (index) => {
    dispatch(decrementQuantity({index}));
  };

  const removeCartItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Shopping Cart</h2>
      <div className="d-flex flex-column">
        {uniqueCartItems.map((item, index) => (
          <div key={index} className="cart-order row mb-4">
            <div className='col-md-4'>
              <div className='card h-100 bg'>
                <section className='section-first'>
                  <img className='card-img-top' src={item.image} alt={item.name} />
                </section>
              </div>
            </div> 
            <div className='col-md-4'>
              <div className='card h-100 bg'>
                <section className='section-second'>
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>Price: ${item.price}</p>
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
                  <button className='btn btn-cart mt-2 mb-2'>Order Now</button>
                  <button className='btn btn-cart mt-2' onClick={() => removeCartItem(index)}>Remove</button>
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
