const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/reporte-garitas-calexico': { page: '/reporte-garitas-calexico' },
      '/reporte-garitas-el-paso': { page: '/reporte-garitas-el-paso' },
      '/reporte-garitas-7-dias': { page: '/reporte-garitas-7-dias' }
    }
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      })
    }

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config
  }
}
