import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const counterState: CounterSchema = { value: 10 };

        expect(
            counterReducer(counterState, counterActions.decrement())
        ).toEqual({ value: 9 });
    });

    test('increment', () => {
        const counterState: CounterSchema = { value: 10 };

        expect(
            counterReducer(counterState, counterActions.increment())
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
