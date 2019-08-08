import React from 'react';
import AddNewItem from './Add-New-Item';
import { context } from './App';
const { useContext } = React;
const List = () => {
    const { items, deleteItem } = useContext(context);
    return (
        <ul>
            <AddNewItem />
            {items.map((item, i) => (
                <li key={i}>
                    {item}
                    <button onClick={() => deleteItem(i)}>x</button>
                </li>
            ))}
        </ul>
    );
};

export default List;
