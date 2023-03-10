import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types/config';

import {
    buildCssLoader,
    buildTsLoader,
    buildBabelLoader,
    buildSvgLoader,
    buildFileLoader,
} from './loaders';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    return [
        buildBabelLoader(options),
        buildTsLoader(),
        buildCssLoader(options),
        buildSvgLoader(),
        buildFileLoader(),
    ];
}
