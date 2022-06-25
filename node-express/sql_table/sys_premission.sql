-- 权限列表 permission_list
DROP TABLE IF EXISTS `permission_list`;
CREATE TABLE `permission_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长列',
  `pid` varchar(50)  NOT NULL COMMENT '关联id',
  `permissionName` varchar(50)  NOT NULL COMMENT '',
  `permissionMark` varchar(50)  NOT NULL COMMENT '',
  `permissionDesc` varchar(50)  NOT NULL COMMENT '',
  `openTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='权限信息表';

INSERT INTO `permission_list` (pid,permissionName,permissionMark,permissionDesc) VALUES
('0','超级管理员','userManage','员工管理菜单'),
('0','角色列表','roleList','角色列表菜单'),
('0','权限列表','permissionList','权限列表菜单'),
('0','文章排名','articleRanking','文章排名菜单'),
('0','创建文章','articleCreate','创建文章页面'),
('1','分配角色','distributeRole','为员工分配角色'),
('1','导入员工','importUser','通过 excel 导入员工'),
('1','删除员工','removeUser','删除员工'),
('2','分配权限','distributePermission','为角色分配权限')