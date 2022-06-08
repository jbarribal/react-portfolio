import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p9ft7lr', 'template_3bic0og', form.current, 'vkBGtIaGH_ww3-gu8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); 
  };

  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>foggy_upgrade.0m@icloud.com</h5>
            <a href="mailto:foggy_upgrade.0m@icloud.com">Send Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jbarribal</h5>
            <a href="https://m.me/jbarribal">Send Message</a>
          </article>
          {/* <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+WhatsAppNum</h5>
            <a href="https://api.whatsapp.com/send?phone+=1234567">Send Message</a>
          </article> */}
        </div>

        <form ref ={form} onSubmit={sendEmail}>
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