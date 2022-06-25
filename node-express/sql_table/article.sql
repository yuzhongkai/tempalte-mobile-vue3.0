-- 文章排名 article_list
DROP TABLE IF EXISTS `article_list`;
CREATE TABLE `article_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长列',
  `_id` varchar(50)  NOT NULL COMMENT 'id',
  `ranking` varchar(50)  NOT NULL COMMENT '关联id',
  `title` varchar(50)  NOT NULL COMMENT '标题',
  `author` varchar(50)  NOT NULL COMMENT '作者',
  `content` varchar(50)  DEFAULT '' COMMENT '描述',
  `openTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章排名表';

INSERT INTO `article_list` (_id,ranking,title,author,content) VALUES
('629673c0169ef65ad8cbc9ae','1','龙象般若功后续任务详细流程','烟雨江湖',''),
('629673c0169ef65ad8cbc9af','2','粽子在哪','妄想山海',''),
('629673c0169ef65ad8cbc9b0','3','紫阳书院答题答案汇总2022','烟雨江湖',''),
('629673c0169ef65ad8cbc9b1','4','长安保卫战活动策略大全','梦幻西游',''),
('629673c0169ef65ad8cbc9b2','5','端午活动粽子位置策略','妄想山海',''),
('629673c0169ef65ad8cbc9b3','6','6月1日鸣谢收藏家先祖兑换图分享2022','光遇',''),
('629673c0169ef65ad8cbc9b4','7','魔武双修成就攻略','炉石传说',''),
('629673c0169ef65ad8cbc9b5','8','颠倒旋转成就攻略','炉石传说',''),
('629673c0169ef65ad8cbc9b6','9','渔樵问答5.31答案介绍05.31','无悔华夏',''),
('629673c0169ef65ad8cbc9b7','10','火眼金睛第五天策略分享5.31','梦幻西游','')
