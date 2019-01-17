//1.导入包
// import React ,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

//导入class继承
// import '@/10.class关键字创建react组件'

class Movie extends React.Component{ 
    constructor(){
        //由于Movie组件继承了React.Component这个父类，所以自己定义的构造器中，必须调用super()
        super()
        //只有调用了super()以后，才能使用this关键字
        this.state = { //这个this.state={}就相当于Vue中的data(){return {}}  ---可读可写
            msg:'大家好'
        } 
    }

    //render()渲染当前组件所对应的虚拟元素
    //class的一个实例方法
    render(){
        //在class关键字创建的组件中，如果想使用外界传过来的props参数，不需要接受，直接通过this.props.**就能访问
        //注意：不论是class还是function创建的组件，他们都是只读的
        // this.props.name = 'yyy'
        return <div>这是rander渲染出来的Movie组件元素---{this.props.name} ---{this.props.age}
        <h3>{this.state.msg}</h3>
        </div>
        {/*注意：在class组建内部，this表示当前组件的实例对象 */}
    }
}

const user = {
    name:'zzzz',
    age:15,
    gender:'男'
}


//3.调用render函数渲染,jsx比XML比HTML严格多了
ReactDOM.render(<div>
123
{/*这是movie类的一个实例对象*/}
    <Movie></Movie>
    <hr/>
    <Movie {...user}></Movie>
</div>, document.getElementById('app'))