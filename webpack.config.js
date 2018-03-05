//打包后的文件名后可以直接同步在html标签里面
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //入口文件
    entry: ['./src/script/main.js', './src/script/a.js'],
    //打包输出
    output: {
        filename: './dist/js/bundle.[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: './dist/bundle.[chunkhash].html',
            template: 'index.html'
        })
    ]
}