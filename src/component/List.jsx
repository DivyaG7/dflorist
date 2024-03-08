import React, { useState, useEffect, useCallback } from 'react';
import '../component/List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal'
import '../component/Modal.css'

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1000,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'darkorchid',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px', 
    width: '100%',
    maxHeight: '150px', 
    overflowY: 'auto',
  },
};

export const List = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.list);
  const [isModalOpen, setModalOpen] = useState(false);
  

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
    setModalOpen(true);
    if (displayText === 'Go to Cart') {
      navigate('/cart');
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <div className='card m-2' id='card-style' >
      <div className='mt-2 zoom-image-container'>
        <img className='zoom-image' src={props.image} alt={props.name} />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <h6 className='mt-2'>price: {`Rs. ${props.price}`}</h6>
      </div>
      <div>
        <button className='btn btn-cart mb-4' onClick={handleCombinedClick}>{displayText}</button>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Item Added Modal"
        style={customModalStyles}
        id="list-modal-id"
      >
        <p className='success-msg'>Item successfully added to cart</p>
        <button className='close-popup' onClick={handleModalClose}>Close</button>
      </Modal>
      </div>
    </div>
  );
};
