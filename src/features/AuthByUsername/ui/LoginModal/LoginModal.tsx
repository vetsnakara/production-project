import { FC, Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm';
import { Loader } from 'shared/ui/Loader/Loader';

export const LoginModal: FC = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();

    const handleModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    return (
        <>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleModalOpen}
            >
                {t('enterBtn')}
            </Button>
            <Modal lazy isOpen={isAuthModalOpen} onClose={handleModalClose}>
                <Suspense fallback={<Loader />}>
                    <LoginForm />
                </Suspense>
            </Modal>
        </>
    );
};
