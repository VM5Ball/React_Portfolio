import React from 'react'
import {RiTelegramLine} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import {IoMdBasketball} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/vm5_ball" target="_blank"><RiTelegramLine/></a>
        <a href="https://github.com/VM5Ball" target="_blank"><BsGithub/></a>
        <a href="https://vtbyouth-league.com/ru/team/404263/?teamId=101634" target="_blank"><IoMdBasketball/></a>

    </div>
  )
}

export default HeaderSocials