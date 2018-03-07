//打包后的文件名后可以直接同步在html标签里面
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');


module.exports = {
    //入口文件
    //entry: ['./src/script/main.js', './src/script/a.js'],
    entry: './src/app.js',
    //打包输出
    output: {
        filename: './dist/js/bundle.[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //path.resolve(__dirname, )
                //项目运行路径
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: './dist/bundle.index.html',
            template: 'index.html',
            inject: 'head',
            title: 'demo'
        })
    ]
}