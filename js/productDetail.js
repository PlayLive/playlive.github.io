function initDetailData(key,divID){

  var detailDatas = [
    {
      key:'haitang',
      name:'<span>嗨糖</span> ios 小说阅读App',
      datas:['projects/haitang/1.jpg','开机页',
            'projects/haitang/2.jpg','首页',
            'projects/haitang/3.jpg','小说详情页',
            'projects/haitang/4.jpg','书架',
            'projects/haitang/5.jpg','小说阅读器',
            'projects/haitang/6.jpg','我的'
           ]
    },
    {
      key:'chidianhaode',
      name:'<span>吃点好的</span> ios 小说阅读App',
      datas:['projects/chidianhaode/1.png','开机页',
             'projects/chidianhaode/2.png','首页',
             'projects/chidianhaode/3.png','列表搜索页',
             'projects/chidianhaode/4.png','地图搜索页',
             'projects/chidianhaode/5.png','发短点评',
             'projects/chidianhaode/6.png','发长点评上半部分',
             'projects/chidianhaode/7.png','发长点评下半部分',
             'projects/chidianhaode/8.png','我的',
             'projects/chidianhaode/9.png','我的点评',
             'projects/chidianhaode/10.png','我的点评详情'
           ]
    },
    {
      key:'lingdu',
      name:'<span>领读</span> ios 小说阅读App',
      datas:['projects/lingdu/1.png','开机图',
             'projects/lingdu/2.png','首页',
             'projects/lingdu/3.png','原创文章',
             'projects/lingdu/4.png','写作功能',
             'projects/lingdu/5.png','我的'
           ]
    },
    {
      key:'huoxing',
      name:'<span>火星微</span> flash MMORPG 多人在线角色扮演游戏',
      datas:['projects/huoxing/1.png','我的房间',
            'projects/huoxing/2.png','我的后花园',
            'projects/huoxing/3.png','后花园冲凉',
            'projects/huoxing/4.png','后花园背包',
            'projects/huoxing/5.png','种水果树',
            'projects/huoxing/6.png','我的背包',
            'projects/huoxing/7.png','滑雪场景',
            'projects/huoxing/8.png','滑冰场景',
            'projects/huoxing/9.png','游泳场景',
            'projects/huoxing/10.png','场景编辑器',
            'projects/huoxing/11.png','物件编辑器'
           ]
    },
    {
      key:'ie8',
      name:'<span>IE8</span> 介绍IE8 新功能的塔防小游戏',
      datas:['projects/ie8/1.png','开始游戏界面',
            'projects/ie8/2.png','游戏帮助页面',
            'projects/ie8/3.png','IE宝宝道具使用',
            'projects/ie8/4.png','清除道具的使用',
            'projects/ie8/5.png','过关界面',
            'projects/ie8/6.png','第二关',
            'projects/ie8/7.png','闯关结果界面'
           ]
    },
    {
      key:'jieku',
      name:'<span>捷酷骑行服在线定制系统</span> flash 在线服装定制系统',
      datas:['projects/jieku/1.png','首页选择要定制的服装部分',
            'projects/jieku/2.png','服装自定义上色页面',
            'projects/jieku/3.png','服装自定义上色页面2',
            'projects/jieku/4.png','服装添加自定义文字效果',
            'projects/jieku/5.png','服装添加自定义文字效果2',
            'projects/jieku/6.png','服装添加自定义文字效果3',
            'projects/jieku/7.png','生成订单页面'
           ]
    },
    {
      key:'gaojiaoshe',
      name:'<span>高等教育出版社</span> 趣味语言学习系统',
      datas:['projects/gaojiaoshe/1.png','语言学习系统首页',
            'projects/gaojiaoshe/2.png','选择学习单元页',
            'projects/gaojiaoshe/3.png','选择学习课文页',
            'projects/gaojiaoshe/4.png','笔记功能文本工具的使用',
            'projects/gaojiaoshe/5.png','笔记功能放大镜功能的使用',
            'projects/gaojiaoshe/6.png','笔记功能涂鸦功能的使用',
            'projects/gaojiaoshe/7.png','笔记功能涂鸦功能的使用2'
           ]
    },
    {
      key:'xunxiangluoyang',
      name:'<span>牡丹种植</span> flash 牡丹种植学习小游戏',
      datas:['projects/xunxiangluoyang/1.png','首页',
            'projects/xunxiangluoyang/2.png','牡丹种植说明',
            'projects/xunxiangluoyang/3.png','铲子的使用',
            'projects/xunxiangluoyang/4.png','种子的介绍',
            'projects/xunxiangluoyang/5.png','种子的介绍2',
            'projects/xunxiangluoyang/6.png','种子的生长',
            'projects/xunxiangluoyang/7.png','种子浇水',
            'projects/xunxiangluoyang/8.png','所有种子的生长状况'
           ]
    },
    {
      key:'tenxun',
      name:'<span>QQ无线斗地主</span> flash 经验分享播放器',
      datas:['projects/tenxun/1.png','QQ无线斗地主经验分享播放器'
            ]
    }

  ];

  var keyData = getDataByKey(detailDatas,key);

  if(keyData == null)
  {
    return;
  }
  updateDetailView(keyData,divID)
}

function getDataByKey(datas,key){
  var itemData;
  for (var i = 0; i < datas.length; i++) {
      itemData = datas[i];
      console.log("itemData"+itemData);
      if(itemData.key == key)
      {
        return itemData;
      }
  }
  return itemData;
}


function updateDetailView(data,divID){
  var datas = data.datas;
  console.log("datas:" + datas);
  var htmlStr  =' <div class="spe-title col-md-12">';
      htmlStr +='     <h2>' + data.name + '</h2>' +
                '     <div class="title-line">' +
                '     <div class="tl-1"></div>' +
                '     <div class="tl-2"></div>' +
                '     <div class="tl-3"></div>' +
                '     <p></p>' +
                ' </div>'+
                ' <div class="rows">';
  for (var i = 0; i < datas.length; i+=2) {
    if(i%4==0){
      <!-- HOTEL GRID -->
      htmlStr +='    <div class="posts">';
    }
      htmlStr +='       <div class="col-md-6 col-sm-12 col-xs-12">' +
                '           <img src="/assets/' + datas[i] + '" alt="" />'  +
                '           <p><span class="leftImgRightDescStyle1">' + datas[i+1] + '</span></p>' +
                '       </div>';
    if(i%4==3 || i==datas.length - 2)
    {
      htmlStr +='    </div>';
    }
  }
      htmlStr +=' </div>';

  var grid = $("#"+divID);
  $("#"+divID).append(htmlStr);
}
