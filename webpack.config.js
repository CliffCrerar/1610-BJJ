const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const $ = require('jquery');
const jquery = require('jquery');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            //Popper: ['popper.js', 'default'],
        }),
    ],
};