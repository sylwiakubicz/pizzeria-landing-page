import React from 'react'
import Map from './Map'
import './mapSection.css'

const MapSection = () => {
    return (
        <div className='mapSection'>
            <Map />
            <img src='/images/placeholderImage.jpg' />
        </div>
    )
}

export default MapSection