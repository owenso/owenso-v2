const BundleTracker = require("webpack-bundle-tracker");
var path = require("path");
console.log(
  process.env.NODE_ENV === "production" ? "production" : "not production"
);
// function resolve(dir) {
//   return path.join(__dirname, "..", dir);
// }
module.exports = {
  configureWebpack: {
    plugins: [new BundleTracker({ filename: "./webpack-stats.json" })]
  },
  devServer: {
    port: 8008,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: webpackConfig => {
    if (process.env.NODE_ENV === "production") {
      webpackConfig.output.filename("[name]-[hash].js");
      // webpackConfig.output.publicPath("static/webpack_bundles/");
    } else {
      webpackConfig.output.filename("[name]-[hash].js");
      // webpackConfig.output.publicPath("http://0.0.0.0:8008/");
    }
  },
  outputDir: path.resolve("./assets/webpack_bundles/"),
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "static/webpack_bundles/"
      // : "/js"
      : "http://owenso.local:8008/"
};
