const webpack = require("webpack");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const STATIC_DIR = path.resolve(__dirname, "..", "static");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");


const plugins = [
  new FileManagerPlugin({
    events: {
      // Remove build dir
      onStart: {
        delete: [BUILD_DIR],
      },
      onEnd: {
        // Copy static files
        copy: [
          {
            source: STATIC_DIR,
            destination: BUILD_DIR,
          },
        ],
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: path.join(PUBLIC_DIR, "index.html"),
    filename: "index.html",
  }),
  new webpack.HotModuleReplacementPlugin(), // For page reloading
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
  historyApiFallback: true, // Apply HTML5 History API if routes are used
  open: true,
  compress: true,
  allowedHosts: "all",
  hot: true, // Reload the page after changes saved (HotModuleReplacementPlugin)
  client: {
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings
    overlay: {
      errors: true,
      warnings: true,
    },
    progress: true, // Prints compilation progress in percentage in the browser.
  },
  proxy: [
    {
      context: ['/service/api/api'],
      target: 'https://sycret.ru',
      changeOrigin: true,
      logLevel: 'debug',
    },
  ],
  port: 3000,
  devMiddleware: {
    writeToDisk: true,
  },
  static: [
    // Required to use favicons located in a separate directory as assets
    // Should use with historyApiFallback, to avoid of 404 for routes
    {
      directory: path.join(BUILD_DIR, "favicons"),
    },
  ],
};
module.exports = {
  devServer,
  plugins,
  entry: path.join(__dirname, "..", "src", "index.tsx"),
  output: {
    path: BUILD_DIR,
    publicPath: "/",
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    strictExportPresence: true, 
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.css$/i, 
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
            ],
          },
          {
            use: [
              "style-loader",
              "css-loader",
            ],
          },
        ],
      }
    ],
  },
};
