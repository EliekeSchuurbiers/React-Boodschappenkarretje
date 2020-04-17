import React from 'react';
import List from './List'

function GroceryList(props) {
    // console.log("grocerylist", props)

    return (
        <div>
            <List items={props.items} onClick={props.onClick} />
        </div>
    )





}


export default GroceryList;