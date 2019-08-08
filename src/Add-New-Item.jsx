import React from 'react';

const { useRef } = React;
const NewItem = ({ onAddNewItem }) => {
    const inputRef = useRef();
    const onSubmit = e => {
        e.preventDefault();
        onAddNewItem(inputRef.current.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input required ref={inputRef} />
            <button>+</button>
        </form>
    );
};

export default NewItem;
