var config = {
  entry: "./src/browserinfo.js",
  output: {
    filename: "browserinfo.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              enforce: "pre",
              configFile: ".eslintrc",
            },
          },
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};

module.exports = config;