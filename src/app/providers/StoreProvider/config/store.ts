import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { StateSchema } from '../config/StateSchema';

export function createStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
