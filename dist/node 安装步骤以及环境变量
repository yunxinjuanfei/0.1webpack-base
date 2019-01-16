【安装步骤】

一、安装node.js

1.前往node.js官网下载并安装工具，这里安装路径选到D盘，D:\Program Files\nodejs安装完毕在命令行输入以下命令测试是否安装成功，正确会出现版本号
npm -v

2.改变原有的环境变量，
  (1)我们要先配置npm的全局模块的存放路径以及cache的路径，例如我希望将以上两个文件夹放在NodeJS的主目录下，便在NodeJs下建立"node_global"及"node_cache"两个文件夹，输入以下命令改变npm配置
	npm config set prefix "D:\Program Files\nodejs\node_global"
	npm config set cache "D:\Program Files\nodejs\node_cache"

  (2)在系统环境变量添加系统变量NODE_PATH，输入路径D:\Program Files\nodejs\node_global\node_modules，此后所安装的模块都会安装到改路径下  

  (3)在命令行输入以下命令试着安装express（注：“-g”这个参数意思是装到global目录下，也就是上面说设置的“D:\Program Files\nodejs\node_global”里面。）

  npm install express -g
  安装完毕后可以看到.\node_global\node_modules\express 已经有内容

  (4)在命令行输入node进入编辑模式，输入以下代码测试是否能正常加载模块：

	require('express')
  假设成功，可以看到有输出。假设出错，检查NODE_PATH的路径。


二、安装淘宝npm（cnpm）

 1.安装cnpm

   (1)输入以下命令
	npm install -g cnpm --registry=https://registry.npm.taobao.org
   (2)输入cnpm -v输入是否正常，这里肯定会出错。
	cnpm -v
   (3)添加系统变量path的内容
　　因为cnpm会被安装到D:\ProgramFiles\nodejs\node_global下，而系统变量path并未包含该路径。在系统变量path下添加该路径即可正常使用cnpm。