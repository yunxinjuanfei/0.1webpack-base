1.下载安装最新版node.js（https://nodejs.org/en/）
（注意：为了能支持es6，请下载4.0以上版本）


2（可选）.有了node和在node中集成的npm，为了加快框架的下载速度，建议输入以下命令切换至淘宝源：
npm config set registry http://registry.npm.taobao.org/
 

3.全局安装Webpack, Babel, Webpack-dev-server：
npm install babel webpack webpack-dev-server -g
 

4.建立项目目录，用npm init 初始化 npm 项目
mkdir react-hello-world
cd react-hello-world
npm init
注：执行npm init命令时会让你输入各种项目信息，一般直接回车就好，会自动填写默认值。但是，要注意name不能跟我们的模块和项目文件目录同名。

初始化时也可以使用以下命令：
npm init -yes
这样便不会再有询问的环节，自动生成默认的package.json文件。但是也要手动修改name，不能跟我们的模块和项目文件目录同名。


5.在项目中安装 react, react-dom
npm install react react-dom --save
 

6.在项目中安装 Babel 转换器，需要用到插件 babel-preset-react, babel-preset-latest，latest 即最新的 ES 规范，包括了 Async/Await 这些新特性。
npm install babel-loader babel-core babel-preset-react babel-preset-latest --save
 

7.创建项目文件，main.js 即项目入口文件，App.js 即 React 组件主文件
touch index.html App.js main.js webpack.config.js
目录结构如下所示：



8.配置webpack，编辑webpack.config.js
复制代码
module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: '/',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}


9.开始写项目：
(1).index.html:

复制代码
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React Hello World</title>
</head>
<body>
<div id="app"></div>
<script src="index.js"></script>
</body>
</html>
复制代码
 

(2).App.js:

复制代码
import React from 'react';

class App extends React.Component {

    render() {
        return <div>Hello World!</div>
    }
}

export default App
 

(3).main.js:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
 

10.配置 npm scripts, 编辑 package.json，在"scripts"属性处添加一行：
"scripts": {
   "start": "webpack-dev-server"
},
 

11.基本的框架搭建完毕，npm start 然后打开 http://localhost:3333 试试：
npm start