import React from 'react';
import CircularSliderItem from './CircularSliderItem';
import { useCarouselData } from '../../hooks/useCarouselData';

const CircularSliderWraper = ({activeIndex, rotate, handleMauseEnter, handleMauseLeave}) => {

  const { carouselData } = useCarouselData()

  return (
      <div  className='carousel' 
            style={{ transform: `rotate(-${rotate}deg)`}} 
            onMouseEnter={handleMauseEnter} 
            onMouseLeave={handleMauseLeave}
            aria-live="polite"
            tabIndex="0"
            aria-label="carousel-title" 
            role="region"
      >
        {
          carouselData.map((pizza, index) => (
            <CircularSliderItem key={pizza.name} index={index + 1} activeIndex={activeIndex} imageSrc={pizza.image} aria-label={`Pizza ${pizza.name}`}/>
          ))
        }
      </div>
  );
}

export default CircularSliderWraper;
