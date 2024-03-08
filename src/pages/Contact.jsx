import React from 'react'
import '../pages/Contact.css'

export const Contact = () => {
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
            <input type='text' placeholder='YOUR NAME' />
          </div>
          <div>
            <input type='text' placeholder='Your EMAIL' />
          </div>
          <div>
            <input type='integar' placeholder='YOUR CONTACT' />
          </div>
          <div>
            <textarea type='text' placeholder='Message here....' />
          </div>
          <div>
            <button type='submit' className='button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

