import { RuleSetRule } from "webpack"

export function buildTsLoader(): RuleSetRule {
    return  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
}