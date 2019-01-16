//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

//2.创建虚拟DOM元素
//回顾什么是虚拟DOM,用js对象的形式，来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', {
// 	id: 'mydiv',
// 	title: 'div aaa'
// }, '这是一个div元素')


//HTML是最优秀的标记语言;
//注意在js文件中，不能写这种类似于HTML的标记，否则打包失败
//可以使用babel来转换这种JS中的标签
//大家注意，这种在JS中混合写入类似于html的语法，叫做jsx语法，符合xml规范的JS
//注意：jsx语法的本质，还是在运行的适航，被转换成了React.createElement形式来执行
const mydiv = <div id="mydiv" title="div aaa">这是一个div元素<h2>2222</h2></div>

//3.调用render函数渲染
ReactDOM.render(mydiv, document.getElementById('app'))