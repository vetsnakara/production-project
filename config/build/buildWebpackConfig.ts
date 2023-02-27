import type { Configuration } from 'webpack';
import type { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,

        entry: paths.entry,

        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },

        module: {
            rules: buildLoaders(options),
        },

        plugins: buildPlugins(options),

        resolve: buildResolvers(options),

        ...(isDev && {
            devtool: 'inline-source-map',
            devServer: buildDevServer(options),
        }),
    };
}
