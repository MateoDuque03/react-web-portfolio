import React from 'react'
import './footer.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
           <a href='#' className='footer__logo'>Mateo Duque</a> 

           <ul className='permalinks'>
               <li><a href='#'>Home</a></li>
               <li><a href='#about'>About</a></li>
               <li><a href='#experience'>Experience</a></li>
               <li><a href='#portfolio'>Portfolio</a></li>
               <li><a href='#contact'>Contact</a></li>
           </ul>

           <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/mateo-duque-a61ba6158/' target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/MateoDuque03' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
            <a href='https://www.instagram.com/mateoduque03/' target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
           </div>

           <div className='footer__copyright'>
               <small>&copy; Mateo Duque. Todos los derechos reservados.</small>
           </div>
        </footer>
    )
}

export default Footer;