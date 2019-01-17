//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'
//导入Hello组件
//默认不做单独配置的话，不能省略后缀名
import Hello from './components/Hello.jsx'

const dog = {
	name: '更改大黄狗1',
	age: 3,
	gender: '雄'
}

//3.调用render函数渲染
//什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写一些js表达式了，则需要把js代码写道{}中；
ReactDOM.render(<div>
123
{/* 直接把组件名称以标签的形式，丢到页面上即可*/}
{/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
{/* ...dog* 展开运算符---es6的语法特性*/}
<Hello {...dog}></Hello>
</div>, document.getElementById('app'))