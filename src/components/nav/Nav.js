import {React, useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiSuitcaseLine } from 'react-icons/ri'
import './nav.css'

const Nav = () => {
    const [activeNav, setActive] = useState('#home');
    return (
        <nav>
            <a href='#' onClick={() => setActive('#home')} className={activeNav === '#home' ? 'active tooltip' : 'tooltip'}>
                <AiOutlineHome/>
                <span className="tooltiptext">Home</span>
            </a>
            <a href='#about' onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active tooltip' : 'tooltip'}>
                <AiOutlineUser/>
                <span className="tooltiptext">About</span>
            </a>
            <a href='#experience' onClick={() => setActive('#experience')} className={activeNav === '#experience' ? 'active tooltip' : 'tooltip'}>
                <BiBook/>
                <span className="tooltiptext">Experience</span>
            </a>
            <a href='#portfolio' onClick={() => setActive('#portfolio')} className={activeNav === '#portfolio' ? 'active tooltip' : 'tooltip'}>
                <RiSuitcaseLine/>
                <span className="tooltiptext">Portfolio</span>
            </a>
            <a href='#contact' onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active tooltip' : 'tooltip'}>
                <BiMessageSquareDetail/>
                <span className="tooltiptext">Contact</span>
            </a>
        </nav>
    )
}

export default Nav;