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
        <div className='menuCategories'>
            <button 
                className={selectedCategory === 'pizzas' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('pizzas')}>
                    Pizzas
            </button>
            <button 
                className={selectedCategory === 'drinks' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('drinks')}>
                    Drinks
            </button>
            <button 
                className={selectedCategory === 'additionals' ? 'active' : 'gradientText'}
                onClick={() => handleCategoryClick('additionals')}>
                    Additionals
            </button>
        </div>
    )
}

export default MenuCategories