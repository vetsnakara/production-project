import Storybook from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
};

export const withStore =
    (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: Storybook.Story) =>
        (
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={{
                    ...defaultAsyncReducers,
                    ...asyncReducers,
                }}
            >
                <Story />
            </StoreProvider>
        );
