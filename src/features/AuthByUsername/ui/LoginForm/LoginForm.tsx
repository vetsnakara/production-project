import { memo, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ReducerList } from 'app/providers/StoreProvider';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, onSuccess } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const handleLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('authFormTitle')} />
                {error && (
                    <Text
                        text={t('authErrorMessage')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autoFocus
                    placeholder={t('enterUsername')}
                    className={cls.input}
                    value={username}
                    onChange={handleChangeUsername}
                />
                <Input
                    type="password"
                    placeholder={t('enterPassword')}
                    className={cls.input}
                    value={password}
                    onChange={handleChangePassword}
                />
                <Button
                    theme={ButtonTheme.OUTLINED}
                    className={cls.loginBtn}
                    onClick={handleLoginClick}
                    disabled={isLoading}
                >
                    {t('enterBtn')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
