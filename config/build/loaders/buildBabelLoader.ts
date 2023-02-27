import { RuleSetRule } from 'webpack';

export function buildBabelLoader(): RuleSetRule {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };
}
