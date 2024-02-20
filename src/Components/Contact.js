import React from 'react'
import Contactimage from './images/Contact Me.png'

const Contact = () => {
  return (
    <>
    <div className="contact">
      
    <img src={Contactimage} alt="contact"  className='Aboutmainimage' />
    <h2>Contact Me</h2>
    <div className='Form-container'>
    
       <div className="contact-left">
         <h2>Reach me via</h2>
         <h3>Feel free to message me or inquire about hiring team for me </h3>
          <h2>Name</h2>
          <h2>Sai Mahesh</h2>
          <h2>Email</h2>
          <h2>saimahesh645@gmail.com</h2>
       </div>

      <div className="contact-right">
       
      <form action="" >
        <h2> I Welcome Your messages</h2>
      <input type="text" placeholder='Enter Your Name' />
      <input type="email" placeholder='Enter Your email' />
      <input type="tel" placeholder='Enter Your Mobile Number' />
      <input type="text" placeholder='Enter description' />
      <button className="contact-btn" type="submit">Send</button>
      </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact
