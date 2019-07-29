const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

let prodConfig = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(png|svg|jpg|gif|jpeg|ico)$$/,
      use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },
            webp: {
              quality: 75
            }
          }
        }
      ]
    }]
  }
}

module.exports = merge(common, prodConfig)