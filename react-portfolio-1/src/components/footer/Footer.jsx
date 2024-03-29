import React from 'react'
import './footer.css'
import {BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Владимир Маркович</a>

      <ul className='permalinks'>
        <li><a href="#">Домой</a></li>  
        <li><a href="#about">Обо мне</a></li>  
        <li><a href="#experience">Мой опыт</a></li>  
        <li><a href="#services">Знания</a></li>  
        <li><a href="#portfolio">Портфолио</a></li>  
        <li><a href="#achievements">Достижения</a></li>  
        <li><a href="#contact">Контакты</a></li>  
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/markovich_vs" target="_blank"><BsTelegram className ='icon'/></a>  
        <a href="https://github.com/VM5Ball" target="_blank"><FaGithub className ='icon'/></a>
        <a href="https://www.linkedin.com/in/markovichvs" target="_blank"><GrLinkedinOption className ='icon'/></a>
      </div>


      <div className="footer__copyrights">
        <small>&copy; Vladimir Markovich. All rights reserved</small>  
      </div>

    </footer>
  )
}

export default Footer