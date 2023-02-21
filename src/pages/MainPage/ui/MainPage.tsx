import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('mainPage')}
            <hr />
            <BugButton />
            <Counter />
        </div>
    );
}

export default MainPage;
