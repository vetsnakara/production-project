import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectOption, SelectProps } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
    value?: Country;
    onChange?: (value: Country) => void;
}

const options: SelectOption[] = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const { value, onChange, ...restProps } = props;

    const { t } = useTranslation();

    const handleChange = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <Select
            value={value}
            label={t('countryLabel')}
            options={options}
            onChange={handleChange}
            {...restProps}
        />
    );
});
