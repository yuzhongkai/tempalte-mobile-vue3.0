// 处理子
function mergePermission(result) {
  var newArr = []
  var resultNew = JSON.parse(JSON.stringify(result))
  result.forEach((item) => {
    if (item.pid == 0) {
      var children = resultNew.filter((child, index) => {
        return parseInt(child.pid) == parseInt(item.id)
      })
      item.children = children
      newArr.push(item)
    }
  })
  return newArr
}

// 向外暴露方法
module.exports = {
  init: function (app, db, projectName, bodyParser) {
    // 公用返回参数code
    let resData = {
      code: 200,
      success: true,
      message: '获取资料成功'
    }

    // 查询所有权限
    app.get(projectName + '/permission/list', function (req, res) {
      db.query('SELECT * FROM permission_list', [], function (result, fields) {
        // 权限数据拆解
        resData.data = mergePermission(result)
        res.json(resData)
      })
    })
  }
}
