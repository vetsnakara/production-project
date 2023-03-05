import axios, { AxiosStatic } from 'axios';
import { AsyncThunk } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

type ActionCreatorType<Return, Arg, RejectValue> = AsyncThunk<
    Return,
    Arg,
    ThunkConfig<RejectValue>
>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectValue> {
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunkAction(arg: Arg) {
        const action = this.actionCreator(arg);

        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
