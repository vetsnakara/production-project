import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createStore } from '../config/store';

interface StoreProviderPrpos {
    initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderPrpos> = (props) => {
    const { children, initialState } = props;

    const store = createStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
