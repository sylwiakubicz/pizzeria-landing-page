import React from 'react'

const CircularSliderItem = ({activeIndex, index, imageSrc}) => {

  return (
    <div className={`slide ${activeIndex === index ? 'active' : ''}`}>
      <img src={imageSrc} alt={`Pizza ${index + 1}`}/>
    </div> 
  )
}

export default CircularSliderItem