var ExtractTextPlugin = require('extract-text-webpack-plugin')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var SassLintPlugin = require('sasslint-webpack-plugin')
var path = require('path')

module.exports = {
  context: __dirname,
  name: 'css',
  entry: {
    'css-loader': path.resolve(__dirname, 'src/css-loader.sass'),
    'loader-default': path.resolve(__dirname, 'src/loader-default.sass'),
    'loader-double': path.resolve(__dirname, 'src/loader-double.sass'),
    'loader-bar': path.resolve(__dirname, 'src/loader-bar.sass'),
    'loader-bar-ping-pong': path.resolve(__dirname, 'src/loader-bar-ping-pong.sass'),
    'loader-border': path.resolve(__dirname, 'src/loader-border.sass'),
    'loader-ball': path.resolve(__dirname, 'src/loader-ball.sass'),
    'loader-clock': path.resolve(__dirname, 'src/loader-clock.sass'),
    'loader-smartphone': path.resolve(__dirname, 'src/loader-smartphone.sass'),
    'loader-curtain': path.resolve(__dirname, 'src/loader-curtain.sass'),
    'loader-music': path.resolve(__dirname, 'src/loader-music.sass'),
    'loader-pokeball': path.resolve(__dirname, 'src/loader-pokeball.sass')
  },
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
