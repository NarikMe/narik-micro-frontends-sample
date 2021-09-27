const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

const path = require('path');
module.exports = () => {
  return {
    resolve: {
      extensions: ['.vue', '.jsx', '.js', '.json'],
    },
    optimization: {
      moduleIds: 'named',
      chunkIds: 'named',
    },
    entry: './src/index.js',
    output: {
      filename: '[bundle].js',
      publicPath: 'auto',
      uniqueName: 'vue_app1',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, './dist/vue-app1'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: 'vue_app1',
        library: { type: 'var', name: 'vue_app1' },
        filename: 'remoteEntry.js',
        exposes: {
          './app-creator': './src/main.js',
        },
        shared: ['vue', 'core-js'],
      })
    ],
    devServer: {
      port: 4211,
    },
  };
};
