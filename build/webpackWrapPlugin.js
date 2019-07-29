'use strict'

const ConcatSource = require('webpack-sources').ConcatSource

class WebpackWrapPlugin {
  constructor(options) {
    const defaultOptions = {}

    this.options = Object.assign(defaultOptions, options)
  }
  apply(compiler) {
    const options = this.options
    const prefix = options.prefix
    const suffix = options.suffix

    compiler.hooks.compilation.tap(
      'WebpackWrapPlugin',
      (compilation) => {
        compilation.hooks.optimizeChunkAssets.tapAsync(
          'WebpackWrapPlugin',
          (chunks, callback) => {
            chunks.forEach((chunk) => {
              if (options.entryOnly && !chunk.isInitial()) return

              chunk.files.forEach((file) => {
                return compilation.assets[file] = new ConcatSource(
                  prefix, '\n', compilation.assets[file], '\n', suffix
                )
              })
            })
            callback()
          })
      })
  }
}

module.exports = WebpackWrapPlugin