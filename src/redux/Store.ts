import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import healthReducer from './SliceHealth.tsx';
import hitReducer from './SliceHit.tsx';
import languageReducer from './languageSlice';

const store:EnhancedStore = configureStore({
    reducer: {
        health: healthReducer,
        hit: hitReducer,
        language: languageReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
