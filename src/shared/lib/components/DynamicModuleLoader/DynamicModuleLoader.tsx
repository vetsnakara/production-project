import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import {
    ReducerList,
    ReducerListEntry,
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider';

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, removeAfterUnmount = false, children } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducerListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@ADD_REDUCER ${name}` });
            }
        );
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name: StateSchemaKey) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE_REDUCER ${name}` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
