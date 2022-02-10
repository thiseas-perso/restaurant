const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js',
      nav: './src/nav.js',
      home: './src/home.js',
      menu: './src/menu.js',
      contact: './src/contact.js',
      footer: './src/footer.js',
      clean: './src/clean-content.js'

   },
   devtool: 'inline-source-map',
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Restaurant',
      }),
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
};