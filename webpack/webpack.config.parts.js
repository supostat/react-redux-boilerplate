import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

exports.devServer = ({host, port}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    hot: true,
    host, // Defaults to `localhost` 
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: false,
    },
  },
});

exports.htmlWebpackPlugin = () => 
  new HtmlWebpackPlugin({
    title: 'Webpack demo',
  });

exports.eslintConfig = () => 
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        fix: false,
          outputReport: {
            filePath: 'checkstyle.xml',
            formatter: require('eslint/lib/formatters/checkstyle'),
          },
        },
      },
    })

exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js?$/,
        include,
        exclude,
        enforce: 'pre',
        use: ['eslint-loader'],
        options
      },
    ],
  },
});

exports.babelJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {modules: false}], "stage-0", "react"],
              "plugins": [
                "react-hot-loader/babel"
              ]
            } 
          }, 'eslint-loader'],
      },
    ],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.pcss$/,
        include,
        exclude,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                ctx: {
                  cssnext: {},
                  cssnano: {},
                  autoprefixer: {}
                }
              }
            }
          }
        ],
      },
    ],
  },
});