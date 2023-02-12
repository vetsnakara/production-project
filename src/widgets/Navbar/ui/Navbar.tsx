import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.INVERTED}>
                    {t('linkMainPage')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
                    {t('linkAboutPage')}
                </AppLink>
            </div>
        </div>
    );
}
