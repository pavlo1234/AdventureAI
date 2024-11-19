const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "adventure_ai.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.sass$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/styles/colors.sass"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@icons": path.resolve(__dirname, "src/icons/"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
};
