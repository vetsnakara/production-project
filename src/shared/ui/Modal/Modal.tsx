import React, {
    FC,
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import Portal from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    element?: HTMLElement;
    closeOnClickOutside?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        isOpen,
        closeOnClickOutside = true,
        lazy = false,
        element,
        onClose,
        children,
    } = props;

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const closeHandler = useCallback(() => {
        setIsClosing(true);

        if (onClose) {
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onClickOutside = useCallback(() => {
        if (closeOnClickOutside) {
            closeHandler();
        }
    }, [closeHandler, closeOnClickOutside]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        []
    );

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={element}>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onClickOutside}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
