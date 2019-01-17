import React from 'react'

//第一种创建组件的方式
//在构造函数中，使用props形参，接受外界，传递过来的数据
export default function Hello(props) {
	//如果在一个组件中，return一个null,则表示组建是空的，什么都不渲染
	// return null
	//在组建中必须返回一个合法的JXS虚拟的DOM元素

	// props.name = "aaa"

	console.log(props)

	//结论：无论是vue还是react，组件中的props永远都是只读的，不能被赋值
	return <div>这是Hello组件 ---{props.name}-{props.age}-{props.gender}</div>
}

//把组件暴漏出去
// export default Hello