import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data_FE =[
  {
    skill: 'Javascript',
    level: 'Experinced'
  },
  {
    skill: 'CSS',
    level: 'Experinced'
  },
  {
    skill: 'React',
    level: 'Experinced'
  },
  {
    skill: 'HTML',
    level: 'Intermediate'
  },
  {
    skill: 'Bootstrap',
    level: 'Intermediate'
  },
]

const data_BE =[
  {
    skill: 'Python',
    level: 'Experinced'
  },
  {
    skill: 'SQL',
    level: 'Experinced'
  },
  {
    skill: 'Javscript',
    level: 'Experinced'
  },
  {
    skill: 'Java',
    level: 'Intermediate'
  },
  
]

const data_DS =[
  {
    skill: 'SQL',
    level: 'Experinced'
  },
  {
    skill: 'Python',
    level: 'Experinced'
  },
  {
    skill: 'R',
    level: 'Experinced'
  },
  {
    skill: 'Excel',
    level: 'Experinced'
  },
  {
    skill: 'Oracle data modeler',
    level: 'Intermediate'
  },
]

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Инструменты, с которыми я имею опыт работы</h5>  
        <h2>Мой опыт</h2>

        <div className="container experience__container">

          <div className="experience__backend">
          <h3>
            Backend Development
          </h3>
          <div className="experience__content">

            {
              data_BE.map(({skill, level}) => {
                return (
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                    </div>
                  </article>  
                )
              })
            }
          </div>
          </div>
          
          <div className="experience__frontend">
          <h3>
            Frontend Development
          </h3>
          <div className="experience__content">
            {
              data_FE.map(({skill, level}) => {
                return (
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                    </div>
                  </article>  
                )
              })
            }  
          </div>
          </div>


          <div className="experience__backend">
          <h3>
            Data science
          </h3>
          <div className="experience__content">
          {
              data_DS.map(({skill, level}) => {
                return (
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
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