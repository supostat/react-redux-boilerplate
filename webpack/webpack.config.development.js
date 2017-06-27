import parts from './webpack.config.parts';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, '/../app/index.js'),
  build: path.join(__dirname, '/../build'),
};

const devConfig = merge([
  {
    devtool: 'inline-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/index.js'
    ],
    output: {
      filename: 'bundle.js',
      path: PATHS.build,
      publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  },
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
]);

export default devConfig;