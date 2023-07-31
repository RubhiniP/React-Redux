const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// console.log("Index.js page");

const BUY_CAKE ='BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

//state
// const initialValue = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}


//reducer (previousState, action) => newState
// const reducer = (state = initialValue, action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }

//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIcecreams: state.numOfIcecreams - 1
//             }

//         default:
//             return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        
        default: 
            return state;
    }
}

const icecreameReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreameReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();