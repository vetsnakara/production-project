import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from '../../types/profile';
import { getProfileData } from './getProfileData';

const profileData: Profile = {
    username: 'admin',
    first: 'Firstname',
    lastname: 'Lastname',
    age: 33,
    city: 'Moscow',
    country: Country.Belarus,
    currency: Currency.USD,
    avatar: '',
};

describe('getProfileData', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(profileData);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBeUndefined();
    });
});
