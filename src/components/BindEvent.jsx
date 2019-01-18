import React from 'react'

export default class BindEvent extends React.Component{
    constructor() {
        super()
        //私有数据
        this.state = {}
    }
    render(){
        return <div>
            BindEvent 组件
            <button>按钮</button>
        </div>
    }
}