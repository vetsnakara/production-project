import type { WebpackPluginInstance } from "webpack";
import type { BuildOptions } from "./types/config";

import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new webpack.ProgressPlugin();

  const htmlPlugin = new HTMLWebpackPlugin({
    template: paths.html,
  });

  const cssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  });

  return [progressPlugin, htmlPlugin, cssExtractPlugin];
}
