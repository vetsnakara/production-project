import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions): RuleSetRule {
    const { isDev } = options;

    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
