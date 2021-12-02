import React from 'react';
import './AboutMe.scss';
import linkedin from '../../assets/In.png';
import instagram from '../../assets/instagram.png';
// import aboutme from '../../assets/aboutme.jpg'
// import { Link } from 'react-router-dom';

export default function AboutMe() {

    return (
        <section className="about-me">
            <section className="about-me-info">
                <h2 className='fs-600'>About me</h2>
                <p className='fs-400'>23, based in Buenos Aires, Argentina.</p>
                <p className='fs-400'> I'm a very <i>curious person </i> who loves art, science and creativity. </p>
                <p className='fs-400'>Always passionate about technology and the ways stuff gets built. </p>
                <p className='fs-400'>My goal is to learn new technologies and build applications that are efficient while providing engaging user interfaces.</p>
                {/* <Link className='contact-link' to={"/contact"} > Contact </Link> */}
            </section>
            <section className='experience'>
                <h2 className='fs-600'>Experience</h2>
                <div className='technologies'>
                    <code>
                        <span className='variable'>const</span> 
                        <span className='name'> technologies </span> 
                        <span>= [</span>
                        <p>'HTML',</p>
                        <p>'CSS',</p>
                        <p>'Javascript',</p>
                        <p>'Typescript',</p>
                        <p>'Storybook',</p> 
                        <p>'Styled-components'</p> 
                        <span>]</span>
                    </code>
                </div>
        </section>
        </section>
    )
}
