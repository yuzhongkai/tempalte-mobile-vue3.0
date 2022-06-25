//路由
module.exports = {
  init: function (app, db, projectName, bodyParser) {
    let resData = {
      code: 200,
      success: true,
      message: '获取资料成功'
    }
    /**
     * POST
     * 查询所有用户--yzk
     * @param {Object} req
     * @param {Object} res
     */
    app.post(projectName + '/user/userList', function (req, res) {
      db.query('SELECT * FROM sys_user', [], function (result, fields) {
        resData.rows = result
        resData.total = result.length
        res.json(resData)
      })
    })
    // 获取当前用户的角色
    app.get(projectName + '/user-manage/role', function (req, res) {
      db.query(
        'SELECT * FROM user_role WHERE role_id = ' + req.query.role_id,
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })
    // 导入用户
    app.get(projectName + '/user-manage/batch/import', function (req, res) {})

    // 查询所有用户
    app.get(projectName + '/user-manage/all-list', function (req, res) {
      let resData = {
        success: true,
        code: 200,
        data: {
          list: [
            {
              role: [
                {
                  id: '1',
                  title: '超级管理员'
                }
              ],
              _id: '628944c0169ef65ad8cbc4b3',
              id: '612710a9ec87aa543c9c3420',
              openTime: '1433088000000',
              username: 'super-admin',
              mobile: '188xxxx0001',
              avatar:
                'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员'
                }
              ],
              _id: '628944c0169ef65ad8cbc4b4',
              id: '612710a9ec87aa543c9c3421',
              username: 'admin',
              openTime: '1559318400000',
              mobile: '188xxxx0002',
              avatar:
                'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg'
            },
            {
              role: [
                {
                  id: '6',
                  title: '员工'
                }
              ],
              _id: '628944c0169ef65ad8cbc4b5',
              id: '612710a9ec87aa543c9c3422',
              username: 'test',
              openTime: '1633017600000',
              mobile: '188xxxx0003',
              avatar: 'https://res.lgdsunday.club/zhang-san.jpg'
            },
            {
              role: [],
              _id: '62899b68169ef65ad8cbc4cd',
              username: '刘备',
              mobile: '15500000400',
              id: '3a101d82-a954-499c-b930-6c2fd4e4dd4b',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理'
                },
                {
                  id: '5',
                  title: '保安队长'
                }
              ],
              _id: '62899b68169ef65ad8cbc4ce',
              username: '关羽',
              mobile: '15511211111',
              id: 'fa78721d-a645-46bf-974e-645cf60e5861',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理'
                }
              ],
              _id: '62899b68169ef65ad8cbc4cf',
              username: '张飞',
              mobile: '15522422222',
              id: 'c37501f8-9243-4ff7-9865-f3ce4b497a3f',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899b68169ef65ad8cbc4d0',
              username: '赵云',
              mobile: '15533353333',
              id: '6ea60925-8c0c-4800-a3c8-d2ec9d2eb2e1',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899ba4169ef65ad8cbc4d1',
              username: '刘备',
              mobile: '15500000400',
              id: '400c9f02-b614-4621-9e23-fc8881f6434c',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899ba4169ef65ad8cbc4d2',
              username: '关羽',
              mobile: '15511211111',
              id: 'a6335fcc-25c9-4c33-ac2b-d37eb5d052ad',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理'
                },
                {
                  id: '5',
                  title: '保安队长'
                }
              ],
              _id: '62899ba4169ef65ad8cbc4d3',
              username: '张飞',
              mobile: '15522422222',
              id: '6f17b218-b2da-4f2f-82d3-7bad4bc06cd5',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899ba4169ef65ad8cbc4d4',
              username: '赵云',
              mobile: '15533353333',
              id: 'f2277a7b-f488-435e-897c-966557309d91',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899bd9169ef65ad8cbc4d5',
              username: '刘备',
              mobile: '15500000400',
              id: '232758b7-019a-4e9e-84ac-5f0312fd5c31',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899bd9169ef65ad8cbc4d6',
              username: '关羽',
              mobile: '15511211111',
              id: '2071d67b-67a9-4869-8567-bad4dfdd4dac',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '62899bd9169ef65ad8cbc4d7',
              username: '张飞',
              mobile: '15522422222',
              id: 'f1c3f610-568c-4d0e-a8bc-476e2e71d131',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899bd9169ef65ad8cbc4d8',
              username: '赵云',
              mobile: '15533353333',
              id: 'b5652949-898d-4ff6-b602-eaba5580ed58',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899c03169ef65ad8cbc4d9',
              username: '刘备',
              mobile: '15500000400',
              id: '2f86e046-f51d-4bd7-9592-ba561725b8ae',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899c03169ef65ad8cbc4da',
              username: '关羽',
              mobile: '15511211111',
              id: '4b9480c6-bbd6-44ca-b059-c4068d1f9248',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '62899c03169ef65ad8cbc4db',
              username: '张飞',
              mobile: '15522422222',
              id: 'b966ce99-9d42-4d06-8a26-832f48f79bcc',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899c03169ef65ad8cbc4dc',
              username: '赵云',
              mobile: '15533353333',
              id: 'e84527f1-4caf-476a-9c6f-80668a7c35df',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899c50169ef65ad8cbc4dd',
              username: '刘备',
              mobile: '15500000400',
              id: 'b0a94dab-f1c3-4b78-8711-7acf4f850ae5',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899c50169ef65ad8cbc4de',
              username: '关羽',
              mobile: '15511211111',
              id: '10a5acbe-3739-4cd2-b10e-e1ef7e6bf36b',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '62899c50169ef65ad8cbc4df',
              username: '张飞',
              mobile: '15522422222',
              id: '6e3fe1fa-ce6c-4293-8812-ed1a49e89c4b',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899c50169ef65ad8cbc4e0',
              username: '赵云',
              mobile: '15533353333',
              id: 'eb1c86d7-ddd5-4959-94fa-a6b3f16c0396',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899cb5169ef65ad8cbc4e1',
              username: '刘备',
              mobile: '15500000400',
              id: 'd74187b8-039f-4f68-b386-120ecfbce985',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899cb5169ef65ad8cbc4e2',
              username: '关羽',
              mobile: '15511211111',
              id: 'aa995fec-5297-42eb-8a0d-18bfdd61c502',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '62899cb5169ef65ad8cbc4e3',
              username: '张飞',
              mobile: '15522422222',
              id: 'a40a8854-e6b5-4662-b879-2da328f004e3',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899cb5169ef65ad8cbc4e4',
              username: '赵云',
              mobile: '15533353333',
              id: '82803bd2-e1be-4085-a7ef-c002a594d52e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '62899e84169ef65ad8cbc4e5',
              username: '刘备',
              mobile: '15500000400',
              id: 'e29428b6-2617-4e39-b4c7-3ee713e3f2ba',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '62899e84169ef65ad8cbc4e6',
              username: '关羽',
              mobile: '15511211111',
              id: '78ede87c-bb96-4f72-b36f-0cd0ea4faf21',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '62899e84169ef65ad8cbc4e7',
              username: '张飞',
              mobile: '15522422222',
              id: '3b9c012c-f483-4b3d-ba62-eb7f8933c9f5',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '62899e84169ef65ad8cbc4e8',
              username: '赵云',
              mobile: '15533353333',
              id: '7e4db830-54ce-4ee2-bb78-7c879bab26d2',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '6289a0f0169ef65ad8cbc4e9',
              username: '刘备',
              mobile: '15500000400',
              id: 'e8a261b8-7c59-4572-b952-43c1f00dc577',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '6289a0f0169ef65ad8cbc4ea',
              username: '关羽',
              mobile: '15511211111',
              id: '03d0e78d-2746-4842-bb98-bdec49c0fbf4',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '6289a0f0169ef65ad8cbc4eb',
              username: '张飞',
              mobile: '15522422222',
              id: '03cb1ee2-a022-42cf-8b25-cea6baa39534',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '6289a0f0169ef65ad8cbc4ec',
              username: '赵云',
              mobile: '15533353333',
              id: 'c1dca213-630b-42fe-afcc-7c033485ad3e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '6289a1c8169ef65ad8cbc4ed',
              username: '刘备',
              mobile: '15500000400',
              id: '218b42ec-70d5-4b38-ac33-e51e0ab49db8',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '6289a1c8169ef65ad8cbc4ee',
              username: '关羽',
              mobile: '15511211111',
              id: '163077e2-6dcd-4c18-9e0c-b936d4cb48dd',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '6289a1c8169ef65ad8cbc4ef',
              username: '张飞',
              mobile: '15522422222',
              id: 'dbb7c28c-16c2-4d20-83c7-40cdcde6811a',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '6289a1c8169ef65ad8cbc4f0',
              username: '赵云',
              mobile: '15533353333',
              id: '500dc899-9ea9-495d-a102-17d9cb3eec4f',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '6289a7da169ef65ad8cbc4f1',
              username: '刘备',
              mobile: '15500000400',
              id: '45f3c852-7358-41dc-a472-fac2f1c6f8a9',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '6289a7da169ef65ad8cbc4f2',
              username: '关羽',
              mobile: '15511211111',
              id: 'c88c6d1a-d600-471b-89dc-1ee51985b58b',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '6289a7da169ef65ad8cbc4f3',
              username: '张飞',
              mobile: '15522422222',
              id: 'f18c35ab-bb18-4062-b785-dafd9b3dc001',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '6289a7da169ef65ad8cbc4f4',
              username: '赵云',
              mobile: '15533353333',
              id: '9017fb0a-1495-4636-a1bf-ec5ec672c9b0',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '6289a885169ef65ad8cbc4f5',
              username: '刘备',
              mobile: '15500000400',
              id: '3128b7ef-8eb7-4a34-8f19-f977d093d231',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '6289a885169ef65ad8cbc4f6',
              username: '关羽',
              mobile: '15511211111',
              id: '85bdd7b6-5d8d-438b-a234-bbfe8c37598e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '6289a885169ef65ad8cbc4f7',
              username: '张飞',
              mobile: '15522422222',
              id: 'bec654de-3252-4255-8a92-76f662bd4b79',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['4']
                }
              ],
              _id: '6289a885169ef65ad8cbc4f8',
              username: '赵云',
              mobile: '15533353333',
              id: '69182a6d-6626-4eb0-9d78-cf95d9f3e643',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '6289a88f169ef65ad8cbc4f9',
              username: '刘备',
              mobile: '15500000400',
              id: '6364fabf-acaf-4000-90c2-e510f7c604dd',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '6289a88f169ef65ad8cbc4fa',
              username: '关羽',
              mobile: '15511211111',
              id: '1e1b34fa-97fd-474b-8e1e-5f70ffebb96d',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '6289a88f169ef65ad8cbc4fb',
              username: '张飞',
              mobile: '15522422222',
              id: 'cd88c7d3-0d47-43fc-8a78-3485bf2da247',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '628a2556169ef65ad8cbc509',
              username: '刘备',
              mobile: '15500000400',
              openTime: '44420',
              id: '27762b17-71b9-4733-9682-aa313b02a827',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '628a2556169ef65ad8cbc50a',
              username: '关羽',
              mobile: '15511211111',
              openTime: '44459',
              id: '2b079bcc-210f-44ef-86d1-153828f33d4e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '628a2556169ef65ad8cbc50b',
              username: '张飞',
              mobile: '15522422222',
              openTime: '44464',
              id: '81f0433c-14a9-43e1-a550-de3a2222bfbc',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['1-1', '1-2', '1-3', '4']
                }
              ],
              _id: '628a2556169ef65ad8cbc50c',
              username: '赵云',
              mobile: '15533353333',
              openTime: '44501',
              id: '5d29abe6-c083-43ff-adeb-bb4d43d5f3e2',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '628a2589169ef65ad8cbc50d',
              username: '刘备',
              mobile: '15500000400',
              openTime: '44420',
              id: '7f34f601-d623-4d48-a131-3c47e1ab4d03',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '628a2589169ef65ad8cbc50e',
              username: '关羽',
              mobile: '15511211111',
              openTime: '44459',
              id: '388cb1d7-d2d2-41c7-a330-ca45ef7913e6',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '628a2589169ef65ad8cbc50f',
              username: '张飞',
              mobile: '15522422222',
              openTime: '44464',
              id: 'b98ad979-d975-4731-9075-f12218abb219',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['1-1', '1-2', '1-3', '4']
                }
              ],
              _id: '628a2589169ef65ad8cbc510',
              username: '赵云',
              mobile: '15533353333',
              openTime: '44501',
              id: '8169a303-44d3-4f8e-bc7a-a81df7b1327c',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                  describe: '由超管指定，可以为多个，协助超管管理系统',
                  permissions: ['1', '1-2', '2', '3', '4', '5']
                }
              ],
              _id: '628a29dd169ef65ad8cbc511',
              username: '刘备',
              mobile: '15500000400',
              openTime: '44420',
              id: '6c6443cf-89fc-46a4-8cdd-8b0ebf0efa30',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '3',
                  title: '人事经理',
                  describe: '主管人事相关业务',
                  permissions: ['1', '1-1', '1-2', '1-3', '2', '3', '4', '5']
                }
              ],
              _id: '628a29dd169ef65ad8cbc512',
              username: '关羽',
              mobile: '15511211111',
              openTime: '44459',
              id: '4c49a857-7a9d-4297-8ada-38bba991126e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '4',
                  title: '销售经理',
                  describe: '主管销售相关业务',
                  permissions: [
                    '1',
                    '1-1',
                    '1-2',
                    '1-3',
                    '2',
                    '2-1',
                    '3',
                    '4',
                    '5'
                  ]
                }
              ],
              _id: '628a29dd169ef65ad8cbc513',
              username: '张飞',
              mobile: '15522422222',
              openTime: '44464',
              id: 'fa1f4c23-0230-4c6d-b594-2196ee0b25ab',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            },
            {
              role: [
                {
                  id: '5',
                  title: '保安队长',
                  describe: '主管安保相关业务',
                  permissions: ['1-1', '1-2', '1-3', '4']
                }
              ],
              _id: '628a29dd169ef65ad8cbc514',
              username: '赵云',
              mobile: '15533353333',
              openTime: '44501',
              id: '8aac0bed-aa22-44f0-8c15-d582eb2c528e',
              avatar: 'https://res.lgdsunday.club/default-avatar.jpeg'
            }
          ]
        },
        message: 'success'
      }
      res.json(resData)
    })
    // 查询用户
    app.get(projectName + '/user-manage/list', function (req, res) {
      // 获取提交的参数
      let param = req.query
      let sql =
        'select a.user_id,a.username,a.mobile,a.avatar,a.openTime,r.rolename,r.role_id from user_manage a LEFT JOIN user_role r ON a.role_id = r.role_id ' +
        ' limit ' +
        (param.page - 1) * param.pagesize +
        ',10'
      db.query(sql, [], function (result, fields) {
        result.forEach((item) => {
          item.role = [{ id: item.role_id, title: item.rolename }]
        })
        resData.data = {}
        resData.data.list = result
        resData.data.page = parseInt(param.page)
        resData.data.pagesize = parseInt(param.pagesize)
        resData.data.total = 10
        res.json(resData)
      })

      // const result = {
      //   success: true,
      //   code: 200,
      //   data: {
      //     list: [
      //       {
      //         role: [
      //           {
      //             id: '1',
      //             title: '超级管理员'
      //           }
      //         ],
      //         _id: '6282ad40169ef65ad8cbc261',
      //         id: '612710a9ec87aa543c9c3420',
      //         openTime: '1433088000000',
      //         username: 'super-admin',
      //         mobile: '188xxxx0001',
      //         avatar:
      //           'https://dgss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/7dd579757a686f6e676b6169363637g3c1101000000?t=1651300440671'
      //       },
      //       {
      //         role: [
      //           {
      //             id: '2',
      //             title: '管理员'
      //           }
      //         ],
      //         _id: '6282ad40169ef65ad8cbc262',
      //         id: '612710a9ec87aa543c9c3421',
      //         username: 'admin',
      //         openTime: '1559318400000',
      //         mobile: '188xxxx0002',
      //         avatar:
      //           'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg'
      //       }
      //     ],
      //     total: 3,
      //     page: '1',
      //     size: '2'
      //   },
      //   message: 'success'
      // }
      // res.json(result)
    })
    // 获取用户详情
    app.get(projectName + '/user-manage/detail', function (req, res) {
      const resData = {
        success: true,
        code: 200,
        data: {
          role: [
            {
              id: '1',
              title: '超级管理员'
            }
          ],
          remark: ['超级管理员', 'BOSS'],
          experience: [
            {
              startTime: '1538323200000',
              endTime: '1551369600000',
              title: '慕课网',
              desc: '混合开发京东商城'
            },
            {
              startTime: '1614528000000',
              endTime: '1625068800000',
              title: '慕课网',
              desc: 'uni-app 开发企业级小程序'
            }
          ],
          _id: '628a9640169ef65ad8cbc516',
          id: '612710a9ec87aa543c9c3420',
          openTime: '1433088000000',
          username: 'super-admin',
          title: '超级管理员',
          mobile: '188xxxx0001',
          avatar:
            'https://dgss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/7dd579757a686f6e676b6169363637g3c1101000000?t=1651300440671',
          gender: '男',
          nationality: '汉',
          address: '北京市朝阳区xx大道 11xx0 号 3 层',
          major: '在线职业教育平台',
          glory: '国内领先的线上 IT 教育品牌'
        },
        message: 'success'
      }
      res.json(resData)
    })
    // 章节
    app.get(projectName + '/user/chapter', function (req, res) {
      const result = {
        success: true,
        code: 200,
        data: [
          {
            content: '课程导读',
            timestamp: '第一章',
            id: 1
          },
          {
            content: ' 标准化大厂编程规范解决方案之ESLint + Git Hooks ',
            timestamp: '第二章',
            id: 2
          },
          {
            content: '项目架构解决方案之搭建登录基础架构',
            timestamp: '第三章',
            id: 3
          },
          {
            content: '项目架构解决方案之搭建Layout基础架构',
            timestamp: '第四章',
            id: 4
          },
          {
            content: '后台项目前端综合解决方案之 通用功能开发',
            timestamp: '第五章',
            id: 5
          },
          {
            content: 'vue3 + element plus 综合实现解决方案之个人中心页面',
            timestamp: '第六章',
            id: 6
          },
          {
            content: 'excel 、zip 与前端结合解决方案之用户管理页面实现',
            timestamp: '第七章',
            id: 7
          },
          {
            content:
              '权限控制解决方案之角色、权限页面渲染实现项目的权限控制功能',
            timestamp: '第八章',
            id: 8
          },
          {
            content: '列表排序解决方案之实现热门文章排名',
            timestamp: '第九章',
            id: 9
          },
          {
            content: '文章编辑解决方案之实现创建文章功能',
            timestamp: '第十章',
            id: 10
          },
          {
            content: '错误综合处理方案之错误页面的统一处理',
            timestamp: '第十一章',
            id: 11
          },
          {
            content: '项目发布解决方案之构建与发布',
            timestamp: '第十二章',
            id: 12
          },
          {
            content: '课程总结',
            timestamp: '第十三章',
            id: 13
          }
        ],
        message: '获取资料成功'
      }
      res.json(result)
    })
    // 功能
    app.get(projectName + '/user/feature', function (req, res) {
      const result = {
        success: true,
        code: 200,
        data: [
          {
            title: 'Vue3 + 全家桶',
            percentage: 100,
            content:
              '项目基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">vue3</a>全家桶进行开发，全面使用最新的的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准，为你带来不一样的 vue3 开发体验',
            id: 1
          },
          {
            title: 'Element-Plus',
            percentage: 100,
            content:
              '<a target="_blank" href="https://element-plus.org/#/zh-CN">Element Plus</a>，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库。是 Element UI 的官方 vue 3 兼容版本',
            id: 2
          },
          {
            title: 'vue-element-admin',
            percentage: 100,
            content:
              '<a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/">vue-element-admin</a> 是一个后台前端解决方案，它基于 vue 和 element-ui实现，并有用 70K 的 <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin">star</a>。<br />本项目使用最新 vue 技术对其进行了重构，并在其现有功能上进行了扩展，致力于为大家带来更加符合 <b>现代后台开发的前端技术解决方案</b>',
            id: 3
          },
          {
            title: 'ESLint + Git Hooks',
            percentage: 100,
            content:
              'ESLint 对应编码规范，Git Hooks 对应 Git 规范。<br /> 想要开发出大厂标准的企业级项目，需要先从规范做起！',
            id: 4
          },
          {
            title: '架构设计',
            percentage: 100,
            content:
              '阿里前端 P7 岗被称为 《技术专家》，也有人喜欢叫他们为 “前端架构师”，既然被称为 “架构师” ，那么架构设计当然是不可缺少的一环咯',
            id: 5
          },
          {
            title: '权限验证（页面权限、功能权限、动态权限、权限配置）',
            percentage: 100,
            content:
              '全面的后台权限验证系统，实现了 <b>页面权限、功能权限、动态权限、权限配置</b> 等全方位的权限功能',
            id: 6
          },
          {
            title: '功能引导',
            percentage: 100,
            content: '对用户的功能引导',
            id: 7
          },
          {
            title: '可配置 + 收缩侧边栏',
            percentage: 100,
            content:
              '根据路由动态生成的 Menu 菜单，实现真正的 <b>配置 Menu</b>',
            id: 8
          },
          {
            title: '动态面包屑',
            percentage: 100,
            content: '动态生成的面包屑数据',
            id: 9
          },
          {
            title: 'Tags View',
            percentage: 100,
            content: '便签快捷导航功能',
            id: 10
          },
          {
            title: 'svg sprite 图标',
            percentage: 100,
            content: '自定义的 svg Icon 配合 el Icon 自动分配导入',
            id: 11
          },
          {
            title: '国际化',
            percentage: 100,
            content: '多语言的国际化功能实现',
            id: 12
          },
          {
            title: '动态换肤',
            percentage: 100,
            content: '主题更换功能，提供缓存实现',
            id: 13
          },
          {
            title: '页面搜索',
            percentage: 100,
            content: '根据路由配置自动化生成的页面搜索数据，无需手动配置',
            id: 14
          },
          {
            title: 'excel 导出、导入',
            percentage: 100,
            content: 'excel 表格的导入、导出实现',
            id: 15
          },
          {
            title: 'zip 导入',
            percentage: 100,
            content: '页面数据导出为 zip ',
            id: 16
          },
          {
            title: '富文本 + MarkDown 编辑器',
            percentage: 100,
            content: '常用的编辑器功能，包含 富文本编辑器 && MarkDown 编辑器',
            id: 17
          },
          {
            title: '动态表格 + 拖拽表格 + 内联编辑表格',
            percentage: 100,
            content:
              '表格列表的常见操作，多用于包含表格项的展示功能中。包括：动态表格 && 拖拽表格 && 内联编辑表格 ',
            id: 18
          },
          {
            title: '统一错误处理',
            percentage: 100,
            content:
              '页面级的错误处理由 vue-router 统一处理。包含 401 和 404 的错误处理',
            id: 19
          },
          {
            title: '发布',
            percentage: 100,
            content: '构建与发布',
            id: 20
          },
          {
            title: '其他',
            percentage: 100,
            content:
              '除了以上功能之外，我们还实现了很多其他的功能，比如：CDN、动态的环境变量配置、懒加载、跨域等等',
            id: 21
          }
        ],
        message: '获取资料成功'
      }
      res.json(result)
    })

    /**
     * POST
     * 根据用户登录信息获取菜单路由--yzk
     * 接收参数传参数
     */
    app.post(
      projectName + '/user/menuRouters',
      bodyParser.json(),
      function (req, res) {
        // 获取请求参数
        let reqData = req.body
        db.query(
          'SELECT * FROM sys_menu WHERE menu_id !=""',
          [],
          function (result, fields) {
            resData.data = result
            res.json(resData)
          }
        )
      }
    )

    // 添加用户
    app.post(projectName + '/user/add', bodyParser.json(), function (req, res) {
      // 获取提交的参数
      let userData = req.body
      db.query(
        'SELECT title,id,add_time FROM sys_user',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })

    // 删除用户
    app.get(projectName + '/user/del', function (req, res) {
      db.query(
        'SELECT title,id,add_time FROM sys_user',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })

    // 修改用户
    app.get(projectName + '/user/update', function (req, res) {
      db.query(
        'SELECT title,id,add_time FROM sys_user',
        [],
        function (result, fields) {
          resData.data = result
          res.json(resData)
        }
      )
    })
  }
}
