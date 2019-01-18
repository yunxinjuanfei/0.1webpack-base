import React from 'react'

//导入评论项子组件
import CmtItem from '@/components/Cmtitem'


//定义父组件使用class关键字
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [//评论列表组件
                { id: 1, user: '老大', content: '这是老大' },
                { id: 2, user: '老二', content: '这是老二' },
                { id: 3, user: '老三', content: '这是老三' }
            ]
        }
    }
    render() {
        return <div>
            {/* {在jsx中如果想写行内样式了，不能为style设置字符串} */}
            {/* 二十应该这样写：style={{color:'red'}} */}
            {/* 在行内样式中，如果是数值类型的，样式则可以不用引号包裹，如果是字符串类型的样式值，必须使用引号包裹 */}
            <h1 style={{ color: 'red',fontSize:'25px',fontWeight:200,textAlign:'center'}}>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}