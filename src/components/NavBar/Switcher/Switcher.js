import React from 'react'
import './Switcher.scss'

export const Switcher = ({ action }) => {
    return (
        <label id="switch" className="switch">
            <input type="checkbox" className="slider" onClick={()=> action(true)}/>
            <span className="slider round"></span>
        </label>
    )
}
