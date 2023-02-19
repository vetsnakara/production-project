import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface BuildCssLoaderOptions {
  isDev: boolean;
}

export function buildCssLoader({ isDev }: BuildCssLoaderOptions): RuleSetRule {
    return    {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) => resPath.includes('.module.'),
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
      };
}