require('./world.js')
//css-loader是让webpack处理.css文件
//style-loader是让css文件插入到html里面
//require('style-loader!css-loader!./style.css')
//用了 --module-bind 'css=style-loader!css-loader'后可以不要每次都处理了
require('./style.css')

function hello (argument) {
    alert(argument);
}

hello('hello world');