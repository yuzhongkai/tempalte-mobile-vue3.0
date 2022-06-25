// 向外暴露方法
module.exports = {
  init: function (app, db, projectName, bodyParser) {
    // 公用返回参数code
    let resData = {
      code: 200,
      success: true,
      message: '获取资料成功'
    }

    // 查询文章
    app.get(projectName + '/article/list', function (req, res) {
      // 获取提交的参数
      let param = req.query
      db.query(
        'SELECT * FROM article_list limit ' +
          (param.page - 1) * param.size +
          ',10',
        [],
        function (result, fields) {
          resData.data = {}
          resData.data.list = result
          resData.data.page = parseInt(param.page)
          resData.data.pagesize = parseInt(param.size)
          resData.data.total = 10
          res.json(resData)
        }
      )
    })

    // 根据id查询文章
    app.get(projectName + '/article/detail', function (req, res) {
      // 获取提交的参数
      let param = req.query
      db.query('SELECT * FROM article_list', [], function (result, fields) {
        resData.data = result.filter((item) => item._id == param.articleId)[0]
        res.json(resData)
      })
    })

    // 创建文章
    app.post(
      projectName + '/article/create',
      bodyParser.json(),
      function (req, res) {
        // 获取提交的参数
        let param = req.body
        console.log(param)
        let key = [],
          value = []
        for (let i in param) {
          key.push("'" + i + "'")
          value.push("'" + param[i] + "'")
        }
        db.query(
          `INSERT INTO 'article_list' (${key.join(',')}) VALUE (${value.join(
            ','
          )})`,
          [],
          function (result, fields) {
            resData.data = result.filter(
              (item) => item._id == param.articleId
            )[0]
            res.json(resData)
          }
        )
      }
    )
  }
}
