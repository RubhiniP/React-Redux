import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducers";
import IcecreamReducer from "./iceCreams/icecreamReducers";
import CookieReducer from "./cookies/cookiesReducers";
import UserReducer from "./users/userReducers";
import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer,
    cookies: CookieReducer,
    user: UserReducer,
    todos: todosReducer,
    filters: filtersReducer
});

export default rootReducer;