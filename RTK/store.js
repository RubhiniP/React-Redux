import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./features/cake/cakeSlice";
import userSlice from "./features/users/userSlice";

// const store = configureStore({
//     reducer: cakeSlice.reducer
// })

const store = configureStore({
 reducer: {
    cake: cakeSlice.reducer,
    user: userSlice.reducer
 }
})

export default store;