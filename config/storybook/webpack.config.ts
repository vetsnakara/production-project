import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';

import { buildCssLoader, buildSvgLoader } from '../build/loaders';

// extend webpack config for storybook
export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src); // absolute import paths
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config?.module?.rules) {
        // exclude rules with svg processing for svg files
        const rules = config.module.rules as RuleSetRule[];

        // eslint-disable-next-line no-param-reassign
        config.module.rules = rules.map((rule) => {
            if (/svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }

            return rule;
        });
    }

    config.module?.rules?.push(
        buildCssLoader({ isDev: true }),
        buildSvgLoader()
    );

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: 'false',
    });

    config.plugins?.push(definePlugin);

    return config;
};
