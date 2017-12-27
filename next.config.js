module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/reporte-usuarios': { page: '/reporte-usuarios' },
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
    return config
  }
}
