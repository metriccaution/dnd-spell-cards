const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/static",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "static",
        to: ""
      }
    ])
  ],
  devServer: {}
};
