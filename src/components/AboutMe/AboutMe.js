import React from 'react';
import './AboutMe.scss';
import linkedin from '../../assets/In.png';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';
import aboutme from '../../assets/aboutme.jpg'
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring'

export default function AboutMe() {

    const show = true;

    const transitions = useTransition(null, show, {
        from: { opacity: 0, marginLeft: -600},
        enter: { opacity: 1, marginLeft: 0},
        leave: { opacity: 1, marginLeft: 0}
        })

    return (
        <section className="about-me">
            <div className="container-info">
            {
            transitions.map(({ props, key }) => 
                <animated.div className="personal-info" style={props} key={key}>
                    <img className="about-me-photo" src={aboutme} alt="me in front of a mirror with a camera" />
                    <section className="about-me-info">
                        <h1>About me</h1>
                        <h2>22, based in Buenos Aires, Argentina.</h2>
                        <h2> I'm a very <i>curious person </i> who loves art, science and creativity. I'm passionate about technology and the ways stuff gets built. </h2>
                        <h2>My goal is to learn new technologies and build applications that are efficient while providing engaging user interfaces.</h2>
                        <h2>Let's talk!</h2>
                        <Link className='contact-link' to={"/contact"} > <button>Contact</button> </Link>
                    </section>
                    <section className="social-media">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofialay/">
                            <img className="social-media-icon" src={linkedin} alt="linkedin icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=1137975884">
                            <img className="social-media-icon" src={whatsapp} alt="whatsapp icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sofilay/">
                            <img className="social-media-icon" src={instagram} alt="instagram icon" />
                        </a>
                    </section>
                </animated.div>
            )}
            </div>
        </section>
        )
}
