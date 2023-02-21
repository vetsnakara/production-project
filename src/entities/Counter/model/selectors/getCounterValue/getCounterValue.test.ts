import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('', () => {
        const counterState = {
            value: 10,
        };

        const state: DeepPartial<StateSchema> = {
            counter: counterState,
        };

        expect(getCounterValue(state as StateSchema)).toEqual(counterState.value);
    });
});
