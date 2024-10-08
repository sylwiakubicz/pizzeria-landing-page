import React from 'react'

const CircularSliderItem = ({activeIndex, index, imageSrc}) => {

  return (
    <div 
      className={`slide ${activeIndex === index ? 'active' : ''}`} 
      tabIndex={activeIndex === index ? 0 : -1} 
      aria-labelledby={`slide-label-${index}`} 
      role="tabpanel"
    >
      <img src={imageSrc} alt={`Pizza ${index + 1}`} id={`slide-label-${index}`}/>
    </div> 
  )
}

export default CircularSliderItem