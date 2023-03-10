import { CSSProperties, FC, ImgHTMLAttributes, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    className?: string;
    alt?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, src, size = 100, alt, ...restProps } = props;

    const styles: CSSProperties = useMemo(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    );

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
            {...restProps}
        />
    );
});
