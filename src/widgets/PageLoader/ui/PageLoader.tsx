import { classNames } from 'shared/lib/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}
