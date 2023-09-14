import React from 'react'
// import ReactPlayer from 'react-player'
import './portfolio.css'
import Portfolio_demo from '../../assets/projects/WEB-SITE.png'
import PBS from '../../assets/projects/PBS.jpeg'
import PD_model from '../../assets/projects/PD_MODEL.png'

const data = [
  {
    id: 1,
    logo: PBS,
    title: 'Phystech Business Solutions. DeFi Analytics',
    github: "https://github.com/VM5Ball/DeFi_Analitics",
    
  },
  {
    id: 2,
    logo: PD_model,
    title: 'Neural Network for Probability of Default prediction',
    github: "https://github.com/VM5Ball/NeuralNetwork_PD_model/",
    
  },
  {
    id: 3,
    logo: Portfolio_demo,
    title: 'Персональный веб-сайт портфолио на ReactJS',
    github: "https://github.com/VM5Ball/React_Portfolio",
    
  },
  
  
]

const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>Мои последние проекты</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, logo, title, github, }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              {/* <ReactPlayer url={video} width='100%' height={200} controls muted /> */}
                <img src={logo} alt="About Image" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
                
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