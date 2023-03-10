import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from '../../types/profile';
import { getProfileForm } from './getProfileForm';

const profileForm: Profile = {
    username: 'admin',
    first: 'Firstname',
    lastname: 'Lastname',
    age: 33,
    city: 'Moscow',
    country: Country.Belarus,
    currency: Currency.USD,
    avatar: '',
};

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profileForm,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(profileForm);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBeUndefined();
    });
});
