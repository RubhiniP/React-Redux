import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += parseInt(action.payload)
        }
    }
})

export default cakeSlice;
export const { ordered, restocked } = cakeSlice.actions;