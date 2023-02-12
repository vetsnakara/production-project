import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div className={cls.notFoundPage}>
            {t('notFoundPage')}
        </div>
    );
}
