import React from 'react'

const CircularSliderControlsItem = ({index, activeIndex, handleControlClick, imageSrc}) => {

  const handleClick = (e) => {
    e.preventDefault();
    handleControlClick(index)
  }

  const isSelected = activeIndex === index;
  
  return (
    <a 
      href="#" 
      data-index={index} 
      className={activeIndex === index ? 'active' : ''} 
      onClick={handleClick}
      aria-label={`Pizza ${index}`} 
      aria-selected={isSelected}
      role="tab">
      <img src={imageSrc} alt={`Pizza ${index + 1}`}/>
    </a>
  )
}

export default CircularSliderControlsItem