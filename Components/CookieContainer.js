import React from "react";
import { connect } from "react-redux";
import { buyCookies } from "../redux/cookies/cookiesActions";

function CookieContainer(props){
    return(
        <div>
            <h2>Number of Cookies - {props.numberOfCookies}</h2>
            <button onClick={props.buyCookies}>Buy Cookies</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        numberOfCookies: state.cookies.numberOfCookies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCookies: () => dispatch(buyCookies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);