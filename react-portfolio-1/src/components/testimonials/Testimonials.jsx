import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Артём Выродов',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
  {
    avatar: AVTR2,
    name: 'Влад Лаврентьев',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
  {
    avatar: AVTR3,
    name: 'Анна Кузнецова',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
  {
    avatar: AVTR4,
    name: 'Анастасия Новикова',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolorum modi ab amet quos non earum nesciunt, voluptate libero.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='cliend__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default Testimonials