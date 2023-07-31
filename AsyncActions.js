const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

//state
const initialState = {
    loading: false,
    users: [],
    errorMessage: ''
}

//action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                errorMessage: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                errorMessage: action.payload
            }
    }
}

//async action creator returns a function instead of an object
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data will contain the details of all the posts
            const users = response.data.map(user => user.name)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message will contain the error message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers());
