import React from 'react'
import { technologies } from '../../data/technologies'
import './Technologies.scss'

const Technologies = () => {
    return (
        <section className='section-info'>
            <h2 className='fs-600'>Technologies that I use</h2>
            <div className='technologies'>
                <code>
                    <span className='variable'>const</span> 
                    <span className='name'> technologiesList </span> 
                    <span>= [</span>
                        {technologies.map((item, index) => {
                            return <p key={index}>'{item}',</p>
                        })}
                    <span>]</span>
                </code>
            </div>
        </section>
    )
}

export default Technologies