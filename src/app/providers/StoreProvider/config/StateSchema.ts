import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

import { LoginSchema } from 'features/AuthByUsername';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type ReducersMap = ReducersMapObject<StateSchema>;

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

export type ReducerListEntry = [StateSchemaKey, Reducer];

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
