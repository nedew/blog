const path = require("path")
const rehypePrism = require('@mapbox/rehype-prism')

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.resolve.alias['@/*'] = path.resolve(__dirname, './*')
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [rehypePrism]
          }
        },
        path.join(__dirname, "./lib/fm-loader"),
      ],
    })

    return config
  },
}
