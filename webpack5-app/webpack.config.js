const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/indexReact.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  target: ['web', 'es5'],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // contentBase: './dist',
    static: './dist',
    hot: true,
  }
}