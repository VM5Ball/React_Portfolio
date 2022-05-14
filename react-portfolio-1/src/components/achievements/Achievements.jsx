import React from 'react'
import './achievements.css'
import PBS from '../../assets/PBS_achieve.jpg'
import ORACLE from '../../assets/Oracle_achieve.png'
import PBS_certificate from '../../assets/PBS.pdf'
import DataBase_certificate from '../../assets/SUBD_cert.pdf'

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
    review: 'Победитель первого в России кейс-чемпионата в сфере высокотехнологичного бизнеса. Разработка алгоритма кластеризации смарт-контрактов.',
    cert: PBS_certificate,
    file_name: 'PBS_certificate.pdf'
  },
  {
    avatar: ORACLE,
    title: 'Oracle Databases',
    review: 'Награда за успешное завершение финального экзамена по курсу Database Foundations Cumulative Final Exam',
    cert: DataBase_certificate,
    file_name: 'DataBase_certificate.pdf'
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
          data.map(({avatar, title, review, cert, file_name}, index) => {
            return (
              <SwiperSlide key={index} className='achievement'>
                <div className="achievement__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='cliend__name'>{title}</h5>
                <small className='achievement__review'>{review}</small>
                <a href={cert} download={file_name} className='btn btn__cert' >Скачать сертификат</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default Achievements