const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCSS = new ExtractTextPlugin('style.css');
const ExtractCriticalCSS = new ExtractTextPlugin('critical.css');
const WorkboxPlugin = require('workbox-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const extractCssConfig = {
    fallback: 'style-loader',
    use: [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: path.resolve(
                        __dirname,
                        'postcss.config.js',
                    ),
                },
            },
        },
    ],
};

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
        ],
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: dist,
    },
    module: {
        rules: [
            {
                test: /style\.css$/,
                use: ExtractCSS.extract(extractCssConfig),
            },
            {
                test: /critical\.css$/,
                use: ExtractCriticalCSS.extract(extractCssConfig),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new CleanPlugin([
            dist,
            path.join(__dirname, 'sw.js'),
        ]),
        ExtractCSS,
        ExtractCriticalCSS,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: './src/scripts/fontawesome-all.v5.0.6.min.js',
                    to: 'fontawesome.bundle.js',
                    toType: 'file',
                },
                {
                    from: './node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js',
                    toType: 'file',
                },
                {
                    from: './node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js.map',
                    toType: 'file',
                },
            ],
        ),
        new WorkboxPlugin({
            globDirectory: path.resolve(__dirname),
            globPatterns: [
                'index.html',
                'assets/**/*.{ico,png,svg}',
                'dist/*.{css,js}',
            ],
            swSrc: path.join(__dirname, 'src/scripts/sw.js'),
            swDest: path.join(__dirname, 'sw.js'),
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
};
