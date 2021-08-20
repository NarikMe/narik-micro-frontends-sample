const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require('path');
module.exports = () => {
  return {
    optimization: {
      moduleIds: 'named',
      chunkIds: 'named'
    },
    entry: './src/index.js',
    output: {
      filename: '[bundle].js',
      publicPath: "auto",
      uniqueName: "payment_type1",
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, '../../src/assets/apps/shopping-cart/payment-type1'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: "payment_type1",
        library: { type: "var", name: "payment_type1" },
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './src/main.js',
        },
        shared: ["vue", "core-js"]
      })
    ],
    devServer: {
      port: 4211
    }
  }
}
