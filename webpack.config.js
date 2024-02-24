const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    listsAndTasks: "./src/lists-and-tasks.js",
    sidebar: "./src/design/sidebar.js",
    page: "./src/design/page.js",
    inputs: "./src/design/inputs.js",
    dialogs: "./src/design/dialogs.js",
    notifications: "./src/design/notifications.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-Do App | Erick B. Gómez",
      favicon: "./src/img/todo-app-icon.svg",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
};
