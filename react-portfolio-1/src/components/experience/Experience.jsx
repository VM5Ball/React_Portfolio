import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data_Python =[
  {
    skill: 'Pandas',
    level: 'Experinced'
  },
  {
    skill: 'NumPy',
    level: 'Experienced'
  },
  {
    skill: 'SQLAlchemy',
    level: 'Experinced'
  },
  {
    skill: 'xlwings',
    level: 'Intermediate'
  },
  {
    skill: 'Matplotlib',
    level: 'Experinced'
  },
  {
    skill: 'Seaborn',
    level: 'Intermediate'
  },
  
]

const data_ML =[
  {
    skill: 'SKLearn',
    level: 'Experinced'
  },
  {
    skill: 'PyTorch',
    level: 'Experinced'
  },
  {
    skill: 'TensorFlow',
    level: 'Beginner'
  },
  {
    skill: 'TensorBoard',
    level: 'Beginner'
  }
  
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
            ML
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