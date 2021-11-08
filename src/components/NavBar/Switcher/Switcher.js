import React from 'react'
import './Switcher.scss'

export const Switcher = () => {
    return (
        <label id="switch" className="switch">
            <input type="checkbox" className="slider"/>
            <span className="slider round"></span>
        </label>
    )
}
