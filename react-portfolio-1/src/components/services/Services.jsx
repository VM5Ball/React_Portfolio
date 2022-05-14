import React from 'react'
import './services.css'
import {TiTick} from 'react-icons/ti'

const data_python = [
  {
    skill: 'Принципы Объектно-оринтированного программирования'
  },
  {
    skill: 'Списки, Словари, множества, выражения генераторы'
  },
  {
    skill: 'Функциональное программирование: Lambda, Map, filter, reduce'
  },
  {
    skill: 'Алгоритмы сортировки: bubble sort, merge sort, quick sort'
  },
  {
    skill: 'Обработка исключений (try, except), работа с файлами'
  },
  {
    skill: 'Хен-функции, хкширование данных, хеш-таблицы'
  },
  {
    skill: 'Pandas, SQLAlchemy'
  },
]

const data_sql = [
  {
    skill: 'Типы моделей баз данных'
  },
  {
    skill: 'Логическая модель'
  },
  {
    skill: 'Реляционная модель'
  },
  {
    skill: 'Oracle, SQLite'
  },
  {
    skill: 'Объекты, атрибуты, связи'
  },
  {
    skill: 'SELECT, WHERE, ORDER BY, DISCTINCT, NVL'
  },
  {
    skill: 'JOIN, LEFT, RIGHT, OUTER, NATURAL'
  },
  {
    skill: 'GROUP BY, HAVING, COUNT, MAX, MIN, SUM'
  },
  {
    skill: 'ROLLUP, CUBE, GROUPING SETS, SUBQUERRIES'
  },
  {
    skill: 'UNION, INTERSECT, MINUS'
  },
]

const data_DS = [
  {
    skill: 'Теория вероятностей'
  },
  {
    skill: 'Математическое ожидание'
  },
  {
    skill: 'Математическая статистика'
  },
  {
    skill: 'Статистическая проверка гипотез'
  },
  {
    skill: 'Нормальное распределение'
  },
  {
    skill: 'Доверительные интервалы'
  },
  {
    skill: 'Визуализация данных на языке R'
  },
  {
    skill: 'Визуализация данных в Excel'
  },
]

const Services = () => {
  return (
    
    <section id='services'>
      <h5>Что я предлагаю</h5>
      <h2>Знания</h2>

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
            <h3>Анализ данных</h3>
          </div>
          <ul className="service__list">
            {
              data_DS.map(({skill}) => {
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