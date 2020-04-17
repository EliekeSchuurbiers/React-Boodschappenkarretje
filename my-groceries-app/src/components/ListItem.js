import React from 'react';

function ListItem(props) {
    console.log(props, "ListItems")



    return (
        <li
            key={props.item.id}
            className="list-item"
            onClick={() => { if (props.onClick != null) props.onClick(props.item) }}
            value={props.item.title}>
            {(props.onClick == null) ? props.item.amount + 'x ' : ''}{props.item.title}
        </li>
    )




}


export default ListItem;




