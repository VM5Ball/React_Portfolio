import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data_Python =[
  {
    skill: 'NumPy',
    level: 'Experienced'
  },
  {
    skill: 'Pandas',
    level: 'Experinced'
  },
  {
    skill: 'SQLAlchemy',
    level: 'Experinced'
  },
  {
    skill: 'SQLite3',
    level: 'Intermediate'
  },
  
]

const data_ML =[
  {
    skill: 'SKLearn',
    level: 'Experinced'
  },
  {
    skill: 'Matplotlib',
    level: 'Experinced'
  },
  {
    skill: 'Seaborn',
    level: 'Experinced'
  }
  
]

// const data_DS =[
//   {
//     skill: 'SQL',
//     level: 'Experinced'
//   },
//   {
//     skill: 'Python',
//     level: 'Experinced'
//   },
//   {
//     skill: 'R',
//     level: 'Experinced'
//   },
//   {
//     skill: 'Excel',
//     level: 'Experinced'
//   },
//   {
//     skill: 'Oracle data modeler',
//     level: 'Intermediate'
//   },
// ]

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Инструменты, с которыми я имею опыт работы</h5>  
        <h2>Experience</h2>

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
                    {/* <small className='text-light'>{level}</small> */}
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
                    {/* <small className='text-light'>{level}</small> */}
                    </div>
                  </article>  
                )
              })
            }  
          </div>
          </div>


          {/* <div className="experience__backend">
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
          </div> */}


          </div>
        
       
    </section>
  )
}

export default Experience