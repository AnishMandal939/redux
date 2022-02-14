import { configureStore } from '@reduxjs/toolkit';
import { customReducer } from './Reducer';
const Store = configureStore({
    reducer: {
        // pass multiple reducers here, before we used to creat a root reducer and pass it here as the second argument to configureStore
        custom: customReducer,
        // now to wrap component inside Provider we need to pass the store to the component
    },
});

export default Store;