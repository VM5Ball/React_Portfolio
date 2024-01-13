import React from 'react'
import './about.css'
import ME from '../../assets/me/Маркович_В.С.jpeg'
import {MdSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Основная информация обо мне</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Образование</h5>
              <small>Финансовый Университет при Правительстве РФ</small>
              
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Опыт</h5>
              <small>ДОМ.РФ <br /> OZON </small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Проекты</h5>
              <small>Построение моделей машинного обучения, нейронных сетей</small>
            </article>
            </div>
            <p className='text__about__me'>
              Меня зовут Володя, мне 22 года и я развиваюсь в области Data Science и Machine Learning. Обучаюсь в Финансовом Университете при Правительстве РФ на Факультете Информационных Технологий и Анализа Больших Данных по направлению "Прикладная информатика".
            </p>

            {/* <a href="#contact" className='btn btn-primary'>Let's talk</a> */}
            {/* <a href={PBS} download='PBS_Certificate.pdf' className='btn left_margin' >PBS Certificate</a> */}
          
        </div>
      </div>
    </section>
  )
}

export default About