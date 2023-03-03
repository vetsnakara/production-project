import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile | null;
    error?: string | null;
}
