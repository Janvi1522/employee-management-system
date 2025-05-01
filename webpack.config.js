const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JSX and ES6+ syntax
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from the public folder
    compress: true,
    port: 3000, // Dev server port
    historyApiFallback: true, // For React Router
  },
  mode: 'development', // Set mode to 'development' or 'production'
};
