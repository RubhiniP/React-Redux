import React from "react";
import { useState } from "react";
import { buyIcecream } from "../redux/iceCreams/icecreamActions";
import { connect } from "react-redux";

function NewIcecreamContainer(props){
    const [ number, setNumber ] = useState(1);
    return(
        <div>
            <h2>NewIcecreamContainer Number of Icecreams - {props.numberOfIcecreams}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyIcecream(number)}>Buy {number} {number > 1 ? "Icecreams" : "Icecream"}</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numberOfIcecreams: state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIcecream: (number) => dispatch(buyIcecream(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIcecreamContainer);