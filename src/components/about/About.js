import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward } from 'react-icons/fa'
import {FiUsers } from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Conoce</h5>
            <h2>Sobre mi</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About Images"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experiencia</h5>
                            <small>4+ Años Trabajando</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Proyectos</h5>
                            <small>20+</small>
                        </article>
                    </div>
                    <p>
                        Desarrollador web con más de 4 años de experiencia trabajando en Javascript y C#. 
                        Amante de Javascript y todo su ecosistema. He trabajado con NodeJS, React y Angular.
                        Apasionado del desarrollo de software, autodidacta, proactivo y emprendedor de nuevas tecnologías.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>
    )
}

export default About;