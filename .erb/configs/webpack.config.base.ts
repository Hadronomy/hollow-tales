/**
 * Base webpack config used across other specific configs
 */

import webpack from 'webpack';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';
import { posix as path } from 'path';
import GoogleFontsPlugin from '@beyonk/google-fonts-webpack-plugin';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    alias: {
      '@components': path.resolve(webpackPaths.srcRendererPath, 'components'),
      '@assets': path.resolve(webpackPaths.rootPath, 'assets'),
      '@pages': path.resolve(webpackPaths.srcRendererPath, 'pages'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    // Donwload google fonts into build directory
    /*
    new GoogleFontsPlugin({
      fonts: [
        { family: "Roboto", variants: [ "400", "700italic" ], display: "block" }
      ]
    })
    */
  ],
};

export default configuration;
