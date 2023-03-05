import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const counterState = {
            value: 10,
        };

        const state: DeepPartial<StateSchema> = {
            counter: counterState,
        };

        expect(getCounter(state as StateSchema)).toEqual(counterState);
    });
});
