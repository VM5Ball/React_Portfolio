import React from 'react'
import './achievements.css'
import PBS from '../../assets/PBS_achieve.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: PBS,
    title: 'Phystech Business Solutions',
    review: 'Победитель первого в России кейс-чемпионата в сфере высокотехнологичного бизнеса. Разработка алгоритма кластеризации смарт-контрактов.'
  },
  {
    avatar: PBS,
    title: 'Достижение 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
  {
    avatar: PBS,
    title: 'Достижение 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
  {
    avatar: PBS,
    title: 'Достижение 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
]


const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Мои достижения</h5>
      <h2>Достижения</h2>

      <Swiper className='container achievements__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, title, review}, index) => {
            return (
              <SwiperSlide key={index} className='achievement'>
                <div className="achievement__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='cliend__name'>{title}</h5>
                <small className='achievement__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default Achievements