import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = () => {
    return (
    <div className='wraper'>
        <h2 className='sidebarHeader'>My order</h2>
        <div className='emptyCart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <h3>Cart is empty</h3>
            <p>Add a dish to continue</p>
        </div>
        <div className='costSummary'>
            <p>Order</p>
            <p>0.00 $</p>
        </div>
    </div>
    )
}

export default Cart