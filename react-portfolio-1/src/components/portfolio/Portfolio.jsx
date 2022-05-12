import React from 'react'
import './portfolio.css'
import Video1 from '../../assets/Video1.mp4'
import ToDo from '../../assets/ToDo.MP4'
import Tetris from '../../assets/Tetris.mp4'
import PBS from '../../assets/PBS.mp4'
import SUBD from '../../assets/СУБД.mp4'

const data = [
  {
    id: 1,
    video: PBS,
    title: 'PBS Blockchain',
    github: "https://github.com/vm5ball",
    
  },
  {
    id: 2,
    video: Video1,
    title: 'Персональный web-сайт',
    github: "https://github.com/vm5ball",
    
  },
  {
    id: 3,
    video: ToDo,
    title: 'Мобильное приложение ToDo list',
    github: "https://github.com/vm5ball",
    
  },
  {
    id: 4,
    video: Tetris,
    title: 'Тетрис на Python, tkinter',
    github: "https://github.com/vm5ball",
    
  },
  {
    id: 5,
    video: SUBD,
    title: 'База данных фитнес-клуба',
    github: "https://github.com/vm5ball",
    
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