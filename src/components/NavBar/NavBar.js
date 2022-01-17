import React, { useState } from 'react'
import Theme from './Theme/Theme'
// import MenuItems from '../../data/MenuItems'
// import { HiMenuAlt4 } from 'react-icons/hi'
// import { MdClose } from 'react-icons/md'
// import { Link } from 'react-router-dom'
import { FaPaintBrush } from 'react-icons/fa'
import './NavBar.scss'

function NavBar() {
    const [openTheme, setOpenTheme] = useState(false)
    // const [clicked, setClicked] = useState(false)

    // const handleClick = () => setClicked(!clicked)

    return (
        <>
            <nav className='portfolio-header'>
                {/* <div className='header-burger'>
                    <button 
                        onClick={handleClick} 
                        className={clicked ? 'portfolio-header-x' : 'portfolio-header-menu'}
                    >
                        { clicked ? 
                            <MdClose className='primary-color fw-700'/> 
                            : 
                            <HiMenuAlt4 className='primary-color fw-700'/> 
                        } 
                    </button>
                    <ul className={clicked ? 'nav-menu active bg-secondary' : 'nav-menu' }>
                        {
                            MenuItems.map((item, index) => {
                                return(
                                <li key={index} className='primary-color'> 
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
                </div> */}
                <button 
                    className='paintBrush primary-color' 
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
