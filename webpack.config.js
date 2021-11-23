const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ElearningBilingual',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-flow",
                            "@babel/preset-typescript"],
                    }
                }
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        fallback: { "stream": require.resolve("stream-browserify") }
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}
