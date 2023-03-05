import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    // const isLoading = useSelector(getProfileIsLoading);
    // const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button theme={ButtonTheme.OUTLINED} className={cls.editBtn}>
                    {t('editProfile')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('profileFirstNamePlaceholder')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('profileLastNamePlaceholder')}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
