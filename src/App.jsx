import React from 'react';
import List from './List';

const { useState, createContext } = React;

export const context = createContext();
const { Provider } = context;

const App = () => {
    const [items, setItems] = useState([
        'Potion',
        'Ether',
        'Phoenix Down',
        'Tent'
    ]);

    const addNewItem = value => {
        // productions.push(value);
        // setProdutions(productions);
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
                <Provider value={{ items, addNewItem, deleteItem }}>
                    <List />
                </Provider>
            </div>
        </div>
    );
};

export default App;
