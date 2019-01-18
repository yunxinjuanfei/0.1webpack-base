import React from 'react'

//导入列表组建需要的样式表
//问题:这个样式表是只在List组件中生效嘛？
//经过实验，发现直接导入样式表，默认在全局上，整个项目生效
//思考，vue组件中样式表有没有冲突问题？
//答案：vue组件中样式表，也有冲突问题，但是可以使用<style scoped></style>
//疑问：React中有没有scoped指令？
//答案：没有，因为在React中根本没有指令概念

import cssobj from '@/css/cmtlist.scss'
console.log(cssobj)

//如果在引入某个包的时候，这个包安装到了node_modules目录中
// 则，可以省略node_modules这一层目录，直接以包名开始引入模块或者样式表
//第三方的样式表都是以.css结尾的，这样我们不要为普通的.css启用模块化
//自己的样式表都要以.scss或.less结尾的，只为这两种启用模块化
// import bootcss from 'bootstrap/dist/css/bootstrap.css'
// console.log(bootcss)
import 'bootstrap/dist/css/bootstrap.css'


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
            {/* <h1 className={cssobj.title}>这是评论列表组件</h1> */}
            {/* <h1 className={cssobj.title + ' test'}> 这是评论列表组件</h1> */}
            <h1 className={[cssobj.title, 'test'].join(' ')}> 这是评论列表组件</h1>
            {/* <button className={bootcss.btn}>按钮1</button>
            <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮2</button> */}
            <button className="btn btn-primary">按钮3</button>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}