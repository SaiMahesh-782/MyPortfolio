import React from 'react'
import Contactimage from './images/Contact Me.png'

const Contact = () => {
  return (
    <>
    <div className="contact">
      
    <img src={Contactimage} alt="contact"  className='Aboutmainimage' />
   
    <div className='Form-container'>
      <div className="contact-left">
        <h2>Reach me via</h2>
        <h3>Feel free to message me</h3>
      </div>
      <form action="" >
      <input type="text" placeholder='Enter Your Name' />
      <input type="email" placeholder='Enter Your email' />
      <input type="tel" placeholder='Enter Your Mobile Number' />
      <input type="text" placeholder='Enter description' />
      <button className="contact-btn" type="submit">Send</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact
