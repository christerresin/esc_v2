const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    target: 'web',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    experiments: {
        asyncWebAssembly: true,
        buildHttp: true,
        layers: true,
        lazyCompilation: true,
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
      }
};