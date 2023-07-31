import React from 'react';
import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <div>
            <h2>Cake Shop - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);