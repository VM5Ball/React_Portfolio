import React from 'react'
import './footer.css'
import {BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VLADIMIR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>  
        <li><a href="#about">About</a></li>  
        <li><a href="#experience">Experience</a></li>  
        <li><a href="#services">Services</a></li>  
        <li><a href="#portfolio">Portfolio</a></li>  
        <li><a href="#testimonials">Testimonials</a></li>  
        <li><a href="#contact">Contact</a></li>  
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/vm5_ball"><BsTelegram className ='icon'/></a>  
        <a href="https://github.com/VM5Ball"><FaGithub className ='icon'/></a>
      </div>


      <div className="footer__copyrights">
        <small>&copy; Vladimir Markocih. All rights reserved</small>  
      </div>

    </footer>
  )
}

export default Footer