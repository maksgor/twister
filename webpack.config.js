const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';
const PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;

module.exports = {
  entry: {
    auth: path.resolve('./src/frontend/pages/auth'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'static/build'),
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /(node_modules)/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: 'style-loader!css-loader!less-loader',
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src/frontend'),
      path.resolve(PROJECT_DEPS, 'node_modules'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', 'css', 'less', 'scss'],
  },
  resolveLoader: {
    modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ].concat(production ? [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: false,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi],
    }),
  ] : []),
};
