import { BUY_ICECREAM } from "./icecreamTypes"

const initialValue = {
    numberOfIcecreams: 20
}

const IcecreamReducer = (state = initialValue, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - action.payload
            }
        default:
            return state;
    }
}

export default IcecreamReducer;