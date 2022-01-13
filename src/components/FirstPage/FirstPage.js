import React, { useContext } from 'react'
import ThemeContext from '../../context/useContext'
import firstpage from '../../assets/firstpage.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import './FirstPage.scss';

export default function FirstPage() {
    const { theme } = useContext(ThemeContext)

    return (
        <main className='intro-page'>
            <img className='intro-img ' src={firstpage} alt='monitor illustration' />
            <article className='quote' >
                <h1 className='bio'>Hey there, I'm Sofía and </h1>
                <h2 className='primary-color'>
                    I turn ideas into pixels {theme === 'Spooky' ? '👻' : '👾' } 
                </h2>
                <h3>
                    Front End Developer based in Buenos Aires.
                </h3> 
                <nav className='social-media-icons'>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://github.com/Sofialay'
                    >
                        <BsGithub className='primary-color'/>
                    </a> 
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/sofialay/'
                    >
                        <BsLinkedin className='primary-color'/>
                    </a> 
                    <a 
                        target='_blank'
                        rel='noreferrer' 
                        href='mailto: laysofiabelen@gmail.com'
                    >
                        <MdAlternateEmail className='primary-color'/>
                    </a>
                </nav>
            </article>
        </main>
    )
}
