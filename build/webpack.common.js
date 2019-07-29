const path = require('path')
const webpack = require('webpack')
const packages = require('../package.json')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const WebpackWrapPlugin = require('./webpackWrapPlugin')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.VERSION': JSON.stringify(packages.version)
  }),
  new WebpackWrapPlugin({
    prefix: `/****/ (function(window) {`,
    suffix: '/****/ })(this)'
  }),
  new webpack.BannerPlugin({
    banner: `  ${packages.name} ${packages.version}
  author: ${packages.author}
  ${packages.description}

  repository: ${packages.homepage.replace('#readme', '')}
  issues: ${packages.bugs.url}`
  }),
  new CleanWebpackPlugin()
]

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'ExpNotes.jsx',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      ui: path.resolve(__dirname, '../src/ui'),
      key: path.resolve(__dirname, '../src/key'),
      file: path.resolve(__dirname, '../src/file'),
      polyfill: path.resolve(__dirname, '../src/polyfill'),
      singleton: path.resolve(__dirname, '../src/singleton'),
      lib: path.resolve(__dirname, '../lib'),
      src: path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx'] // 默认值: [".js",".json"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          loader: 'unicode-loader'
        }
      ]
    }]
  },
  plugins: plugins
}