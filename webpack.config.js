const PATH = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT = '.';

const APP_FOLDER = PATH.resolve(__dirname, ROOT, '');
const APP_ENTRY_FILE = PATH.resolve(__dirname, ROOT, APP_FOLDER, 'public/assets/js/index.js');

const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'public/');
const PUBLIC_PATH = '/assets/';
const BUILD_FILE = '/assets/js/app.js';

module.exports = {
    entry: {
        app: APP_ENTRY_FILE
    },
    output: {
        path: BUILD_FOLDER,
        publicPath: PUBLIC_PATH,
        filename: BUILD_FILE
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader')
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),
        //不打包到脚本中
        new ExtractTextPlugin("/css/style.css"),
    ]
};
