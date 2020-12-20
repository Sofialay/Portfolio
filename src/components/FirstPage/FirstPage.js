import React from 'react';
import './FirstPage.scss';
import { useSpring, animated } from 'react-spring'
import firstpage2 from '../../assets/firstpage2.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'

export default function FirstPage() {

    const props = useSpring({
        from: { left: '0%', top: '0%', width: '0%', height: '0%' , background: '#8A79AF' },
        to: async next => {
          while (1) {
            await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: ('#FFFFC1') })
            await next({ height: '50%', background: '#FFD2A5' })
            await next({ width: '50%', left: '50%', background: '#D38CAD' })
            await next({ top: '0%', height: '50%', background: '#8A79AF' })
            await next({ top: '50%', height: '50%', background: '#FFFFC1' })
            await next({ width: '100%', left: '0%', background: '#FFD2A5' })
            await next({ width: '50%', background: '#D38CAD' })
            await next({ top: '0%', height: '50%', background: '#8A79AF' })
            await next({ width: '100%', background: '#FFFFC1' })
          }
        },
      })
      

    return (
        <section className="intro-page">
            <animated.div className="script-box" style={props} />
            <article className="intro-text">
                <img className="intro-img" src={firstpage2} alt="computer and light" />
                <article className="quote" >
                    <h2>
                        I turn ideas into pixels
                    </h2>
                    <h3 className="bio">Hi there, i'm Sofía!</h3>
                    <h3>
                        A Front End Developer Jr focusing on build beautiful and accesible interfaces on the web.
                    </h3> 
                    <section className="social-media-icons">
                        <a target="_blank" rel="noreferrer" href="mailto: laysofiabelen@gmail.com"><img className="email-icon" src={email} alt="mail icon"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofialay/"><img className="linkedin-icon" src={linkedin} alt="IN icon"/></a> 
                    </section>
                </article>
            </article>
        </section>
    )
}
