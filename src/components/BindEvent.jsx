//#region  折叠这段代码

// import React from 'react'

// export default class BindEvent extends React.Component{
//     constructor() {
//         super()
//         //私有数据
//         this.state = {
//             msg:'哈哈哈',
//             name:'张三'
//         }
//     }
//     render(){
//         return <div>
//             BindEvent 组件
//             <hr/>
//             {/* 在react有自己的一套绑定事件，事件名是以小驼峰的形式 */}
//             {/* <button onClick = {function(){console.log(1)}}>按钮</button> */}
//             {/* <button onClick={this.myclickHandler}>按钮</button> */}
//             {/* 注意:onClick只接收function作为处理函数
//             注意：箭头函数本身就是一个function的匿名函数 */}
//             <button onClick={() => this.show('🐖','我')}>按钮</button>
//             <h3>{this.state.msg}</h3>
//         </div>
//     }
//     //这是一个实例函数
//     show = (arg1,arg2) =>{
//         console.log('函数被调用了' + arg1 +arg2)
//         //修改msg值用setState({***});它并且是异步的
//         //如果调用setState({**})之后，又想拿到最新的值，需要使用setState({},callback)
//         this.setState({
//             msg: '123' +arg1
//         },function () { //回调
//             console.log(this.state.msg)
//         })

//     }
// }

//#endregion


import React from 'react'

export default class BindEvent extends React.Component{
    constructor() {
        super()
        //私有数据
        this.state = {
            msg:'哈哈哈',
            name:'张三'
        }
    }
    render(){
        return <div>
            BindEvent 组件
            <hr/>
            {/* 在react有自己的一套绑定事件，事件名是以小驼峰的形式 */}
            {/* <button onClick = {function(){console.log(1)}}>按钮</button> */}
            {/* <button onClick={this.myclickHandler}>按钮</button> */}
            {/* 注意:onClick只接收function作为处理函数
            注意：箭头函数本身就是一个function的匿名函数 */}
            <button onClick={() => this.show('🐖','我')}>按钮</button>
            <h3>{this.state.msg}</h3>
            <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e) => this.txtChanged(e)} ref="txt"/>
        </div>
    }
    //这是一个实例函数
    show = (arg1,arg2) =>{
        // console.log('函数被调用了' + arg1 +arg2)
        // //修改msg值用setState({***});它并且是异步的
        // //如果调用setState({**})之后，又想拿到最新的值，需要使用setState({},callback)
        // this.setState({
        //     msg: '123' +arg1
        // },function () { //回调
        //     console.log(this.state.msg)
        // })
    }
    //每当文本框变化了，必然会调用这个函数 txtChanged 
    txtChanged = (e) =>{
        //获取文本框的方式为两种
        //方案1：通过事件参数e来获取
        // console.log(e.target.value);
        // console.log(this.refs.txt.value);
        const newVal = e.target.value
        this.setState({
            msg: newVal
        })
    }

   
}