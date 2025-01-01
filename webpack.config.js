import path from "path";
import { fileURLToPath } from 'url';
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
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
                { from: 'src/svg', to: 'img' }
            ]
        })
    ],
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    }
};