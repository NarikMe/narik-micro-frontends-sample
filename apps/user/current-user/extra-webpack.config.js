const WebpackConfigHelper = require("./../../../build-tools/webpack-config.helper");
console.log(2);
module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    uniqueName: "current_user",
    filename: "remoteEntry.js",
    exposes: {
      "./app": "./apps/user/current-user/src/app/app.component.ts",
    }
  });
  return config;
};
