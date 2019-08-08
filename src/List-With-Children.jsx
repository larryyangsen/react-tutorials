import React from 'react';

const ListWithChildren = ({ items, children }) => (
    <ul>
        <h3>Productions</h3>
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        {children}
    </ul>
);

export default ListWithChildren;
