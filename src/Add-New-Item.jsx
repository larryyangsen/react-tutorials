import React from 'react';
import { context } from './App';
const { useContext } = React;

const { useRef } = React;
const NewItem = () => {
    const { addNewItem } = useContext(context);
    const inputRef = useRef();
    const onSubmit = e => {
        e.preventDefault();
        addNewItem(inputRef.current.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input required ref={inputRef} />
            <button>+</button>
        </form>
    );
};

export default NewItem;
