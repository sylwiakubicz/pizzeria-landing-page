import React from 'react'
import CircularSliderControlsItem from './CircularSliderControlsItem'
import { useCarouselData } from '../hooks/useCarouselData'

const CircularSliderControlsWraper = ({activeIndex, handleControlClick}) => {

  const {carouselData} = useCarouselData()

  return (
    <div className='controls'>
      {
        carouselData.map((pizza, index) => (
          <CircularSliderControlsItem index={index + 1} activeIndex={activeIndex} handleControlClick={handleControlClick} imageSrc={pizza.image}/>
        ))
      }
    </div>
  )
}

export default CircularSliderControlsWraper