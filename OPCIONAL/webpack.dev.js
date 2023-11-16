import { merge } from "webpack-merge";
import common from './webpack.common.js';
import Dotenv from "dotenv-webpack";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './dev.env',
    }),
  ],
});
