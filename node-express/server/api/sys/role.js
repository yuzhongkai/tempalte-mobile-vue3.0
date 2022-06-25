// 向外暴露方法
module.exports = {
  init: function (app, db, projectName, bodyParser) {
    let resData = {
      code: 200,
      success: true,
      message: '获取资料成功'
    }

    // 查询所有角色
    app.get(projectName + '/role/list', function (req, res) {
      db.query('SELECT * FROM role_list', [], function (result, fields) {
        resData.data = result
        res.json(resData)
      })
    })

    // -------------
    // 导出角色
    app.get(projectName + '/role/export', function (req, res) {
      db.query('SELECT * FROM sys_role', [], function (result, fields) {
        resData.data = result
        res.json(resData)
      })
    })

    // 添加角色
    app.get(projectName + '/role/add', function (req, res) {
      db.query(
        'SELECT title,id,add_time FROM sys_role',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })

    // 删除角色
    app.get(projectName + '/role/del', function (req, res) {
      db.query(
        'SELECT title,id,add_time FROM sys_role',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })

    // 修改角色
    app.get(projectName + '/role/update', function (req, res) {
      db.query(
        'SELECT title,id,add_time FROM sys_role',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })
  }
}
