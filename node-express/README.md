# nodeJS-express

#### 介绍
node-express

#### 软件架构
软件架构说明 

#### nodeJs
#### 目录
```
server // node服务
	|--api  // api接口文件夹
		|--system 	   //系统接口文件夹
			|--user.js //用户管理请求
			|--role.js //角色管理请求
		system.js //系统请求
			
	|--config // 配置文件
		|--mysql-config.js // mysql配置文件
		
	|--util   //工具类文件夹
		|--mysql.js // mysql连接类
		
	|--app.js  // node入口启动文件
	
	|--package-lock.json // 包说明文件
	
	|--package.json  // 包管理文件
	
```

#### 创建服务端
``` javascript
mkdir server
cd server/
touch app.js
```
#### 安装express
``` javascript
npm install express --save
npm init
npm install mysql
npm install http
```
#### 写后端启动文件 app.js
``` javascript
let express = require('express');
let http = require('http');
let db = require('./util/mysql');
let app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// 引入用户api
let userApi =  require('./api/system/user');
// 初始api接口
userApi.init(app,db);

//配置服务端口监听
let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
```
#### 打包并部署
``` javascript
npm run build
node server/app.js
```

#### 浏览器输入
``` javascript
http://127.0.0.1:3000/
``` 

