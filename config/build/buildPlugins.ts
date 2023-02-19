import type { WebpackPluginInstance } from 'webpack';

import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { BuildOptions } from './types/config';

export function buildPlugins({
  isDev,
  paths,
}: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new webpack.ProgressPlugin();

  const htmlPlugin = new HTMLWebpackPlugin({
    template: paths.html,
  });

  const cssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const definePlugin = new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  });

  const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

  const bundleAnalizerPlugin = new BundleAnalyzerPlugin({
    openAnalyzer: false
  });

  const devOnlyPlugins = isDev
    ? [progressPlugin, reactRefreshWebpackPlugin, bundleAnalizerPlugin]
    : [];

  const prodOnlyPlugins = !isDev
    ? [cssExtractPlugin]
    : [];

  return [
    htmlPlugin,
    definePlugin,
    ...devOnlyPlugins,
    ...prodOnlyPlugins,
  ];
}
