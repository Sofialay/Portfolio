import React, { useState } from 'react'
import MenuItems from '../../data/MenuItems'
import Theme from './Theme/Theme'
import { HiMenuAlt4 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { FaPaintBrush } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
    const [openTheme, setOpenTheme] = useState(false)
    const [clicked, setClicked] = useState(false)

    let handleClick = () => setClicked(!clicked)

    return (
        <>
            <nav className='portfolio-header'>
                <div className='header-burger'>
                    {/* Make a button */}
                    <div 
                        onClick={handleClick} 
                        className={clicked ? 'portfolio-header-x' : 'portfolio-header-menu'}
                    >
                        { clicked ? 
                            <MdClose className='primary' /> 
                            : 
                            <HiMenuAlt4 className='primary'/> 
                        } 
                    </div>
                    <ul className={clicked ? 'nav-menu active bg-secondary' : 'nav-menu' }>
                        {
                            MenuItems.map((item, index) => {
                                return(
                                <li key={index} className='font-color'> 
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
                <button 
                    className='paintBrush' 
                    onClick={()=> setOpenTheme(!openTheme)}
                >
                    <FaPaintBrush />
                </button>
            </nav>
            <Theme status={openTheme}/>
        </>
    )
}

export default NavBar;
