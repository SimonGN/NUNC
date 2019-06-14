const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== "production";
console.log(process.env.NODE_ENV)
const assetPrefix =  !debug ? '' : ''
const webpack = require('webpack')
const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  }
}
console.log(nextConfig)

module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
], nextConfig);
