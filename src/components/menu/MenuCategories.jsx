import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setCategory, selectCategory } from '../../redux/menu/menuSlice'

const MenuCategories = () => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(selectCategory);

    const handleCategoryClick = (category) => {
        dispatch(setCategory(category));
    };

    return (
        <div className='menuCategories' role="navigation" aria-label="Menu Categories">
            <button 
                className={selectedCategory === 'pizzas' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('pizzas')}
                aria-pressed={selectedCategory === 'pizzas'}
                aria-label="Select Pizzas Category">
                    Pizzas
            </button>
            <button 
                className={selectedCategory === 'drinks' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('drinks')}
                aria-pressed={selectedCategory === 'drinks'}
                aria-label="Select Drinks Category">
                    Drinks
            </button>
            <button 
                className={selectedCategory === 'additionals' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('additionals')}
                aria-pressed={selectedCategory === 'additionals'}
                aria-label="Select Additionals Category">
                    Additionals
            </button>
        </div>
    )
}

export default MenuCategories