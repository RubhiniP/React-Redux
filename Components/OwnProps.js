import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/iceCreams/icecreamActions";

function OwnProps(props){
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.itemFunction}>Buy Items</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.icecream.numberOfIcecreams;
    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const itemDispatch = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIcecream());

    return{
        itemFunction: itemDispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnProps);