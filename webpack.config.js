const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const SassLintPlugin = require('sasslint-webpack-plugin')
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new SassLintPlugin({
      configFile: '.sass-lint.yml',
      glob: 'src/**/*.s?(a|c)ss',
      failOnWarning: true,
      failOnError: true
    }),
    new ExtractTextPlugin('[name].css'),
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
