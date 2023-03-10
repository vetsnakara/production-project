export enum BuildMode {
    Production = 'production',
    Development = 'development',
}
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;
    apiUrl: string;
    project: 'frontend' | 'jest' | 'storybook';
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}
