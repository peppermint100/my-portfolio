const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'awesome-typescript-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.ts$/,
                use:'awesome-typescript-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: [path.resolve(__dirname, 'src')]
            },
            {
                 test: /\.(PNG|jpe?g|gif|ico|svg)$/i,
                 use: 'file-loader' 
            }
        ]   
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./assets/favicon/favicon-32x32.png",
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}