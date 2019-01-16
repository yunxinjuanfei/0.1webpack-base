const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname, './src/index.html'), //源文件（__dirname代表所处的目录）
	filename: 'index.html' //生成的内存中首页的名称
})
//向外暴露一个打包的配置对象；因为webpack是基于Node构建的，so,webpack支持所有Node API 和语法
//webpack默认只能打包处理.js后缀名类型的文件,像.png .vue无法主动处理，所以要配置第三方的loader;
module.exports = {
	mode: 'development', //development -开发环境 production-产品环境
	//在webpack4.x中有个很大的特性，就是约定大于配置，约定默认的打包入口路径是src->index.js
	plugins: [ //数组
		htmlPlugin
	],
	module: { //所有第三方模块的配置规则
		rules: [ //第三方匹配规则
			{
				test: /\.js|jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			} //exclude:/node_modules千万不要忘记这个exclude排除项
		]
	}
}