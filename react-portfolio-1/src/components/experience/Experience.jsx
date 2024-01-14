import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data_Python =[
  {
    skill: 'Vertica',
    level: 'Experienced'
  },
  {
    skill: 'MS SQL',
    level: 'Experienced'
  },
  {
    skill: 'Superset',
    level: 'Experienced'
  },
  {
    skill: 'Grafana',
    level: 'Intermediate'
  },
  {
    skill: 'ClickHouse',
    level: 'Intermediate'
  },
  {
    skill: 'SQLAlchemy',
    level: 'Experienced'
  },
  
]

const data_ML =[
  {
    skill: 'SKLearn',
    level: 'Experienced'
  },
  {
    skill: 'PyTorch',
    level: 'Experinced'
  },
  {
    skill: 'ML flow',
    level: 'Experienced'
  },
  {
    skill: 'Airflow',
    level: 'Experienced'
  },
  {
    skill: 'S3 Bucket',
    level: 'Experienced'
  },
  {
    skill: 'Git',
    level: 'Experienced'
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
            DBM & Reporting
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
            ML Infra
          </h3>
          <div className="experience__content">
            {
              data_ML.map(({skill, level}) => {
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