const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin')
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path')
const loaders = require('./loaders.json').loaders

function getEntries() {
  const tempObj = {}
  const tempLoaders = loaders.map(loader => {
    return tempObj[loader] = path.resolve(__dirname, 'src/' + loader + '.sass');
  });

  return tempObj
}

module.exports = {
  context: __dirname,
  name: 'css',
  entry: getEntries(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { minimize: true } },
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    // new StyleLintPlugin(options),
    new MiniCssExtractPlugin('[name].css'),
    new LiveReloadPlugin()
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'examples')
    ],
    compress: true,
    hot: true,
    open: true,
    port: 3000
  }
}
