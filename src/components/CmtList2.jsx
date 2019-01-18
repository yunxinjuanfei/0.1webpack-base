import React from 'react'

//导入列表组建需要的样式表
//问题:这个样式表是只在List组件中生效嘛？
//经过实验，发现直接导入样式表，默认在全局上，整个项目生效
//思考，vue组件中样式表有没有冲突问题？
//答案：vue组件中样式表，也有冲突问题，但是可以使用<style scoped></style>
//疑问：React中有没有scoped指令？
//答案：没有，因为在React中根本没有指令概念

import cssobj from '@/css/cmtlist.css'
console.log(cssobj)


//导入评论项子组件
import CmtItem from '@/components/Cmtitem2'


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
            <h1 className={cssobj.title}>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}