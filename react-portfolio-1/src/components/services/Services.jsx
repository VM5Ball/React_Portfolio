import React from 'react'
import './services.css'
import {TiTick} from 'react-icons/ti'

const data_dbm = [
  {skill: 'ETL'},
  {skill: 'Query performance'},
  {skill: 'SQLAlchemy'},
]

const data_ML = [
  {skill: 'PyTorch'},
  {skill: 'Sci-kit Learn'},
  {skill: 'Time Series Forecasting'},
  {skill: 'Linear models'},
  {skill: 'LightGBM'},
  {skill: 'XGBoost'},
  {skill: 'CatBoost'},
]

const data_reporting = [
  {skill: 'Grafana'},
  {skill: 'Superset'},
  {skill: 'Matplotlib'},
  {skill: 'Plotly Express'},
  {skill: 'Seaborn'},
]

const Services = () => {
  return (
    
    <section id='services'>
      <h5>Знания и опыт</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DBM</h3>
          </div>
          <ul className="service__list">
            {
              data_dbm.map(({skill}) => {
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
            <h3>Python</h3>
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

        <article className="service">
          <div className="service__head">
            <h3>Reporting</h3>
          </div>
          <ul className="service__list">
            {
              data_reporting.map(({skill}) => {
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