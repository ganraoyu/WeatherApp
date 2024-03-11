import React from 'react'
import img1 from './assets/Humidity.png'

export function Humidity() {
    return (
        <div id="Humidity">
            <img src={img1} id="HumidityImage"/>
            <p>50%</p>
        </div>
    )
}