import React, { useState } from 'react'
import '../pages/Contact.css'
import Modal from 'react-modal';
import '../pages/Contact.css';

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

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRefreshClick = () => {
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      setSuccessMessage('Please type your details in all fields.');
    } else {
      setSuccessMessage('Your Message has been sent successfully!');
    }
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: '',
    });
  };

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <div className='content'>
        <div className='left-content'>
          <ul>
            <li>
              <h4>Our office address</h4>
              <p>area, city, landmark, pincode</p>
            </li>
            <li>
              <h4>General Enquiries</h4>
              <p>sample@example.ecom</p>
            </li>
            <li>
              <h4>Call Us</h4>
              <p>+91-1111111111</p>
            </li>
            <li>
              <h4>Our Timing</h4>
              <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
            </li>
          </ul>
        </div>
        <div className='right-content'>
          <div>
            <input type='text' name='name' placeholder='YOUR NAME' value={formData.name}
              onChange={handleInputChange}
              required />
          </div>
          <div>
            <input type='email' name='email' placeholder='Your EMAIL' value={formData.email}
              onChange={handleInputChange}
              required />
          </div>
          <div>
            <input type='tel' name='contact' placeholder='YOUR CONTACT' value={formData.contact}
              onChange={handleInputChange}
              required />
          </div>
          <div>
            <textarea type='text' name='message' placeholder='Message here....' value={formData.message}
              onChange={handleInputChange}
              required />
          </div>
          <div>
            <button onClick={handleRefreshClick} type='submit' className='button'>Submit</button>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          contentLabel='Contact Form Modal'
          style={customModalStyles}
          id="contact-modal-id"
        >
          <p className='success-msg'>{successMessage}</p>
          <button className='close-popup' onClick={handleModalClose}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  )
}

