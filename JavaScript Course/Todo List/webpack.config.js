const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3)$/,
        use:[
          {
            loader: 'file-loader',
            options:{
              name:'[name].[ext]',
              outputPath: 'audio/',
            }
          }
        ]
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        title: 'Development',
    }),
  ],
};