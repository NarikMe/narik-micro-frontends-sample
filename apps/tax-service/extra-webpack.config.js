const WebpackConfigHelper = require("../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "tax_service",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/tax-service/src/app/tax.service.ts",
    }
  });
  return config;
};
