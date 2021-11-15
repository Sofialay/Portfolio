import React, { useContext } from 'react'
import ThemeContext from '../../../context/useContext'
import './Theme.scss'

const Theme = ({ status }) => {
    const { setTheme } = useContext(ThemeContext)

    const cardsContent = [
        {   name: 'Classic',
            primary: '#9980fa',
            font: '#292e31',
            bg: '#fff',
            bgSecondary: '#455081',
        },
        {   name: 'Dark',
            primary: '#6fffe9',
            font: '#e9fff9',
            bg: '#0b132b',
            bgSecondary: '#1c2541',
        },
        { 
            name: 'Soft',
            primary: '#f694c1',
            font: '#292e31',
            bg: '#fcf6bd',
            bgSecondary: '#d0f4de',
        }, 
        { 
            name: 'Spooky', 
            primary: '#ff5f16',
            font: '#f6f5f6',
            bg: '#191124',
            bgSecondary: '#4d1860',
        }
    ]

    return (
        <section className={`theme__container ${status ? 'open' : ''}`}>
            <p className='align-center fs-400 fw-500'>Select theme</p>
            <ul className='theme'>
                {cardsContent.map(({ 
                    name, 
                    primary, 
                    font, 
                    bg, 
                    bgSecondary 
                }, index)=> {
                    return(
                        <li key={index} >
                            <button 
                                className='theme__card' 
                                onClick={()=> setTheme(name)}
                                style={{ background: bg }}
                            >
                                <div className='colors'>
                                    <div style={{background: primary}}/>
                                    <div style={{background: font}}/>
                                    <div style={{background: bg}}/>
                                    <div style={{background: bgSecondary}}/>
                                </div>
                                <p style={{color: font}}>{name}</p>
                            </button>
                        </li>
                    )
                })}    
            </ul>
        </section>
    )
}

export default Theme
