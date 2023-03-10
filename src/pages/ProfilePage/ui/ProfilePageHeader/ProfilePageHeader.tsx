import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileReadOnly } from 'entities/Profile/model/selectors';

import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ProfilePageHeader.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            <div className={cls.buttons}>
                {readOnly ? (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('editProfile')}
                    </Button>
                ) : (
                    <>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                            {t('saveEditProfile')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('cancelEditProfile')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
});
