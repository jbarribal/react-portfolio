import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JBARRIBAL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jbarribal/"><FaFacebookF /></a>
        <a href="https://instagram.com/jshgrgbrbl"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

    </footer>
  )
}

export default Footer