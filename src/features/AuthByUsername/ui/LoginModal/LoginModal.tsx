import { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';

import { LoginForm } from '../LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
