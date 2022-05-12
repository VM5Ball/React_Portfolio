import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Привет! Меня зовут</h5>
        <h1>Владимир Маркович</h1>
        <h5 className="text-light">Junior Python Developer</h5>
        <h5 className="text-light">Junior Data Scientist</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header