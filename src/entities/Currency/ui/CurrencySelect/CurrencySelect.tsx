import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectOption, SelectProps } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options: SelectOption[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const { value, onChange, ...restProps } = props;

    const { t } = useTranslation();

    const handleChange = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <Select
            value={value}
            label={t('currencyLabel')}
            options={options}
            onChange={handleChange}
            {...restProps}
        />
    );
});
