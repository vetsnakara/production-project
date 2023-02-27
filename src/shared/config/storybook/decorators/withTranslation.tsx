import { Suspense } from 'react';
import Storybook from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'shared/config/i18n/i18n';

export const withTranslation = () => (Story: Storybook.Story) =>
    (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">
                <Story />
            </Suspense>
        </I18nextProvider>
    );
