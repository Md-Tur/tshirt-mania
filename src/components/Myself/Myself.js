import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h4>Myself</h4>
            <p>Houe: {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;