import React, {
    InputHTMLAttributes,
    FC,
    useState,
    useEffect,
    useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'autoFocus'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        type = 'text',
        value,
        placeholder,
        onChange,
        className,
        autoFocus = false,
        ...restProps
    } = props;

    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
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

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    className={cls.input}
                    {...restProps}
                />
                <span
                    className={cls.caret}
                    style={{ left: caretPosition * 9 }}
                />
            </div>
        </div>
    );
};
