const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

class WebpackConfigHelper {
  static applyFederationConfig(config, options) {
    config.output.uniqueName = options.uniqueName;
    config.output.publicPath = "auto";
    config.optimization.runtimeChunk = false;
    config.experiments = {
      outputModule: true,
    };

    options.shared = options.shared || {
      "@angular/core": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/animations": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/forms": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/common": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/router": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/platform-browser": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/platform-browser-dynamic": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/cdk": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      "@angular/material": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~13.1.1",
      },
      rxjs: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~7.4.0",
      },
      "@narik/micro-frontends-infrastructure": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~2.0.1",
      },
      "@narik/micro-frontends-core": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~2.0.1",
      },
      "@narik/micro-frontends-ui": {
        singleton: true,
        strictVersion: false,
        requiredVersion: "~2.0.1",
      },
      "shopping-lib": {
        import: path
          .join(__dirname, "./../dist/shopping-lib")
          .replace(/\\/g, "/"),
        singleton: true,
        strictVersion: false,
        requiredVersion: "0.0.1",
      },
    };

    if (options.isHost) {
      for (const key in options.shared) {
        options.shared[key].eager = true;
      }
    }
    config.plugins.push(
      new ModuleFederationPlugin(
        options.isHost
          ? {
              library: { type: "module" },
              remotes: {},
              shared: options.shared,
            }
          : {
              library: { type: "module" },
              name: options.uniqueName,
              filename: options.filename,
              exposes: options.exposes,
              shared: options.shared,
            }
      )
    );
  }
}
module.exports = WebpackConfigHelper;
