import React from 'react';

import { RoutePath } from 'app/providers/Router/config/routerConfig';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'linkMainPage',
        icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'linkAboutPage',
        icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'linkProfilePage',
        icon: ProfileIcon,
        authOnly: true,
    },
];
