import React from 'react'
import Map from './Map'
import './mapSection.css'

const MapSection = () => {
    return (
        <section className='mapSection' id="map">
            <Map />
            <img src='/images/placeholderImage.jpg' />
        </section>
    )
}

export default MapSection