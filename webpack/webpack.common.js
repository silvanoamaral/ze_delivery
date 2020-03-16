const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.(s*)css$/,
        loader:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        include: path.resolve(__dirname, '../src/assets/images/'),
        use: {
          loader: 'file-loader',
          options: {
            context: '../src/assets',
            name: 'root[path][name].[ext]'
          }
        }
      }
    ]
  }
}
