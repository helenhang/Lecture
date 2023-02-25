# docker
Documentation
*	https://docs.docker.com/engine/reference/builder/
*	Docker.com


## image
可以从docker hub里面pull image下来
`docker pull node:latest`
也可以从一个docker file来build一个image
#### Dockerfile
```dockerfile
# from the base image
FROM node:latest 
# open a port to external
EXPOSE 8080
CMD ["/bin/bash"]
```
ARGS:		arguments
	- ARG NODE_VERSION=19-alpine3.16
  - ARG PORT=8080
	- FROM node:${ NODE_VERSION }
	- EXPOSE ${PORT}
	- CMD[“/bin/bash”]
  - RUN - RUN <command> , RUN [“executable”,”- parameter1”, parameter2” .....]
  - CMD:
	- CMD????
  - Label->use docker inspect
  - COPY 
     - copy the local file to the image
     - COPY // 复制文件
 - ADD // 高级复制
 - CMD // 容器启动指令
 - ENV // 环境变量
 - EXPOSE // 暴露接口
 - WORDIR:
    - Workdir /usr/src/app 相当于直接cd到这个path，如果没有，回直接create 这个subdir。

1. Docker commands
*	Run
*	Stock
*	Remove
*	Show containers
```shell
# 容器
$ docker run  // 创建并启动容器
$ docker start // 启动容器
$ docker ps // 查看容器
$ docker stop // 终止容器
$ docker restart // 查看容器
$ docker attach // 进入容器
$ docker exec // 查看容器
$ docker export // 导出容器
$ docker import // 导入容器快照
$ docker rm // 删除容器
$ docker log // 查看日志

# 镜像
$ docker search // 检索镜像
$ docker pull // 获取镜像
$ docker images // 列出镜像
$ docker image ls // 列出镜像
$ docker rmi // 删除镜像
$ docker image rm // 删除镜像
$ docker save // 导出镜像
$ docker load // 导入镜像

# Dockfile定制镜像以及常用指令

$ docker build // 构建镜像
$ docker run // 运行镜像

# 服务
$ docker -v // 查看docker的简要信息
$ docker -version // 查看docker版本的简详细信息
$ systemctl start docker // 启动docker
$ systemctl stop docker // 关闭docker
$ systemctl enable docker // 设置开机启动
$ service docker restart // 重启docker服务
$ service docker stop // 关闭docker服务

# Docker hub:
$	Docker images
$	Docker tag
  # 更改tag的名字
  - Docker tag ralph/node4 rad1234/cmpt1244
```


在container里面run，就是说after docker run之后，回执行到run
ARG NODE_VERSION=19-alpine3.16
FROM node:${NODE_VERSION}EXPOSE 8080
RUN apk update && apk add bash
或者
RUN[“apk”, “update”]
RUN [“apk”,”add”,”bash”]

CMD ["/bin/bash"]


RUN、CMD 和 ENTRYPOINT 这三个 Dockerfile 指令看上去很类似，很容易混淆。本节将通过实践详细讨论它们的区别。
简单的说：
1.	RUN 执行命令并创建新的镜像层，RUN 经常用于安装软件包。
2.	CMD 设置容器启动后默认执行的命令及其参数，但 CMD 能够被 docker run 后面跟的命令行参数替换。
3.	ENTRYPOINT 配置容器启动时运行的命令。

#### Shell 和 Exec 格式
我们可用两种方式指定 RUN、CMD 和 ENTRYPOINT 要运行的命令：Shell 格式和 Exec 格式，二者在使用上有细微的区别。
##### Shell 格式
<instruction> <command>
例如：
`RUN apt-get install python3  `
`CMD echo "Hello world"  `
`ENTRYPOINT echo "Hello world" `
当指令执行时，shell 格式底层会调用 `/bin/sh -c <command>` 
例如下面的 Dockerfile 片段：
```
ENV name Cloud Man  
ENTRYPOINT echo "Hello, $name" 
```
执行 docker run \<image\> 将输出：
Hello, Cloud Man
注意环境变量 name 已经被值 Cloud Man 替换。
下面来看 Exec 格式。
##### Exec 格式
<instruction> ["executable", "param1", "param2", ...]
例如：
`RUN ["apt-get", "install", "python3"]  `
`CMD ["/bin/echo", "Hello world"]  `
`ENTRYPOINT ["/bin/echo", "Hello world"]`
当指令执行时，会直接调用 <command>，不会被 shell 解析。

例如下面的 Dockerfile 片段：
ENV name Cloud Man  
ENTRYPOINT ["/bin/echo", "Hello, $name"]

以上饮用自：https://juejin.cn/post/7046941766263504933



## nodejs

```shell
#Create config file of the server
npm init
#Add library (package)
npm add express
npm add body-parser
```
根据以上命令，生成package.json文件
写自己的server.js
然后运行 `node server.js'来启动nodejs

或者，在run了一个container以后，在shell里面运行
```shell
npm init -y
npm install express body-parser mysql --save
node server.js
```
来启动server.js里面对应的web server

#### server.js
```js
‘use strict’;
//load package
Const express = require(“express’);
//npm is a manage package tools
Const port = 8080;
Cost host = “0.0.0.0’; //a machine can have a lot of IP, but specify this ip:0.0.0.0
Const app = express();

App.get(‘/greeting’, (req,res) => {		//(req,res) ==( standin, stand out)
Res.send(“hello “);
});
App.use(‘/’,express.static(‘pages’));

App.listen(part, host);
Console.log(‘up and running’);
```
Package.json:  server configrature of the server
```json
  "name": "101-app",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
…
```
Package-lock.json

server 返回status：
1. 200: ok status	 The 200 OK status code means that the request was successful, but the meaning of success depends on the request method used: GET: The requested resource has been fetched and transmitted to the message body.
2. 300: Multiple Choices redirect status response code indicates that the request has more than one possible responses. Th
3. 400:
   - 401, 404,: client’s problem
4. 500: server has problem, crash

#### Kill server => ctrl c

用nodejs,不知道为什么得需要port 8080
但是用docker的container，启动nodejs以后，port是80

Ajax原来只是别用form就行
不然会一直提交
![picture 1](../images/9c848bd2acf63e1692c6ca7f8d32f6d8a3f47682876a3db8a209f450fbfa8c06.png)  



### Docker-compose
Docker compose to run the docker
Docker-compose.yml:
```yml
Version: 3.9				for docker compose version
Services:
Python1:
		Build: .
		Container_name: tython_1
		Command: flask run –host = 0.0.0.0
		Posts:
			- “80:5000”
		Volumes:
			- /Users/ralph/classes/436/test/tython: /usr/src/app
		Environment:
			- FLASK_APP=hello
			- FLASK_ENV=development
```
Web server in python / Flask
```
From flask import Flask
From flask import request, jsonify

App = Flask(__name__)
@app.route(“/”)
Def hello_world():
	Return “<p> Hello World </p>”

@app.route(“/add”,)
```
```shell
#start a compose
Docker-compose up: 			
#detach
Docker-compose up -d 			
# remove the container
Docker-compose down			
```
Docker-compse 可以起很多个services 在同一个container
每一个service需要一个独立的port

Copilyer???

Docker-compose.yml 要注意缩进，根据缩进来看意义

Run in background –》deamon process
当两个services用的同一个port，那么访问同一个port，两个service会同时做出响应

Teachempower.com    看各个service的排名

Err=>{}
和(err)=>{}不一样吗？没听懂

Dragon-core 
Just-js

Docker-compose inspect
Docker inspect python_1  >  data

