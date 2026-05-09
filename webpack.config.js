import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === 'production';

export default {
    entry: './src/js/App.js',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/, // Exclude CSS Modules
                use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
            },
            // Rule for CSS Modules
            {
                test: /\.module\.css$/, // Target files ending with .module.css
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]' // Customize generated class names
                            },
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                issuer: /\.(js|mjs|cjs)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/favicon.ico', to: 'favicon.ico' },
                { from: 'src/404.html', to: '404.html' },
                { from: 'src/manifest.json', to: 'manifest.json' },
                { from: 'src/pwa-icon.png', to: 'pwa-icon.png' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            isProduction
        })
    ],
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 3000,
        open: false,
        allowedHosts: ['nickpc'],
        static: {
            directory: path.join(__dirname, './dist/'),
            publicPath: '/'
        }
    }
};
