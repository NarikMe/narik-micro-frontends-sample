const WebpackConfigHelper = require("../../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "shopping_cart_button",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/shopping-cart/shopping-cart-button/src/app/app.component.ts",
    }
  });
  return config;
};
