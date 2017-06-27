import merge from 'webpack-merge';

import commonConfig from './webpack/webpack.config.common';
import developmentConfig from './webpack/webpack.config.development';
import productionConfig from './webpack/webpack.config.production';

export default (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }
  return merge(commonConfig, developmentConfig);
};
