import React from 'react';

const ChangeProps = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
            <button
                onClick={() => {
                    name = 'Parker';
                }}
            >
                Change Name
            </button>
        </>
    );
};

export default ChangeProps;
