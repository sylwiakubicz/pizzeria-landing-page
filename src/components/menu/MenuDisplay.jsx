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
        <div className="menuDisplay" role="region" aria-labelledby="menu-title">
            <h2 id="menu-title" className="visually-hidden">Menu Items</h2>
            {selectedCategory !== 'additionals' ? <p>Small | Large*</p> : <p>Price:</p>}
            {itemsToDisplay.map((item, index) => (
                <div key={index} className="menuItem">
                    <div>
                        <h3 className='gradientText'>{item.name}</h3>
                        {item.price && typeof item.price === 'object' ? (
                            <p>${item.price.small.toFixed(2)} | ${item.price.large.toFixed(2)}</p>
                        ) : (
                            <p>${item.price.toFixed(2)}</p>
                        )}
                    </div>
                    {item.ingredients && <p>{item.ingredients.join(', ')}</p>}
                </div>
            ))}
            {selectedCategory !== 'additionals' &&  (selectedCategory === "pizzas" ? <p className='addinionalInformation'>*Small: ⌀26cm | Large: ⌀40cm</p> : <p className='addinionalInformation'>*Small: 0.33l | Large: 0.5l</p>)}
        </div>
    );
}

export default MenuDisplay;
