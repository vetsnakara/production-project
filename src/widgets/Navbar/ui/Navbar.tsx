import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={onModalClose}
            // eslint-disable-next-line i18next/no-literal-string
            >
                Hello world
            </Modal>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onModalOpen}
                >
                    {t('enterBtn')}
                </Button>
            </div>
        </div>
    );
}
