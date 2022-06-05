import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummy@email.com</h5>
            <a href="mailto:dummy@email.com">Send Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>MyMessenger</h5>
            <a href="https://m.me/profile">Send Message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+WhatsAppNum</h5>
            <a href="https://api.whatsapp.com/send?phone+=1234567">Send Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name ='name' placeholder='Your Full Name' required/>
          <input type="email" name ='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type= 'submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact