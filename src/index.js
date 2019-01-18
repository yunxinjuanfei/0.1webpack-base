//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

//导入评论项子组件
import CmtList from '@/components/CmtList2'




//3.调用render函数渲染,jsx比XML比HTML严格多了
ReactDOM.render(<div>
    <CmtList></CmtList>
</div>, document.getElementById('app'))