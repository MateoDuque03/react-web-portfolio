import React from 'react'
import Resume from './Resume'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hola, soy</h5>
                <h1>Mateo Duque</h1>
                <h5 className='text-light'>Software Developer</h5>
                <Resume/>
                <HeaderSocial/>
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;