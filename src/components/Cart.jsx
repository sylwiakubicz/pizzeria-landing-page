import React from 'react'

const Cart = () => {
    return (
    <div className='cart'>
        <h2>My order</h2>
        <div>
            <h3>Cart is empty</h3>
            <p>Add a dish to continue</p>
        </div>
        <span>
            <p>Order</p>
            <p>0.00$</p>
        </span>
    </div>
    )
}

export default Cart