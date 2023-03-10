import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed = false } = props;
    const { path, text, icon: Icon, authOnly } = item;

    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();

    if (authOnly && !isAuth) return null;

    return (
        <div
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <AppLink
                to={path}
                theme={AppLinkTheme.INVERTED}
                className={cls.item}
            >
                <Icon className={cls.icon} />
                <span className={cls.link}>{t(text)}</span>
            </AppLink>
        </div>
    );
});
