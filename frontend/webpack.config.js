const path = require('path');
const basePath = path.join(__dirname, 'public');
const distPath = path.join(__dirname, 'public', 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({
    path: '.env.test'
  });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development'
  });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: distPath,
      filename: 'bundle.js',
      publicPath: '/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=/images/[name].[ext]'
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: basePath,
      historyApiFallback: true,
      publicPath: '/dist/',
      proxy: {
        '/api/': {
          target: 'http://localhost:5000',
          secure: false,
          changeOrigin: true
        }
      }
    }
  };
};
