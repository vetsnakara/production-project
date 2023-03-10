import React, {
    InputHTMLAttributes,
    FC,
    useState,
    useEffect,
    useRef,
    memo,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'autoFocus' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        type = 'text',
        value,
        placeholder,
        onChange,
        className,
        autoFocus = false,
        readOnly = false,
        ...restProps
    } = props;

    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef?.current?.focus();
        }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        onChange?.(value);
        setCaretPosition(value.length);
    };

    const handleSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    const isCaretVisible = !readOnly;

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    readOnly={readOnly}
                    className={cls.input}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    {...restProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: caretPosition * 9 }}
                    />
                )}
            </div>
        </div>
    );
});
