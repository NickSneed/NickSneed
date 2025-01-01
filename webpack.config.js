/*global module, require, __dirname*/

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    mode: 'production',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/index.html', to: 'index.html' },
                { from: 'src/img', to: 'img' }
            ]
        })
    ],
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    }
};