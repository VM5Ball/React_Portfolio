import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {IoMdBasketball} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/markovich_vs" target="_blank"><FaTelegram/></a>
        <a href="https://github.com/VM5Ball" target="_blank"><BsGithub/></a>
        {/* <a href="https://vtbyouth-league.com/ru/team/404263/?teamId=101634" target="_blank"><IoMdBasketball/></a> */}

    </div>
  )
}

export default HeaderSocials