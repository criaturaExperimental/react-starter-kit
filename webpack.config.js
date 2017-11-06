const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

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
    plugins: [
        HtmlWebpackPluginConfig
    ]
}