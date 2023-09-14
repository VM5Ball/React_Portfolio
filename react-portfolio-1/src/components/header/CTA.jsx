import React from 'react'
import CV from '../../assets/CV/Маркович В.С.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download='Владимир Маркович.pdf' className='btn' >Резюме</a>
        <a href="#contact" className='btn btn-primary'>Контакты</a>
    </div>
  )
}

export default CTA