import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, '/../app/index.js'),
  build: path.join(__dirname, '/../build'),
};

const productionConfig = merge([
  {
    entry: {
      bundle: './app/index.js',
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: PATHS.build,
      publicPath: '/build/'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest'
      })
    ]
  },
]);

export default productionConfig;
