import React from 'react'
import './services.css'
import {TiTick} from 'react-icons/ti'

const data_python = [
  {
    skill: 'Принципы ООП'
  },
  {
    skill: 'Работы с данными в Pandas'
  },
  {
    skill: 'Обработка данных в NumPy'
  },
  {
    skill: 'SQLAlchemy'
  },
  {
    skill: 'Построение гистограмм'
  },
  {
    skill: 'Функции агрегации'
  },
  
  
  
]

const data_job = [
  {
    skill: 'Автоматизация отчётности'
  },
  {
    skill: 'Проверки качества данных'
  },
  {
    skill: 'Анализ распределений'
  },
  {
    skill: 'Очистка данных'
  },
  {
    skill: 'Feature engineering'
  },
  {
    skill: 'Анализ рисков ипотечных активов'
  },
  
  
  
]

const data_ML = [
  {
    skill: 'Линейная регрессия'
  },
  {
    skill: 'Метод градиентного спуска'
  },
  {
    skill: 'Классификация'
  },
  {
    skill: 'Логистическая регрессия'
  },
  {
    skill: 'Метод опорных векторов'
  },
  {
    skill: 'Линейный перцептрон'
  },
  {
    skill: 'Свёрточные нейронные сети'
  },
  {
    skill: 'Задачи CV и NLP'
  },
]

const Services = () => {
  return (
    
    <section id='services'>
      <h5>Знания и опыт</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Python & SQL</h3>
          </div>
          <ul className="service__list">
            {
              data_python.map(({skill}) => {
                return (
                  <li>
                    <TiTick className='service__list-icon'/>
                    <p>{skill}</p>
                  </li> 
                )
              })
            }  
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Аналитика</h3>
          </div>
          <ul className="service__list">
            {
              data_job.map(({skill}) => {
                return (
                  <li>
                    <TiTick className='service__list-icon'/>
                    <p>{skill}</p>
                  </li> 
                )
              })
            } 
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>ML</h3>
          </div>
          <ul className="service__list">
            {
              data_ML.map(({skill}) => {
                return (
                  <li>
                    <TiTick className='service__list-icon'/>
                    <p>{skill}</p>
                  </li> 
                )
              })
            } 
          </ul>
        </article>

        

        

      </div>

      </section>
  )
}

export default Services