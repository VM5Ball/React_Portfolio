import React from 'react'
import './portfolio.css'
import Portfolio_demo from '../../assets/Portfolio_demo.mp4'
import ToDo from '../../assets/ToDo.mp4'
import Tetris from '../../assets/Tetris.mp4'
import PBS from '../../assets/PBS.mp4'
import SUBD from '../../assets/СУБД.mp4'
import toothpicks from '../../assets/ToothPicks.mp4'

const data = [
  {
    id: 1,
    video: PBS,
    title: 'PBS Blockchain',
    github: "https://github.com/VM5Ball/DeFi_Analitics",
    
  },
  {
    id: 2,
    video: Portfolio_demo,
    title: 'ReactJS Portfolio',
    github: "https://github.com/VM5Ball/React_Portfolio",
    
  },
  {
    id: 3,
    video: ToDo,
    title: 'Мобильное приложение ToDo list',
    github: "https://github.com/VM5Ball/ToDo-App",
    
  },
  {
    id: 4,
    video: Tetris,
    title: 'Тетрис на Python, tkinter',
    github: "https://github.com/VM5Ball/Python_small_projects/tree/main/Tetris",
    
  },
  {
    id: 5,
    video: SUBD,
    title: 'База данных фитнес-клуба',
    github: "https://github.com/VM5Ball/Fitness-DataBase",
    
  },
  {
    id: 6,
    video: toothpicks,
    title: 'ToothPick Pattern',
    github: "https://github.com/VM5Ball/Python_small_projects/tree/main/ToothPicks",
    
  },
  
]

const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>Мои последние работы</h5>
      <h2>Портфолио</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, video, title, github, }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <video src={video} width="300" height="200" controls />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                
              </div>
            </article>
            )
          })
        }

      </div>
      
    
    </section>

    
  )
}

export default Portfolio