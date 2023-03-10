import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../types/profile';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
    test('success', async () => {
        const data: Profile = {
            username: 'admin',
            first: 'Firstname',
            lastname: 'Lastname',
            age: 33,
            city: 'Moscow',
            country: Country.Belarus,
            currency: Currency.USD,
            avatar: '',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data,
            })
        );

        const result = await thunk.callThunkAction();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunkAction();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
