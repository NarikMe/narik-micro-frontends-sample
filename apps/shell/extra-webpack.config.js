const WebpackConfigHelper = require("./../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "shell",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/shell/src/app/app.module.ts",
    },
  });
  return config;
};
