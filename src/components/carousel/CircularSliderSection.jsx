import React from 'react'
import CircularSliderWraper from './CircularSliderWraper'
import CircularSliderControlsWraper from './CircularSliderControlsWraper'
import '../../styles/circularSlider.css'
import { useCarousel } from '../../hooks/useCarousel';


const CircularSliderSection = () => {

  const { rotate, j, handleMauseEnter, handleMauseLeave, handleControlClick } = useCarousel(); 

  return (
    <section className='slideSection'>
      <CircularSliderWraper rotate={rotate} activeIndex={j.current} handleMauseEnter={handleMauseEnter} handleMauseLeave={handleMauseLeave}/>
      <CircularSliderControlsWraper activeIndex={j.current} handleControlClick={handleControlClick}/>
    </section>
  )
}

export default CircularSliderSection