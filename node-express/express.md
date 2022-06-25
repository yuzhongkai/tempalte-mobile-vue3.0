## express框架
## 使用请求方法
> 安装express
``` javascript
npm install express --save
npm init
npm install mysql
npm install http
```
>引入框架
```
let app = express();//引入框架
let bodyParser = require('body-parser');//引入参数模块
	
```

> 使用参数模块
``` javascript
app.use(bodyParser.urlencoded({extended:true}));
```

> 参数输出
``` javascript
// POST
app.post(projectName + '/login',bodyParser.json(), function(req, res) {
	console.log(req.body);
	let result = {"code":20000,"data":{"token":"admin-token"}};
	res.status(200);
	res.json(result);
});

// GET
app.get(projectName + '/login', function(req, res) {
	console.log(req.query);
	let result = {"code":20000,"data":{"token":"admin-token"}};
	res.status(200);
	res.json(result);
});
```
