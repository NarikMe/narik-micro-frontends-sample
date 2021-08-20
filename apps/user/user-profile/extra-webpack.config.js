const WebpackConfigHelper = require("./../../../build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "user_profile",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/user/user-profile/src/app/app.module.ts",
    }
  });
  return config;
};
