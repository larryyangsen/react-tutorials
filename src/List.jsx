import React from 'react';
import AddNewItem from './Add-New-Item';

const List = ({ items, onDeleteItem, onAddNewItem }) => (
    <ul>
        <AddNewItem onAddNewItem={onAddNewItem} />
        {items.map((item, i) => (
            <li key={i}>
                {item}
                <button onClick={() => onDeleteItem(i)}>x</button>
            </li>
        ))}
    </ul>
);

export default List;
