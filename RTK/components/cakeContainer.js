import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../features/cake/cakeSlice';

function CakeContainer(){

    // const numberOfCakes = useSelector(state => state.numberOfCakes);
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    const [ number, setNumber ] = useState(1);
    return(
        <div>
            <h2>Cake Container using RTK</h2>
            <h3>Number of cakes - {numberOfCakes}</h3>
            <button onClick={() => dispatch(ordered())}>Buy Cake</button><br />
            <input type='number' name='number' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(restocked(number))}>Add {number} {number > 1 ? "Cakes" : "Cake"}</button>
        </div>
    );
}

export default CakeContainer;