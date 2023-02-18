import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromProps');
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        console.log('hasError', hasError);

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}