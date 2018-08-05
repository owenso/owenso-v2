const BundleTracker = require("webpack-bundle-tracker");
var path = require("path");
console.log(process.env.NODE_ENV === "production");
// function resolve(dir) {
//   return path.join(__dirname, "..", dir);
// }
module.exports = {
  configureWebpack: {
    plugins: [new BundleTracker({ filename: "./webpack-stats.json" })]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: webpackConfig => {
    if (process.env.NODE_ENV === "production") {
      webpackConfig.output.filename("[name]-[hash].js");
      webpackConfig.output.publicPath("static/webpack_bundles/");
    } else {
      webpackConfig.output.filename("[name]-[hash].js");
      webpackConfig.output.publicPath("http://localhost:8080/");
    }
  },
  outputDir: path.resolve("./assets/webpack_bundles/")
  // baseUrl:
  //   process.env.NODE_ENV === "production"
  //     ? "/static/"
  //     : "http://localhost:8080/"
};
