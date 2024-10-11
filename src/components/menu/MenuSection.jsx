import React from 'react'
import MenuCategories from './MenuCategories';
import "./menu.css"

const MenuSection = () => {
    return (
        <section id="menu" className='menuSection'> 
            <h3>OUR MENU</h3>
            <h2>Discover Our Menu</h2>
            <MenuCategories />
        </section>
    )
}

export default MenuSection;