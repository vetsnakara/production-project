import { AsyncThunk } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

type ActionCreatorType<Return, Arg> = AsyncThunk<
    Return,
    Arg,
    { extra: ThunkExtraArg }
>;

export class TestAsyncThunk<Return, Arg> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg>;
    extra: ThunkExtraArg;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg>,
        extra: ThunkExtraArg
    ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
        this.extra = extra;
    }

    async callThunkAction(arg: Arg) {
        const action = this.actionCreator(arg);

        const result = await action(this.dispatch, this.getState, this.extra);

        return result;
    }
}
