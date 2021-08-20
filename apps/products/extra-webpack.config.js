const WebpackConfigHelper = require("./../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "products",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/products/src/app/app.module.ts",
    }
  });
  return config;
};
