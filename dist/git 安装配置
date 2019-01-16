Git基本操作
初始化操作 
git config -global user.name  #设置提交者名字git config -global user.name  #设置提交者名字 git config -global user.email #设置提交者邮箱 
git config -global core.editor  #设置默认文本编辑器git config -global core.editor  #设置默认文本编辑器 git config -global merge.tool #设置解决合并冲突时差异分析工具 
$ git config -list #检查已有的配置信息

创建新版本库 
git clone  #克隆远程版本库git clone  #克隆远程版本库 git init #初始化本地版本库

修改和提交 
git add . #添加所有改动过的文件git add . #添加所有改动过的文件 git add #添加指定的文件 
git mv   #文件重命名git mv   #文件重命名 git rm #删除文件 
git rm -cached  #停止跟踪文件但不删除git rm -cached  #停止跟踪文件但不删除 git commit -m #提交指定文件 
git commit -m “commit message” #提交所有更新过的文件git commit -m “commit message” #提交所有更新过的文件 git commit -amend #修改最后一次提交 
$ git commit -C HEAD -a -amend #增补提交（不会产生新的提交历史纪录）

查看提交历史 
git log #查看提交历史git log #查看提交历史 git log -p #查看指定文件的提交历史 
git blame  #以列表方式查看指定文件的提交历史git blame  #以列表方式查看指定文件的提交历史 gitk #查看当前分支历史纪录 
gitk  #查看某分支历史纪录gitk  #查看某分支历史纪录 gitk –all #查看所有分支历史纪录 
git branch -v #每个分支最后的提交git branch -v #每个分支最后的提交 git status #查看当前状态 
$ git diff #查看变更内容

撤消操作 
git reset -hard HEAD #撤消工作目录中所有未提交文件的修改内容git reset -hard HEAD #撤消工作目录中所有未提交文件的修改内容 git checkout HEAD #撤消指定的未提交文件的修改内容 
git checkout HEAD. #撤消所有文件git checkout HEAD. #撤消所有文件 git revert #撤消指定的提交

分支与标签 
git branch #显示所有本地分支git branch #显示所有本地分支 git checkout
