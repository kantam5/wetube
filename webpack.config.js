const path = require("path");
const autoprefiexer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    // when ever you find a module follow rules
    rules: [
      {
        test: /\.(scss)$/, // if toue find module that end .scss
        use: ExtractCSS.extract([
          {
            loader: "css-loader" // make hwbpack understand css
          },
          {
            loader: "postcss-loader", // make run a secpfic plugin for css
            options: {
              plugin() {
                return [autoprefiexer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader" // from scss to normal css
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
