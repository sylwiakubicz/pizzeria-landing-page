import React from 'react'
import MenuCategories from './MenuCategories';
import "./menu.css"
import MenuDisplay from './MenuDisplay';

const MenuSection = () => {
    return (
        <section id="menu" className='menuSection' role="region" aria-labelledby="menu-heading"> 
            <h3 className='gradientText'>OUR MENU</h3>
            <h2 id="menu-heading">Discover Our Menu</h2>
            <MenuCategories />
            <MenuDisplay />
        </section>
    )
}

export default MenuSection;