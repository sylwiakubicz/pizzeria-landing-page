import React from 'react'

const CircularSliderControlsItem = ({index, activeIndex, handleControlClick, imageSrc}) => {

  const handleClick = (e) => {
    e.preventDefault();
    handleControlClick(index)
  }

  return (
    <a href="#" data-index={index} className={activeIndex === index ? 'active' : ''} onClick={handleClick}>
      <img src={imageSrc} alt={`Pizza ${index + 1}`}/>
    </a>
  )
}

export default CircularSliderControlsItem