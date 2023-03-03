import { memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { SidebarItemsList } from 'widgets/Sidebar/model/items';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                    {SidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
