import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18ForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface RenderWithProvidersOptions {
    route?: string
}

export function renderWithProviders(
    component: ReactNode,
    options: RenderWithProvidersOptions = {},
) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18ForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
