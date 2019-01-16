//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

//第一种创建组件的方式
//在构造函数中，使用props形参，接受外界，传递过来的数据
function Hello(props) {
	//如果在一个组件中，return一个null,则表示组建是空的，什么都不渲染
	// return null
	//在组建中必须返回一个合法的JXS虚拟的DOM元素

	// props.name = "aaa"

	console.log(props)

	//结论：无论是vue还是react，组件中的props永远都是只读的，不能被赋值
	return <div>这是Hello组件 ---{props.name}-{props.age}-{props.gender}</div>
}

const dog = {
	name: '大狗狗',
	age: 3,
	gender: '雄'
}

//3.调用render函数渲染
//什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写一些js表达式了，则需要把js代码写道{}中；
ReactDOM.render(<div>
123
{/* 直接把组件名称以标签的形式，丢到页面上即可*/}
{/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
<Hello {...dog}></Hello>
</div>, document.getElementById('app'))