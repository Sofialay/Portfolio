import React from 'react';
import './AboutMe.scss';
import linkedin from '../../assets/In.png';
import instagram from '../../assets/instagram.png';
import aboutme from '../../assets/aboutme.jpg'
import { Link } from 'react-router-dom';

export default function AboutMe() {

    return (
        <section className="about-me">
            <div className="container-info">
                <img className="about-me-photo" src={aboutme} alt="me in front of a mirror with a camera" />
                <section className="about-me-info">
                    <h1>About me</h1>
                    <h2>23, based in Buenos Aires, Argentina.</h2>
                    <h2> I'm a very <i>curious person </i> who loves art, science and creativity. I'm passionate about technology and the ways stuff gets built. </h2>
                    <h2>My goal is to learn new technologies and build applications that are efficient while providing engaging user interfaces.</h2>
                    <Link className='contact-link' to={"/contact"} > <button>Contact</button> </Link>
                    <section className="social-media">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofialay/">
                            <img className="social-media-icon" src={linkedin} alt="linkedin icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sofilay/">
                            <img className="social-media-icon" src={instagram} alt="instagram icon" />
                        </a>
                    </section>
                </section>
            </div>
        </section>
    )
}
