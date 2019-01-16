//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
let str = '你好，中国'
let boo = false
let title = '999'
const h1 = <h1>红红火火恍恍惚惚</h1>
const arr = [
	<h2>h2</h2>,
	<h3>h3</h3>
]
const arrStr = ['毛利兰', '柯南', '小五郎']

// 定义一个空数组，将来用来存放名称，标签【方案1】
// forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。注意: forEach() 对于空数组是不会执行回调函数的。
const nameArr = []
//注意：react需要key添加给被forEach或map或者for循环直接控制的元素
arrStr.forEach(item => {
	const temp = <h5 key={item}>{item}</h5>
	nameArr.push(temp)
})

//数组的map方法,最终有个返回值,必须要写return
// const result = arrStr.map(item => {
// 	return item + '~~'
// })
// console.log(result)


//3.调用render函数渲染
//什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写一些js表达式了，则需要把js代码写道{}中；
ReactDOM.render(<div>
	{a + 2}
	<hr />
	{str}
	<hr />
	{boo ? '条件为真':'条件为假'}
	<hr />
	<p title={title}>这是P标签</p>
	<hr />
	{h1}
	<hr />
	{/* arr8 */}
	<hr />
	{nameArr}
	<hr />
	{arrStr.map(item => <div key={item}><h3 >{item}</h3></div>)}
	<hr />
	<p className="myels">!!!!!!!!</p>
	<label htmlFor="ooo">dddd</label>
</div>, document.getElementById('app'))