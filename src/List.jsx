import React from 'react';

const List = ({ items }) => (
    <ul>
        <h3>Productions</h3>
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

export default List;
