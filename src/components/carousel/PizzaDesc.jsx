import React from 'react'
import { useCarouselData } from '../../hooks/useCarouselData';

function PizzaDesc({currentPizzaIndex}) {

    const menuData = useCarouselData()

    return (
        <div className='pizzaDesc'>
            <h3 className='gradientText'>{menuData.carouselData[currentPizzaIndex].name}</h3>
            <p>{menuData.carouselData[currentPizzaIndex].ingredients.join(', ')}</p>    
        </div>
    )
}

export default PizzaDesc