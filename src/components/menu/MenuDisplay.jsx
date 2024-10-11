import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategory, selectMenuData } from '../../redux/menu/menuSlice';

const MenuDisplay = () => {
    const selectedCategory = useSelector(selectCategory);
    const menuData = useSelector(selectMenuData);

    if (!menuData) return <p>Loading...</p>;

    let itemsToDisplay = [];
    switch (selectedCategory) {
        case 'pizzas':
        itemsToDisplay = menuData.pizzas;
        break;
        case 'drinks':
        itemsToDisplay = menuData.drinks;
        break;
        case 'additionals':
        itemsToDisplay = menuData.additionals;
        break;
        default:
        break;
    }

    return (
        <div className="menuDisplay">
        {itemsToDisplay.map((item, index) => (
            <div key={index} className="menuItem">
            <h3>{item.name}</h3>
            {item.price && typeof item.price === 'object' ? (
                <p>Small: ${item.price.small} | Large: ${item.price.large}</p>
            ) : (
                <p>Price: ${item.price}</p>
            )}
            {item.ingredients && <p>Ingredients: {item.ingredients.join(', ')}</p>}
            </div>
        ))}
        </div>
    );
}

export default MenuDisplay;
