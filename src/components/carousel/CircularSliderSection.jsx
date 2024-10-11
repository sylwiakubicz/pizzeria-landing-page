import React from 'react'
import CircularSliderWraper from './CircularSliderWraper'
import CircularSliderControlsWraper from './CircularSliderControlsWraper'
import './circularSlider.css'
import { useCarousel } from '../../hooks/useCarousel';


const CircularSliderSection = () => {

  const { rotate, j, handleMauseEnter, handleMauseLeave, handleControlClick } = useCarousel(8); 

  return (
    <section className='slideSection' id="menu" aria-labelledby="menu-title">
      <h2 id="menu-title" className="visually-hidden">Menu</h2>
      <CircularSliderWraper 
        rotate={rotate} 
        activeIndex={j.current} 
        handleMauseEnter={handleMauseEnter} 
        handleMauseLeave={handleMauseLeave} 
        aria-label="Circular slider showcasing menu items"/>
      <CircularSliderControlsWraper 
        activeIndex={j.current} 
        handleControlClick={handleControlClick} 
        aria-label="Circular slider controls"/>
    </section>
  )
}

export default CircularSliderSection