import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const buyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <p>House: {house} <button onClick={buyAHouse}>Buy a house</button></p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;