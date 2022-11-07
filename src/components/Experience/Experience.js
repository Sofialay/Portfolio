import React from 'react'
import './Experience.scss'

const Experience = () => {

    const experienceInfo = [
        {
            name: 'Front End Developer',
            company: 'Paisanos',
            url: 'https://paisanos.io/',
            date: 'August 2022 - current',
            description: 'Currently one of my main tasks consists of developing a wallet app for one of our main clients.',
            technologies: ['React native', 'Typescript', 'Storybook']
        },
        {
            name: 'Front End Developer',
            company: 'Uma Health AI',
            url: 'https://umasalud.com/',
            date: 'December 2020 - August 2022',
            description: 'My job at Uma is to make and mantain interfaces for artificial intelligence models in a patient webapp.',
            technologies: ['React JS', 'Firebase', 'Styled-components', 'Storybook', 'Cypress']
        },
        {
            name: 'Web development Bootcamp',
            company: 'Ada ITW',
            url: 'https://adaitw.org/',
            date: 'February 2020 - November 2020',
            description: `I learned to develop applications in Ada's intensive bootcamp, where I had more than 400 hours of practice and theory.`,
            technologies: ['HTML', 'CSS', 'Javascript', 'React JS', 'Jest']
        }
    ]

    return (
        <section className='section-info'>
            <h2 className='fs-600'>Experience | Education</h2>
            {experienceInfo.map((item, index) => {
                return (
                    <section className='experience' key={index}>
                        <h3 className='primary-color fs-400'>
                            {item.name} | <a href={item.url} target='_blank' rel='noreferrer'>
                                {item.company}
                            </a>
                        </h3>
                        <p className='fs-300'>{item.date}</p>
                        <p> 
                            {item.description}
                        </p>
                        <div className='technologiesList'>
                            {item.technologies.map((tech, i) => <p key={i} className='fs-300 bg-secondary'>{tech}</p>)}
                        </div>
                    </section> 
                )
            })}
        </section>
    )
}

export default Experience
