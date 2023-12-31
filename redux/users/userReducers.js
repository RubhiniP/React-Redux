import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    errorMessage: ''
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                errorMessage: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default UserReducer;