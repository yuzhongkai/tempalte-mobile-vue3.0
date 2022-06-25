
-- 角色列表 role_list
DROP TABLE IF EXISTS `role_list`;
CREATE TABLE `role_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长列',
  `title` varchar(50)  NOT NULL COMMENT '名称',
  `content` varchar(100)  NOT NULL COMMENT '描述',
  `openTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色信息表';

INSERT INTO `role_list` (title,content) VALUES
('超级管理员','唯一账号，可以操作系统所有功能'),
('管理员','由超管指定，可以为多个，协助超管管理系统'),
('人事经理','主管人事相关业务'),
('销售经理','主管销售相关业务'),
('保安队长','主管安保相关业务'),
('员工','普通员工')
