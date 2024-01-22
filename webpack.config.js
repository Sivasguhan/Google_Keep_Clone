const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            fix: true
        })
    ],
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'babel-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|png)$/,
                use: ['url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx']
    }
}