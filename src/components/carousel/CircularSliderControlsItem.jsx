import React from 'react'

const CircularSliderControlsItem = ({index, activeIndex, handleControlClick, pizzaTitle, imageSrc}) => {

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
      <p className="buttonText">{pizzaTitle}</p>
    </a>
  )
}

export default CircularSliderControlsItem