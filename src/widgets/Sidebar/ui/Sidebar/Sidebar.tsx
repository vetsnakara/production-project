import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div>
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.XL}
                    square
                    onClick={onToggle}
                    className={cls.collapseBtn}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <div className={cls.items}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.INVERTED}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('linkMainPage')}
                        </span>
                    </AppLink>
                    <div className={cls.item}>
                        <AppLink
                            to={RoutePath.about}
                            theme={AppLinkTheme.INVERTED}
                            className={cls.item}
                        >
                            <AboutIcon className={cls.icon} />
                            <span className={cls.link}>
                                {t('linkAboutPage')}
                            </span>
                        </AppLink>
                    </div>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
}
