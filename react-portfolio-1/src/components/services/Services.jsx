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
    skill: 'SQLAlchemy и SQLite3'
  },
  {
    skill: 'Визуализация в Matplotlib'
  },
  {
    skill: 'SKlearn'
  },
  
  
]

const data_sql = [
  {
    skill: 'Реляционные БД'
  },
  {
    skill: 'Объекты, атрибуты, связи'
  },
  {
    skill: 'Извлечение данных'
  },
  {
    skill: 'Ограничения (WHERE)'
  },
  {
    skill: 'Сортировка (ORDER BY)'
  },
  {
    skill: 'Операторы сравнения'
  },
  {
    skill: 'Соединения таблиц'
  },
  {
    skill: 'Группировка, Функции'
  },
  {
    skill: 'Операторы множеств'
  },
  {
    skill: 'Подзапросы'
  },
]

const data_ML = [
  {
    skill: 'Supervised Learning'
  },
  {
    skill: 'Unsupervised learning'
  },
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
    skill: 'Предобработка данных'
  },
  {
    skill: 'Кластеризация данных'
  }
]

const Services = () => {
  return (
    
    <section id='services'>
      <h5>Знания</h5>
      <h2>Knowledge</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Python</h3>
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
            <h3>SQL</h3>
          </div>
          <ul className="service__list">
            {
              data_sql.map(({skill}) => {
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