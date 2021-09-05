const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    vendor: path.resolve(__dirname, 'src/scripts/vendor/gsap.js'),
    fontawesome: path.resolve(__dirname, 'src/scripts/vendor/fontawesome.js'),
    serviceWorker: path.resolve(__dirname, 'src/scripts/serviceWorker.js'),
    main: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
