//假设main.js还是我们的入口文件
// console.log('ok');

//webpack-dev-server 打包好的main.js是托管到内存中，所以我们根目录看不到
//但是我们可以认为，在项目的根目录中，有一个看不见的main.js

//1.这两个导入时候,接收成员名称,必须这么写
import React from 'react'
//创建组件,虚拟DOM元素,生命周期
import ReactDOM from 'react-dom'
//把创建好的组建和虚拟DOM放到页面上展示的

//2.创建虚拟DOM元素
//参数1,创建元素类型，字符串，表示元素的名称
//参数2,是一个对象，或者null,表示当前这个DOM元素的属性
//参数3，子节点（包括其他，虚拟DOM获取文本子节点）
//参数n,其他子节点
//<h1 id="myh1" title="this is h1">这是一个大大的H1</h1>
// const myh1 = React.createElement('h1', null, '这是一个大大的H1')
const myh1 = React.createElement('h1', {
	id: 'myh1',
	title: 'this is h1'
}, '这是一个大大的H1')

const mydiv = React.createElement('div', null, '这是一个div元素', myh1)

//渲染页面上的DOM结构，最好的方式就是写html代码


const mytext = <div>aaa</div>


//3.使用ReactDOM 把虚拟的DOM渲染到页面上
//参数1，要渲染那个虚拟DOM元素
//参数2，指定页面上的DOM原属，当作一个容器
ReactDOM.render(mydiv, document.getElementById('app'))
//经过分析，猜测第二个元素应该是一个DOM元素