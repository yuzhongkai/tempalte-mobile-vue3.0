// 定义接口项目名
let projectName = '/dev-api'
let express = require('express')
let http = require('http')
let db = require('./util/mysql')
let app = express()
let bodyParser = require('body-parser') //引入参数模块
app.use(bodyParser.urlencoded({ extended: true })) //使用参数

// 设置跨域访问
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 初始API接口
let apiArr = [
  './api/system',
  './api/article',
  './api/sys/user',
  './api/sys/role',
  './api/sys/permission'
]
apiArr.forEach((item) => {
  let apiMethod = require(item)
  apiMethod.init(app, db, projectName, bodyParser)
})

// 配置服务端口监听
let server = app.listen(6688, () => {
  let host = server.address().address
  let port = server.address().port
  console.log('vue server listening http://%s:%s', host, port)
})
