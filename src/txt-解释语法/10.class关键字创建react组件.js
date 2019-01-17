//1.导入包
// import React ,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

//导入class继承
// import '@/09.class继承公共方法'

class Movie extends React.Component {
    //render()渲染当前组件所对应的虚拟元素
    //class的一个实例方法
    render() {
        //在class关键字创建的组件中，如果想使用外界传过来的props参数，不需要接受，直接通过this.props.**就能访问
        return <div>这是rander渲染出来的Movie组件元素---{this.props.name} ---{this.props.age}</div>
        {/*注意：在class组建内部，this表示当前组件的实例对象 */ }
    }
}

const user = {
    name: 'zzzz',
    age: 15,
    gender: '男'
}


//3.调用render函数渲染,jsx比XML比HTML严格多了
ReactDOM.render(<div>
    123
{/*这是movie类的一个实例对象*/}
    <Movie></Movie>
    <hr />
    <Movie {...user}></Movie>
</div>, document.getElementById('app'))