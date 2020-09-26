const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    entry: ["@babel/polyfill", "./app.js"],
    output: {
      filename: "bundle.js"
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ["@babel/preset-env"]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.mjs', '.wasm', '.js', '.ts', '.tsx', '.json']
    }
  }
];
