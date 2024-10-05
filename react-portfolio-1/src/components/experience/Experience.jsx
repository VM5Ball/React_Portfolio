import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data_Python =[
  {
    skill: 'Scikit-Learn',
    level: 'Experienced'
  },
  {
    skill: 'CatBoost',
    level: 'Experienced'
  },
  {
    skill: 'XGBoost',
    level: 'Experienced'
  },
  {
    skill: 'LightGBM',
    level: 'Experienced'
  },
  {
    skill: 'PyTorch',
    level: 'Experienced'
  },
  {
    skill: 'MlFlow',
    level: 'Experienced'
  },
  {
    skill: 'Airflow',
    level: 'Experienced'
  },
  {
    skill: 'Optuna',
    level: 'Intermediate'
  },
]

const data_DBM =[
  {
    skill: 'ClickHouse',
    level: 'Experinced'
  },
  {
    skill: 'Vertica',
    level: 'Experinced'
  },
  {
    skill: 'Kafka',
    level: 'Experinced'
  },
  {
    skill: 'MS SQL',
    level: 'Experinced'
  },
  {
    skill: 'Gitlab',
    level: 'Experinced'
  },
  {
    skill: 'S3 Bucket',
    level: 'Experinced'
  },
  {
    skill: 'SuperSet',
    level: 'Experinced'
  },
  {
    skill: 'Grafana',
    level: 'Experinced'
  },
  
]

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Инструменты, с которыми я имею опыт работы</h5>  
        <h2>Stack</h2>

        <div className="container experience__container">

          <div className="experience__backend">
          <h3>
            Python
          </h3>
          <div className="experience__content">

            {
              data_Python.map(({skill, level}) => {
                return (
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>{skill}</h4>
                    {<small className='text-light'>{level}</small> }
                    </div>
                  </article>  
                )
              })
            }
          </div>
          </div>
          
          <div className="experience__frontend">
          <h3>
            Infra
          </h3>
          <div className="experience__content">
            {
              data_DBM.map(({skill, level}) => {
                return (
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>{skill}</h4>
                    { <small className='text-light'>{level}</small> }
                    </div>
                  </article>  
                )
              })
            }  
          </div>
          </div>

          </div>
        
       
    </section>
  )
}

export default Experience