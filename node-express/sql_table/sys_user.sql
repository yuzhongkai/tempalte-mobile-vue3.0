
--- 用户角色 user_role
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长列',
  `role_id` varchar(50)  NOT NULL COMMENT '角色编号',
  `rolename` varchar(50)  NOT NULL COMMENT '角色名称',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色信息表';

INSERT INTO `user_role` (role_id,rolename) VALUES ('1','超级管理员'),('2','管理员'),('3','操作员');



-- 用户列表 user_manage
DROP TABLE IF EXISTS `user_manage`;
CREATE TABLE `user_manage` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长列',
  `user_id` varchar(50)  NOT NULL COMMENT '用户编号',
  `role_id` varchar(50)  NOT NULL COMMENT '角色编号',
  `username` varchar(50)  NOT NULL COMMENT '用户',
  `mobile` varchar(50)  NOT NULL COMMENT '联系方式',
  `avatar` varchar(150)  NOT NULL COMMENT '用户自定义图像',
  `openTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户基本信息表';
INSERT INTO `user_manage` (user_id,role_id,username,mobile,avatar) VALUES 
('21948e6d7cdf404fb0a5a320a86c3144','1', 'super-admin', '188xxxx0001','https://dgss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/7dd579757a686f6e676b6169363637g3c1101000000?t=1651300440671')
,('451d9cfae4ba4790a6737ac67e8220c1','1',  'admin', '188xxxx0002','https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg')
,('cb33c25f5c664058a111a9b876152316','3',  'super-admin', '188xxxx0003','https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg')
,('21948e6d7cdf404fb0a5a320a86c3145','1',  'super-admin', '188xxxx0001','https://dgss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/7dd579757a686f6e676b6169363637g3c1101000000?t=1651300440671')
,('451d9cfae4ba4790a6737ac67e8220c4','2',  'admin', '188xxxx0002', 'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg')
,('cb33c25f5c664058a111a9b876152313','3',  'super-admin', '188xxxx0003','https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg')

