const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/reporte-usuarios': { page: '/reporte-usuarios' },
      '/encuesta': { page: '/encuesta'},
      '/reporte-cruce-fronterizo': { page: '/reporte-cruce-fronterizo'}
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
