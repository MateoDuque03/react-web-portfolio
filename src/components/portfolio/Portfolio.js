import React from 'react'
import './portfolio.css'
import IMG1 from  '../../assets/portfolio1.jpg'
import IMG2 from  '../../assets/portfolio2.jpg'
import IMG3 from  '../../assets/portfolio3.jpg'
import IMG4 from  '../../assets/portfolio4.jpg'
import IMG5 from  '../../assets/portfolio5.png'
import IMG6 from  '../../assets/portfolio6.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mi Trabajo Reciente</h5>
            <h2>Portafolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='Portfolio Image1'/>
                    </div>
                    <h3>Juego hecho en Angular</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/MateoDuque03/triqui-game' className='btn'>GitHub</a>
                        <a href='https://triqui-game-git-master.mateoduque03.vercel.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt='Portfolio Image1'/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn'>GitHub</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt='Portfolio Image1'/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn'>GitHub</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                {/* <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4} alt='Portfolio Image1'/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn'>GitHub</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5} alt='Portfolio Image1'/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn'>GitHub</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6} alt='Portfolio Image1'/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn'>GitHub</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article> */}
            </div>
        </section>
    )
}

export default Portfolio;