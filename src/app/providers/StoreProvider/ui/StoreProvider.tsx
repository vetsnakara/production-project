import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '../config/StateSchema';
import { createStore } from '../config/store';

interface StoreProviderPrpos {
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderPrpos> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();

    const store = createStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    );

    return <Provider store={store}>{children}</Provider>;
};
