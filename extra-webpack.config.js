const WebpackConfigHelper = require("./build-tools/webpack-config.helper");

module.exports = (config) => {
  WebpackConfigHelper.applyFederationConfig(config, {
    isHost: true,
  });
  return config;
};
