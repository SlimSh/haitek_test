const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const withFonts = require('next-fonts');
// const withWorkers = require('@zeit/next-workers');
const hook = require('css-modules-require-hook');

const cssOption = {
  cssModules: true,
  should: true,
  cssLoaderOptions: {
    sourceMap: true,
    localIdentName: '[name]__[hash:base64:5]',
    // importLoaders: 2,
    modules: true
  }
};
const fontOption = {
  enableSvg: true,
}


module.exports = withPlugins([
  // withCSS,
  [withFonts, fontOption],

  [withSass, cssOption],
  [withCSS],
  withImages,
  // withWorkers,
  withTypescript
]);
