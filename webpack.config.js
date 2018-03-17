const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const $ = require('jquery');
const jquery = require('jquery');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        '1': './src/style.js',
        //<script type="text/javascript" src="assets/vendors/imagesloaded/imagesloaded.pkgd.js"></script>
        a: './src/assets/vendors/imagesloaded/imagesloaded.pkgd.js',
        //<script type="text/javascript" src="assets/vendors/isotope-layout/isotope.pkgd.js"></script>
        b: './src/assets/vendors/isotope-layout/isotope.pkgd.js',
        //<script type="text/javascript" src="assets/vendors/jquery-one-page/jquery.nav.min.js"></script>
        c: './src/assets/vendors/jquery-one-page/jquery.nav.min.js',
        //<script type="text/javascript" src="assets/vendors/jquery.easing/jquery.easing.min.js"></script>
        e: './src/assets/vendors/jquery.easing/jquery.easing.min.js',
        //<script type="text/javascript" src="assets/vendors/jquery.matchHeight/jquery.matchHeight.min.js"></script>
        f: './src/assets/vendors/jquery.matchHeight/jquery.matchHeight.min.js',
        //<script type="text/javascript" src="assets/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
        g: './src/assets/vendors/magnific-popup/jquery.magnific-popup.min.js',
        //<script type="text/javascript" src="assets/vendors/masonry-layout/masonry.pkgd.js"></script>
        h: './src/assets/vendors/masonry-layout/masonry.pkgd.js',
        //<script type="text/javascript" src="assets/vendors/swiper/swiper.jquery.js"></script>
        i: './src/assets/vendors/swiper/swiper.jquery.js',
        //<script type="text/javascript" src="assets/vendors/menu/menu.js"></script>
        j: './src/assets/vendors/menu/menu.js',
        //<script type="text/javascript" src="assets/vendors/typed/typed.min.js"></script>
        k: './src/assets/vendors/typed/typed.min.js',
        //<script type="text/javascript" src="assets/js/main.js"></script>
    },

    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif|jpeg)$/, use: ['file-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
            { test: /\.exec\.js$/, use: ['script-loader'] },
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
            { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } } }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLWebPackPlugin({
            title: '1610-BJJ',
            favicon: './src/assets/img/logo_NZC_icon.ico',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            //Popper: ['popper.js', 'default'],
        }),
    ],
};