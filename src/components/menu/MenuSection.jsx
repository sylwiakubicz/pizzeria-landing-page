import React from 'react'
import MenuCategories from './MenuCategories';
import "./menu.css"
import MenuDisplay from './MenuDisplay';

const MenuSection = () => {
    return (
        <section id="menu" className='menuSection'> 
            <h3>OUR MENU</h3>
            <h2>Discover Our Menu</h2>
            <MenuCategories />
            <MenuDisplay />
        </section>
    )
}

export default MenuSection;