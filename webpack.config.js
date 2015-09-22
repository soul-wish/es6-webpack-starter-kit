const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const sassLoaders = [
    'css-loader',
    'autoprefixer-loader?browsers=last 2 version',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app'),
];

const config = {
    entry: {
        app: ['webpack/hot/dev-server', './app/app']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './build'),
        publicPath: '/build/',
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    resolve: {
        extensions: ['', '.js', '.sass'],
        modulesDirectories: ['app', 'node_modules'],
    },
};

module.exports = config;