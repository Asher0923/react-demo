const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins,
  addWebpackAlias
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: "[local]--[hash:base64:5]"
  }),
  ...addBabelPlugins([
    "react-css-modules",
    {
      generateScopedName: "[local]--[hash:base64:5]",
      filetypes: {
        ".less": {
          syntax: "postcss-less"
        }
      }
    }
  ]),
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@container": path.resolve(__dirname, "src/container"),
    "@redux": path.resolve(__dirname, "src/redux"),
    "@routes": path.resolve(__dirname, "src/router"),
    "@api": path.resolve(__dirname, "src/server"),
    "@store": path.resolve(__dirname, "src/store"),
    "@views": path.resolve(__dirname, "src/views")
  })
);
