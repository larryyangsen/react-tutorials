import React from 'react';
import List from './List';

const { useState } = React;

const App = () => {
    const [items, setItems] = useState([
        'Potion',
        'Ether',
        'Phoenix Down',
        'Tent'
    ]);

    const addNewItem = value => {
        // items.push(value);
        // setItems(items);
        setItems(preProductions => preProductions.concat(value));
    };

    const deleteItem = index => {
        const toDeleteProductions = items.slice();
        toDeleteProductions.splice(index, 1);
        setItems(toDeleteProductions);
    };

    return (
        <div className="App">
            <div className="items">
                <List
                    onAddNewItem={addNewItem}
                    items={items}
                    onDeleteItem={deleteItem}
                />
            </div>
        </div>
    );
};

export default App;
