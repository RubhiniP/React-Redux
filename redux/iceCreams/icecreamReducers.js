import { BUY_ICECREAM } from "./icecreamTypes"

const initialValue = {
    numberOfIcecreams: 20
}

const IcecreamReducer = (state = initialValue, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
        default:
            return state;
    }
}

export default IcecreamReducer;