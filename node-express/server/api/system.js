let treeMenuData = {
  code: 200,
  data: [
    {
      id: 313,
      label: '江西省',
      children: [
        {
          id: 5698946506965440,
          label: '海南藏族自治州',
          children: [
            { id: 4549371958476219, label: '大渡口区' },
            { id: 1471667045164972, label: '长葛市' },
            { id: 8634131639709980, label: '吴江区' }
          ]
        },
        {
          id: 8714854875067998,
          label: '酒泉市',
          children: [
            { id: 5249547396540814, label: '阿克苏市' },
            { id: 8877227606291317, label: '太平区' },
            { id: 3405073344436938, label: '岫岩满族自治县' }
          ]
        }
      ]
    },
    {
      id: 314,
      label: '甘肃省',
      children: [
        {
          id: 5469260631839090,
          label: '临汾市',
          children: [
            { id: 6858991940058828, label: '岢岚县' },
            { id: 3310553450152345, label: '东辽县' },
            { id: 4020956609622291, label: '城区' }
          ]
        },
        {
          id: 3881636010245159,
          label: '锦州市',
          children: [
            { id: 645825915471891, label: '青县' },
            { id: 1310193541070525, label: '新建县' },
            { id: 810673669511201, label: '通渭县' }
          ]
        }
      ]
    },
    {
      id: 315,
      label: '河南省',
      children: [
        {
          id: 3272306821371824,
          label: '鄂州市',
          children: [
            { id: 2061035775944993, label: '淮上区' },
            { id: 4714519024178308, label: '其它区' },
            { id: 6818206795749720, label: '沙洋县' }
          ]
        },
        {
          id: 32933660216634,
          label: '本溪市',
          children: [
            { id: 3508129335553841, label: '独山县' },
            { id: 395728182542868, label: '樟树市' },
            { id: 2010121187988784, label: '修文县' }
          ]
        }
      ]
    },
    {
      id: 316,
      label: '宁夏回族自治区',
      children: [
        {
          id: 7450613677059420,
          label: '北京市',
          children: [
            { id: 3463410361524161, label: '纳雍县' },
            { id: 2932009338550635, label: '龙泉市' },
            { id: 7348339832144652, label: '湄潭县' }
          ]
        },
        {
          id: 248795561102358,
          label: '固原市',
          children: [
            { id: 4252068525050167, label: '-' },
            { id: 704393269340102, label: '兴业县' },
            { id: 657780984616199, label: '-' }
          ]
        }
      ]
    }
  ]
}

// 向外暴露方法
module.exports = {
  init: function (app, db, projectName, bodyParser) {
    let statusCode = 200
    // 系统登录 POST
    app.post(
      projectName + '/system/login',
      bodyParser.json(),
      function (req, res) {
        let result = {
          code: statusCode,
          data: { token: 'admin-token' },
          success: true,
          message: '登录成功'
        }
        // res.status(200);
        res.json(result)
      }
    )
    // 获取用户信息 GET
    app.get(projectName + '/system/profile', function (req, res) {
      let result = {
        code: statusCode,
        data: {
          roles: ['admin'],
          introduction: 'I am a super administrator',
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592760650708&di=ee0dba4dadd0caf49fce059b21d8e8c4&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201903%2F04%2Fea093ada43.jpg',
          name: 'Super Admin',
          success: true
        }
      }

      let result1 = {
        code: statusCode,
        data: {
          roles: [{ id: '1', title: '超级管理员' }],
          avatar:
            'https://dgss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/7dd579757a686f6e676b6169363637g3c1101000000?t=1651300440671',
          permission: {
            menus: ['userManage', 'roleList', 'articleRanking', 'articleCreate']
          },
          title: '超级管理员',
          id: '_sdfsfsfsfs45353n5n4n',
          username: 'super-admin'
        },
        message: '获取资料成功',
        success: true
      }
      res.json(result1)
    })
    // 获取树菜单数据 GET
    app.get(projectName + '/system/treeMenu', function (req, res) {
      res.json(treeMenuData)
    })
    // 系统退出 POST
    app.post(
      projectName + '/system/logout',
      bodyParser.json(),
      function (req, res) {
        let result = { code: 200, data: 'success' }
        // db.query('SELECT title,id,add_time FROM sys_user', [],function(result,fields){});
        res.json(result)
      }
    )
  }
}
