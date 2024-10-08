import React from 'react'
import CircularSliderControlsItem from './CircularSliderControlsItem'
import { useCarouselData } from '../../hooks/useCarouselData'

const CircularSliderControlsWraper = ({activeIndex, handleControlClick}) => {

  const {carouselData} = useCarouselData()

  return (
    <div className='controls' aria-label="Pizza slider controls">
      {
        carouselData.map((pizza, index) => {
          const isSelected = activeIndex === index + 1;
          return (
            <CircularSliderControlsItem 
              key={pizza.name} 
              index={index + 1} 
              activeIndex={activeIndex} 
              handleControlClick={handleControlClick} 
              imageSrc={pizza.image} 
              aria-label={`Pizza ${index + 1} control`} 
              aria-selected={isSelected}/>
          )
      })
      }
    </div>
  )
}

export default CircularSliderControlsWraper