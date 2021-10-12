const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductIndex": "./src/index.js",
      },
      shared: ["faker"], // will load only one faker is different microfrontends are using the same version. Many version if different versions are defined in each microfrontend
      // shared: {
      //   faker: {
      //     singleton: true, // this will load only one version of faker no matter what
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
