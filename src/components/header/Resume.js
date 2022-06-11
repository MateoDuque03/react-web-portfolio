import React from 'react'
import CV from '../../assets/cv.pdf'

const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar HV</a>
        <a href='#contact' className='btn btn-primary'>Hablemos de HV</a>
    </div>
  )
}

export default Resume