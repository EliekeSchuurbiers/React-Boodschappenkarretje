import React from 'react';
import List from './List'

function ShoppingCart(props) {
    // console.log(item)

    return (
        <div>

            <List items={props.items} />
        </div>
    )




}


export default ShoppingCart;