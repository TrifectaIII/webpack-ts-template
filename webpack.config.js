const path = require('path');

module.exports = {
    // mode: 'development',
    // devtool: 'source-map',
    mode: 'production',
    devtool: false,
    entry: path.resolve(__dirname, './src/index.ts'),

    devServer: {
        static: path.join(__dirname, 'docs'),
        compress: true,
        port: 8000,
    },

    module: {
        rules: [
            //ts rule
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            //sass rule
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './docs'),
    },
};