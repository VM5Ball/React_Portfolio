import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/markovich_vs" target="_blank"><FaTelegram/></a>
        <a href="https://github.com/VM5Ball" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/markovichvs" target="_blank"><AiOutlineLinkedin/></a>

    </div>
  )
}

export default HeaderSocials