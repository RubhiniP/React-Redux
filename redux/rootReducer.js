import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducers";
import IcecreamReducer from "./iceCreams/icecreamReducers";
import CookieReducer from "./cookies/cookiesReducers";

const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer,
    cookies: CookieReducer
});

export default rootReducer;