import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/iceCreams/icecreamActions";

function IcecreamContainer(){
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Number of Icecreams - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    );
}

export default IcecreamContainer;