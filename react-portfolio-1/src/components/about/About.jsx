import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {MdSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import PBS from '../../assets/PBS.pdf'

const About = () => {
  return (
    <section id='about'>
      <h5>Познакомимся</h5>
      <h2>Обо мне</h2>

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
              <h5>Достижения</h5>
              <small>Чемпион кейс-чемпионата PBS по децентрализованным финансам</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Проекты</h5>
              <small>10+ Выполненных проектов</small>
            </article>
            </div>
            <p className='text__about__me'>
              Привет! Меня зовут Владимир, я занимаюсь разработкой на Python и аналитикой данных на SQL. В данных момент прохожу обучение в Финансовом Университете при Правительстве РФ по направлению "Прикладная информатика", изучаю информационные сервисы в финансовых структурах. Хочу начать получать опыт работы в разработке и аналитике данных в компании.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>
            <a href={PBS} download='PBS_Certificate.pdf' className='btn left_margin' >PBS Certificate</a>
          
        </div>
      </div>
    </section>
  )
}

export default About