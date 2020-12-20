import React from 'react';
import './AboutMe.scss';
import aboutme from '../../assets/aboutme.jpg'

export default function AboutMe() {
    return (
        <section className="about-me">
            <section className="about-me-img">
                <img src={aboutme} alt="myself"/>
            </section>
            <section className="personal-info">
                <section className="about-me-info">
                    <h1>About Me</h1>
                    <h2>My name is Sofía Lay, i'm 22 and I live in Buenos Aires, Argentina.</h2>
                    <h2> I'm a very <i>curious person </i> who loves everything about art, science and creativity. </h2>
                    <h2>My goal is to learn new technologies and build applications that are efficient while providing engaging user interfaces!</h2>
                </section>
                <section className="about-me-media">
                    <h1>Social Media</h1>
                    <h2>x</h2>
                    <h2>x</h2>
                    <h2>x</h2>
                    <h2>x</h2>
                </section>
            </section>
        </section>
    )
}
