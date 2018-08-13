module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
