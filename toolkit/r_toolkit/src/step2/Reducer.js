import {createReducer} from '@reduxjs/toolkit';

// creating initial state
const initialState = {
    // pass your initial state here
    c:0,
};
// before we used to do something like 
// temp = (state, action) => {
//     action.type="Increment"; // this is a hack to make sure we can use the same action type as in the reducer below 
//     // action.payload = {} // whith the help of payload we can pass parameters to the reducer
//     state.c = action.payload;
// }
// now we can do something like below
export const customReducer = createReducer(initialState, {
    // pass your reducers here
    increment: (state, action) => {
        state.c += 1;
        // take input from user 
        // state.c = action.payload;
    },
    incrementByValue: (state, action) => {
        // state.c += 1;
        // take input from user 
        state.c += action.payload;
    },

    decrement: (state) => {
        state.c -= 1;
    }
    // we can call above function using help of dispatch

}); // reducer is a reducer function that takes the current state and an action, and returns the new state. and takes two objects as arguments.