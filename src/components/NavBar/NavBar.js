import React, { useState } from 'react'
import MenuItems from '../../data/MenuItems'
import { HiMenuAlt4 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { Switcher } from './Switcher/Switcher'
import './NavBar.scss'

function NavBar() {
    // hacer context para el switch
    const [darkMode, setDarkMode] = useState(false)
    const [clicked, setClicked] = useState(false)

    let handleClick = () => setClicked(!clicked);

    return (
        <nav className={`portfolio-header ${darkMode ? 'dark' : ''}`}>
            <div className='header-burger'>
                <div 
                    onClick={handleClick} 
                    className={clicked ? 'portfolio-header-x' : 'portfolio-header-menu'}
                >
                    { clicked ? <GrFormClose/> : <HiMenuAlt4/> } 
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu' }>
                    {
                        MenuItems.map((item, index) => {
                            return(
                            <li key={index}> 
                                <Link 
                                    className={item.cName} 
                                    to={item.url} 
                                    onClick={handleClick}
                                > 
                                    {item.title} 
                                </Link> 
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Switcher action={(e)=> setDarkMode(e)}/>
        </nav>
    )
}

export default NavBar;
