import {
    ChangeEvent,
    FC,
    memo,
    SelectHTMLAttributes,
    useCallback,
    useMemo,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

type HTMLSelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'onChange'
>;

export interface SelectProps extends HTMLSelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readOnly?: boolean;
    onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo((props) => {
    const {
        className,
        label,
        options,
        value,
        readOnly = false,
        onChange,
        ...restProps
    } = props;

    const optionList = useMemo(
        () =>
            options?.map(({ value, content }) => (
                <option className={cls.option} key={value} value={value}>
                    {content}
                </option>
            )),
        [options]
    );

    const onChangeHandler = useCallback(
        ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(value);
        },
        [onChange]
    );

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                disabled={readOnly}
                onChange={onChangeHandler}
                {...restProps}
            >
                {optionList}
            </select>
        </div>
    );
});
