// webpack.config.js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    // Other webpack configurations
    mode: 'production',
    plugins: [
      new NodePolyfillPlugin(),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true
      })
    ],
    resolve: {
      // ...
      fallback: {
      
        "fs": false,
        "os": false,
        "path": false,
      }
    },
    
    module: {
      rules: [
        { 
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                throwIfNamespace: false, // Set throwIfNamespace to false
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
  };
  