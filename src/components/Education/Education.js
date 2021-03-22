import React from 'react';
import './Education.scss';
import Card from "../Card/Card";
import iconReact from '../../assets/iconReact.png'
import iconJavascript from '../../assets/iconJavascript.png'
import iconCss from '../../assets/iconCss.png'
import iconSass from '../../assets/iconSass.png'
import iconHtml from '../../assets/iconHtml.png'

const cardItems = [
    {
        id: 1,
        logo: iconReact,
        title: 'React JS'
    },
    {
        id: 2,
        logo: iconJavascript,
        title: 'Javascript'
    },
    {
        id: 3,
        logo: iconCss,
        title: 'CSS'
    },
    {
        id: 4,
        logo: iconSass,
        title: 'SASS'
    },
    {
        id: 5,
        logo: iconHtml,
        title: 'HTML'
    }
]

export default function Education() {
    return (
        <div className="education">
            <section className="education-introduction">
                <section className="front-end">
                    <h2>2020 - Front End Development</h2>
                    <h3>I studied Front End Development on the organization Ada ITW. 400 technical hours learning the following technologies:</h3>
                </section>
            </section>
            <section className="card-container">
            {
                cardItems.map((item, index) => {
                    return(
                        <div key={index} className='cards-technologies'>
                            <Card logo={item.logo} title={item.title} />
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}
