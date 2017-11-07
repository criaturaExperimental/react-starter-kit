const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
           {
               test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
           },
           {
               test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
           }

        ]
    },
    resolve: {
        modules: [
          path.resolve('./src/components'),
          path.resolve('./node_modules')
        ]
      },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}