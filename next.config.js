const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== "production";
const assetPrefix = () => ({assetPrefix:!debug ? 'https://github.com/SimonGN/LandingNUNC/' : ''})
const exportPathMap = () => ({
  '/': { page: '/' }
})

module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
  [exportPathMap],
  [assetPrefix]
]);
