import React from 'react'
import CV from '../../assets/CV/CV Владимир Маркович.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download='CV Владимир Маркович' className='btn' >Резюме</a>
        <a href="#contact" className='btn btn-primary'>Контакты</a>
    </div>
  )
}

export default CTA