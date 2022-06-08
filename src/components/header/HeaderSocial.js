import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mateo-duque-a61ba6158/' target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/MateoDuque03' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/mateoduque03/' target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial