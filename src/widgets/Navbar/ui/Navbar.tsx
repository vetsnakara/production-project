import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {authData ? (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={handleLogout}
                    >
                        {t('logoutBtn')}
                    </Button>
                ) : (
                    <>
                        <Button
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={handleModalOpen}
                        >
                            {t('enterBtn')}
                        </Button>
                        <LoginModal
                            isOpen={isAuthModalOpen}
                            onClose={handleModalClose}
                        />
                    </>
                )}
            </div>
        </div>
    );
});
