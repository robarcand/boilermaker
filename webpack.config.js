module.exports = {
    entry: './client/app.js', // assumes your entry point is in client/app.js
    mode: 'development',
    output: {
      path: __dirname, // assumes your bundle.js will be in your public folder
      filename: './public/bundle.js'
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              options: {
                presets: ['react', 'es2015']
              }
            },
            // use the style-loader/css-loader combos for anything matching the .css extension
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
              ]
            }
        ]
    }
  }