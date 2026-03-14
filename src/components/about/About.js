import React from 'react'
import './about.css'
import ME from '../../assets/Profile.jpg'
import {FaAward } from 'react-icons/fa'
import {VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    const currentYear = new Date()
    const startedYear = new Date(`2018-01-01`);
    const totalExperience = getYearDiff(startedYear, currentYear);

    function getYearDiff(date1, date2) {
        return Math.abs(date2.getFullYear() - date1.getFullYear());
    }

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
                            <small>{totalExperience}+ Años Trabajando</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Proyectos</h5>
                            <small>20+</small>
                        </article>
                    </div>
                    <p>
                        Senior Frontend Developer con +{totalExperience} años de experiencia especializado en JavaScript, TypeScript, React y Angular. Experto en el diseño de arquitecturas escalables, implementación de micro-frontends y optimización de sistemas de alto rendimiento. Enfocado en metodologías ágiles, Clean Code y la entrega de soluciones técnicas estratégicas que maximizan el valor del producto y la experiencia del usuario.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>
    )
}

export default About;