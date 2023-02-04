import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";

import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || BuildMode.Development;

  const paths: BuildPaths = {
    src: path.resolve(__dirname, "src"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const isDev = mode === BuildMode.Development;

  const config = buildWebpackConfig({
    mode,
    port,
    paths,
    isDev,
  });

  return config;
};
