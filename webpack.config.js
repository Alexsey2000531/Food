'use strict';

import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './src/js/script.js',
    },
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: isProduction ? '' : '/',
      clean: true,
      assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'dist'),
          publicPath: '/',
          watch: true,
        },
        {
          directory: path.join(__dirname, 'src'),
          publicPath: '/src',
          watch: true,
        },
      ],
      compress: true,
      port: 3000,
      hot: true,
      open: true,
      watchFiles: ['./src/**/*', './index.html'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
        ...(isProduction && {
          base: './',
        }),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    corejs: 3,
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            sources: true,
          },
        },
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(svg|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: (path) => {
              if (path.filename.includes('icons')) {
                return 'img/icons/[name][ext]';
              }

              return 'img/[name][ext]';
            },
          },
        },
      ],
    },
  },
];
