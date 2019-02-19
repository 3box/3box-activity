const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/3boxActivity.js',
  output: {
    filename: '3boxActivity.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ThreeBoxActivity',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        minify (file, sourceMap) {
          const extractedComments = []

          // Custom logic for extract comments

          const { error, map, code, warnings } = require('uglify-es') // Or require('./path/to/uglify-module')
            .minify(file, {
              /* Your options for minification */
            })

          return { error, map, code, warnings, extractedComments }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                'regenerator': true
              }],
              ['@babel/plugin-proposal-object-rest-spread']
            ]
          }
        }
      }
    ]
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
