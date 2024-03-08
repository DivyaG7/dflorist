// PaymentPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../component/Modal.css';
import '../component/PaymentPage.css';
import { removeItem } from '../redux/reducer/cart';

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
    maxHeight: '180px',
    overflowY: 'auto',
  },
};

export const PaymentPage = () => {
  const { index } = useParams();
  const selectedCartItem = useSelector((state) => state.cart.list[parseInt(index, 10)]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCartItem) {
      setSelectedItems((prevSelectedItems) => {
        const newItems = { ...prevSelectedItems };
        newItems[selectedCartItem.id] = selectedCartItem;
        return newItems;
      });
    }
  }, [selectedCartItem, setSelectedItems]);

  const handleOrderClick = () => {
    console.log('Order placed:', Object.values(selectedItems), selectedPaymentMethod);
    setShowNotification(true);
    setIsModalOpen(true);

    // Dispatch action to remove the selected item from the cart
    if (selectedCartItem) {
      dispatch(removeItem({ index: parseInt(index, 10) }));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/');
  };


  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // if (!selectedCartItem) {
  //   // Handle case where item is not found (e.g., invalid index)
  //   return (
  //     <div className='PaymentPage'>
  //       <h4 className='text-center'>Product is not found</h4>
  //     </div>
  //   );
  // }

  return (
    <div className="container mt-5 cart-section">
      <h2 className="text-center">Payment Page</h2>
      {Object.values(selectedItems).map((item, mapindex) => (
        <div key={mapindex} className="cart-order row mb-4">
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
                  <p className='card-text'>Price: Rs. {calculateTotalPrice(item).toFixed(2)}</p>
                </div>
                <div className='cart-buttons'>
                  <div>
                    <p className='mx-2'>Quantity: {item.quantity}</p>
                    <h5>Select Payment Method</h5>
                    <select className='btn btn-cart mt-2' onChange={(e) => setSelectedPaymentMethod(e.target.value)}>
                      <option value="creditCard">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash on delivery</option>
                      <option value="gpay">Gpay</option>
                    </select>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card h-100 bg'>
              <button className="btn btn-cart mt-2 me-4 ms-4" onClick={handleOrderClick}>
                Place Order
              </button>
              {showNotification && (
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleModalClose}
                  contentLabel="Place Order Modal"
                  style={customModalStyles}
                  id="unique-modal-id"
                >
                  <p className='success-msg text-center'>Order placed successfully! Thank you for your purchase.</p>
                  <button className='close-popup' onClick={handleModalClose}>Close</button>
                </Modal>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
