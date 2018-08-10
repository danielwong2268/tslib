const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.min.js',
    library: 'TypescriptLib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
      extensions: ['.ts']
  },
  module: {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be
        // handled by 'awesome-typescript-loader'.
        // Note this loader needs to run before js loaders
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ],
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }};
