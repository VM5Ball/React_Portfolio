import React from 'react'
import './achievements.css'
import PBS from '../../assets/certificates/logos/PBS_achieve.jpg'
import ORACLE from '../../assets/certificates/logos/Oracle_achieve.png'
import noosoft from '../../assets/certificates/logos/noosoft_logo.JPG'
import PBS_certificate from '../../assets/certificates/PBS.pdf'
import DataBase_certificate from '../../assets/certificates/SUBD_cert.pdf'
import ScyTech_certificate from '../../assets/certificates/SCYTECH.pdf'
import DOM_RF_internship from '../../assets/certificates/BOOST.pdf'
import DOM_RF_logo from '../../assets/certificates/logos/dom_rf_logo.jpeg'
import GPB_logo from '../../assets/certificates/logos/GPB_logo.png'
import GPB_cert from '../../assets/certificates/GPB.pdf'
import Stepik_logo from '../../assets/certificates/logos/Stepik.png'
import Stepik_BD_DS_cert from '../../assets/certificates/Stepik_BD_DS.pdf'
import Statistics from '../../assets/certificates/Statistics.pdf'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: GPB_logo,
    title: 'Карьерный акселератор БАЙТ',
    review: 'Успешное завершение обучения по программе карьерного акселератора по глубокому обучению и нейронным сетям от Газпромбанка совместно с Финансовым Университетом',
    cert: GPB_cert,
    file_name: 'GPB_certificate.pdf'
  },
  {
    avatar: DOM_RF_logo,
    title: 'Стажировка ДОМ.РФ',
    review: 'Успешное прохождение стажировки в Управлении Рисками АО "ДОМ.РФ", в подразделении "Управление Капиталом и Отчётностью"',
    cert: DOM_RF_internship,
    file_name: 'DOM_RF_internship.pdf'
  },
  {
    avatar: PBS,
    title: 'Phystech Business Solutions',
    review: 'Победитель первого в России кейс-чемпионата в сфере высокотехнологичного бизнеса. Разработка алгоритма кластеризации смарт-контрактов.',
    cert: PBS_certificate,
    file_name: 'PBS_certificate.pdf'
  },
  {
    avatar: noosoft,
    title: 'ScyTech. Хакатон молодых учёных',
    review: 'Второе место на хакатоне молодых учёных от ScyTech. IT-кейс от NooSoft по разработке системы поиска по электронному архиву',
    cert: ScyTech_certificate,
    file_name: 'ScyTech_certificate.pdf'
  },
  {
    avatar: ORACLE,
    title: 'Oracle Databases',
    review: 'Награда за успешное завершение финального экзамена по курсу Database Foundations Cumulative Final Exam',
    cert: DataBase_certificate,
    file_name: 'DataBase_certificate.pdf'
  },
  {
    avatar: Stepik_logo,
    title: 'Big Data и Data Science',
    review: 'Завершение курса "Big Data и Data Science: перейди на новый уровень" с отличием',
    cert: Stepik_BD_DS_cert,
    file_name: 'Stepik_BD_DS.pdf'
  },
  {
    avatar: Stepik_logo,
    title: 'Основы статистики',
    review: 'Завершение курса "Основы статистики" с отличием',
    cert: Statistics,
    file_name: 'Statistics.pdf'
  },
  
  
]


const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Стажировки, кейс-чемпионаты, курсы</h5>
      <h2>Certificates</h2>

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
                <a href={cert} target="_blank" className='btn btn__cert'>Открыть</a>
                <a href={cert} download={file_name} className='btn btn__cert' >Скачать</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default Achievements