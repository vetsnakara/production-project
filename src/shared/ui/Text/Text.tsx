import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = 'left',
    } = props;

    return (
        <div
            className={classNames(cls.button, {}, [
                className,
                cls[theme],
                cls[align],
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
