import React, { useState, useEffect, useCallback } from 'react';
import '../component/List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
import { useNavigate } from "react-router-dom";

export const List = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.list);
  

  const getInitialDisplayText = useCallback(() => {
    return cartItems.some((item) => item.id === props.id) ? 'Go to Cart' : 'Add to Cart';
  }, [cartItems, props.id]);

  const [displayText, setDisplayText] = useState(getInitialDisplayText);
  
  useEffect(() => {
    setDisplayText(getInitialDisplayText());
  }, [cartItems, getInitialDisplayText]);

  const addToCart = () => {
    dispatch(addItem(props));
    setDisplayText('Go to Cart');
  };

  const handleCombinedClick = () => {
    addToCart();
    alert("Item successfully added to cart");
    if (displayText === 'Go to Cart') {
      navigate('/cart');
    }
  };

  return (
    <div className='card m-2' id='card-style' >
      <div className='mt-2'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <h6 className='mt-2'>price: {`$${props.price}`}</h6>
      </div>
      <div>
        <button className='btn btn-cart mb-4' onClick={handleCombinedClick}>{displayText}</button>
      </div>
    </div>
  );
};
