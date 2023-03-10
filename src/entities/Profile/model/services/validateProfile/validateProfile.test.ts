import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfile } from './validateProfile';

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

describe('validateProfile', () => {
    test('success', async () => {
        const result = validateProfile(data);
        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const invalidData: Profile = { ...data, first: '', lastname: '' };
        const result = validateProfile(invalidData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const invalidData: Profile = { ...data, age: undefined };
        const result = validateProfile(invalidData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const invalidData: Profile = { ...data, country: undefined };
        const result = validateProfile(invalidData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const invalidData: Profile = {};
        const result = validateProfile(invalidData);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
