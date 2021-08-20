const WebpackConfigHelper = require("../../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "shopping_cart_service",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/shopping-cart/shopping-cart-service/src/app/shopping-cart.service.ts",
    }
  });
  return config;
};
