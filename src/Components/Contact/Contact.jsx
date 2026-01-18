import React, { useState } from 'react'
import './Contact.css'
import done from '../../assets/seal-check.png'

const Contact = () => {

   const [showPopup, setShowPopup] = useState(false);

   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
      setShowPopup(true);
    setResult("Message Sent Successfully");
    const formData = new FormData(event.target);
    formData.append("access_key", "e76e9c50-f3b6-4967-869b-40f956025a95");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult( alert,"Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className='contact'>
        <h2 className='contact-title'>Contact Me</h2>
        <div className="about-underline"></div>
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible or you can get in touch with me through my socials</p>

        <div className="contact-section">
          <form  className='contact-form' onSubmit= {onSubmit} >
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter your full name' required />

              <label>Email Address</label>
              <input type="text"  name='email' placeholder='Enter your email address' required/>

              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your phone number' required />

              <label>Location</label>
              <input type="text" name='location' placeholder='Enter your location' />

              <label>Message</label>
              <textarea name="message" row="19" placeholder='Enter your message' required></textarea>

              <button type='submit' className='send-btn'>Submit</button>
          </form>

            {showPopup && (
        <div className="popup">
          <p>Form submitted successfully!</p>
          <img src={done} alt="" />
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

          
          <span>{result}</span>
        </div>

      
    </div>
  )
}

export default Contact
