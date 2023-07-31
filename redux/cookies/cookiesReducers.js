import { BUY_COOKIES } from "./cookiesTypes"

const initialValue = {
    numberOfCookies: 30
}

const CookieReducer = (state = initialValue, action) => {
    switch(action.type){
        case BUY_COOKIES:
            return{
                ...state,
                numberOfCookies: state.numberOfCookies - 1
            }
        default:
            return state;
    }
}

export default CookieReducer;