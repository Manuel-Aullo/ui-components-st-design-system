module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              presets: ['react-app']
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:3]'
              }
            }
          },
          'sass-loader'
        ]
      },
      { // config for images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          }
        ],
      },
      { // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            }
          }
        ],
      }
    ]
  }
});