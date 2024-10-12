import React, { useEffect } from 'react'
import CircularSliderWraper from './CircularSliderWraper'
import CircularSliderControlsWraper from './CircularSliderControlsWraper'
import './circularSlider.css'
import { useCarousel } from '../../hooks/useCarousel';
import PizzaDesc from './PizzaDesc';


const CircularSliderSection = () => {

  const { rotate, j, handleMauseEnter, handleMauseLeave, handleControlClick } = useCarousel(8); 
  useEffect(() => {
    console.log("current index: " + j.current)
  }, [j.current])
  return (
    <section className='slideSection' id="pizzas" aria-labelledby="menu-title">
      <h2 id="menu-title" className="visually-hidden">Menu</h2>
      <CircularSliderWraper 
        rotate={rotate} 
        activeIndex={j.current} 
        handleMauseEnter={handleMauseEnter} 
        handleMauseLeave={handleMauseLeave} 
        aria-label="Circular slider showcasing menu items"/>
        <PizzaDesc currentPizzaIndex={j.current - 1}/>
      <CircularSliderControlsWraper 
        activeIndex={j.current} 
        handleControlClick={handleControlClick} 
        aria-label="Circular slider controls"/>
    </section>
  )
}

export default CircularSliderSection