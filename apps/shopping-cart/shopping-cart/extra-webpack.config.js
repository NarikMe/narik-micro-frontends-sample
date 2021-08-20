const WebpackConfigHelper = require("./../../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "shopping_cart",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/shopping-cart/shopping-cart/src/app/app.module.ts",
    }
  });
  return config;
};
