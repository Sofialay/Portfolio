import React from 'react';
import firstpage from '../../assets/firstpage.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import './FirstPage.scss';

export default function FirstPage() {

    return (
        <main className='intro-page'>
            <img className='intro-img' src={firstpage} alt='monitor illustration' />
            <article className='quote' >
                <h1 className='bio'>Hey there, I'm <span className='letter-spacing-1 fs-500'>Sofía Lay</span></h1>
                <h2>and I turn ideas into pixels 👾 </h2>
                <h3>
                    I'm currently a Front End Developer focused on creating beautiful 
                    and accesible web interfaces. 
                </h3> 
                <section className='social-media-icons'>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Sofialay'>
                        <BsGithub/>
                    </a> 
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sofialay/'>
                        <BsLinkedin/>
                    </a> 
                    <a target='_blank' rel='noreferrer' href='mailto: laysofiabelen@gmail.com'>
                        <MdAlternateEmail/>
                    </a>
                </section>
            </article>
        </main>
    )
}
