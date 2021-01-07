import React from 'react';
import './Card.scss';

export default function Card({logo, title}) {
    return (
        <div className="card">
            <img className="card-logo" alt="technologies logos" src={logo} />
            <h2 className="card-title">{title}</h2>
        </div>
    )
}
