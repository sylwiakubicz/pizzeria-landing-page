import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setCategory, selectCategory } from '../../redux/menu/menuSlice'

function MenuCategories() {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(selectCategory);

    const handleCategoryClick = (category) => {
        dispatch(setCategory(category));
    };

    return (
        <div className='menuCategories'>
            <button 
                className={selectedCategory === 'pizzas' ? 'active' : ''}
                onClick={() => handleCategoryClick('pizzas')}>
                    Pizzas
            </button>
            <button 
                className={selectedCategory === 'drinks' ? 'active' : ''}
                onClick={() => handleCategoryClick('drinks')}>
                    Drinks
            </button>
            <button 
                className={selectedCategory === 'additionals' ? 'active' : ''}
                onClick={() => handleCategoryClick('additionals')}>
                    Additionals
            </button>
        </div>
    )
}

export default MenuCategories