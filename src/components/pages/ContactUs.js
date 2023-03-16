 import React from 'react'
// import './Contact.css'

 const ContactUs = () => {
  return (
    <div className='contact-container'>
     
        <form>

       

      <h1>CONTACT US</h1>
      <label>
        Name:
      </label>
        
        <input type='name' placeholder='Enter your name..'></input><br/><br/>
        <label>
        Email:
      </label>
        <input type='email' placeholder='Enter your email..'></input><br/><br/>
        <label>
      Message:
      </label>
        <input type='textarea' placeholder='enter your message here..'/><br/><br/>
        <button type='submit'>Send</button>
        </form>
       

    </div>
  )
}
export default ContactUs