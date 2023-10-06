import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['SAVED_ADD_REMOVE', 'ALL_SAVED_REMOVED'],
                ignoredPaths: ['saved'],
            },
        }),
})