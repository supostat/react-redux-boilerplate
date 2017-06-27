import parts from './webpack.config.parts';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, '/../app'),
  build: path.join(__dirname, '/../build'),
};

const commonConfig = merge([
  {
    plugins: [
      parts.htmlWebpackPlugin(),
      parts.eslintConfig(),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ]
  },
  // parts.lintJavaScript({ include: PATHS.app }),
  parts.loadCSS(),
  parts.babelJavaScript()
]);

export default commonConfig;