## myblog

我的个人博客，是我通过极客学院wiki教程[使用 Express + MongoDB 搭建多人博客](http://wiki.jikexueyuan.com/project/express-mongodb-setup-blog/)学习编写而成。使用的技术栈包括，Express + mongoDB。

### 当前版本功能

v1.0.0 - 2018-01-08

### 准备项目

如果是第一次部署工程，执行下面命令：

```shell
$ git clone https://github.com/baishengmei/myblog
$ cd myblog
$ yarn install
```

### 部署项目

首先启动mongodb。例如：

- 在我本人的mac上，启动方式为 ：cd /usr/local/bin 
- 再执行sudo mongod 和 sudo mongo

接着，启动项目：yarn start:test 或者 npm start:test

最后，浏览器访问：localhost:3003。

** 注意：端口号，可在app.js文件app.set('port', process.env.PORT || 3003)中进行修改 **


### 准备文件夹及权限

在项目更目录创建 uploads 文件夹，同时保证系统有写入此文件夹的权限

### myblog功能列表
- 使用markdown
- 文件上传
- 实现用户页面和文章页面
- 增加编辑与删除功能
- 实现留言功能
- 实现分页功能
- 增加存档页面
- 增加标签和标签页面
- 增加pv统计和留言统计
- 增加文章检索功能

### 开发文档

### 项目结构

```
.
├── /bin/  
│   ├── /www                    # listen the port and start the project. Not in use now！
├── /data/                      # database with mongodb
├── /models/                    # Something about database
├── /node_modules/              # 3rd-party libraries and utilities
|—— /public/                    # The static resource
├── /routes/                    # The routes
├── /views/                     # The view templates
├── app.js                      # Set the route and start the project
└── setting.js                  # The settings about the mongodb
└── package.json                # The list of 3rd party libraries and utilities
```
