function initDemoData(){

  var iosDatas = [
    {
      img:'haitang/1.jpg',
      title:'《嗨糖》',
      projectname:'haitang',
      description:'提供海量优质数字图书、精品图文;<br/>全新的阅读新体验，界面清新、操作便捷，是时下热门小说的追书神器！',
      link:'/page/projectDetail.html?projectname=haitang'
    },
    {
      img:'chidianhaode/1.png',
      title:'《吃点好的》',
      projectname:'chidianhaode',
      description:'吃点好的，就很幸福 <br/> 1）优选餐厅  2）食神推荐   3）结交达人 <br/> 4）发现美食   5）发布美食',
      link:'/page/projectDetail.html?projectname=chidianhaode'
    },
    {
      img:'lingdu/1.png',
      title:'《领读》',
      projectname:'lingdu',
      description:'1、原创作者扶持、自媒体作者聚集地;<br/>2、原创优质作品展示，你的才华分分钟变现;<br/>3、竞猜大奖抱回家，每周惊喜不间断',
      link:'/page/projectDetail.html?projectname=lingdu'
    }
  ];

  var flashDatas = [
    {
      img:'huoxing/2.png',
      title:'火星微',
      projectname:'huoxing',
      description:'MMORGP 社区养成类游戏。能够换装、装修房子、后花园种植物、去各种功能场景体验场景的功能和欣赏景色。',
      link:'/page/projectDetail.html?projectname=huoxing'
    },

    {
      img:'jieku/1.png',
      title:'捷酷骑行服在线定制系统',
      projectname:'jieku',
      description:'在线定制服装，选择版型、颜色、添加图案，提交订单商家生产完成定制流程。',
      link:'/page/projectDetail.html?projectname=jieku'
    },
    {
      img:'gaojiaoshe/3.png',
      title:'高教社学习系统',
      projectname:'gaojiaoshe',
      description:'趣味的语言学习、寓教于乐,兼顾画图和笔记功能。',
      link:'/page/projectDetail.html?projectname=gaojiaoshe'
    },
    {
      img:'ie8/1.png',
      title:'IE8小游戏',
      projectname:'ie8',
      description:'IE8 功能介绍塔防小游戏，将IE的功能模拟为各种防守功能，防御肉鸡和病毒的进攻。',
      link:'/page/projectDetail.html?projectname=ie8'
    },
    {
      img:'xunxiangluoyang/1.png',
      title:'平谷16景的小游戏',
      projectname:'xunxiangluoyang',
      description:'介绍牡丹的种植技巧，种子、光照、水分等。',
      link:'/page/projectDetail.html?projectname=xunxiangluoyang'
    },
    {
      img:'tenxun/1.png',
      title:'QQ无线斗地主经验分享播放器',
      projectname:'tenxun',
      description:'分享QQ无线斗地主的经验的播放器，可快速定位到目录时间点。',
      link:'/page/projectDetail.html?projectname=tenxun'
    }
  ];

  var openDatas = [
    {
      img:'github/GithubLogo.png',
      title:'《PLReader》',
      projectname:'PLReader',
      description:'Swift 高性能文本分页 和 翻页阅读项目，根据翻页实时触发请求下一页或者上一页的内容，避免流量浪费。' ,
      link:'https://github.com/PlayLive/PLReader'
    },

    {
      img:'github/GithubLogo.png',
      title:'《Unity3dUGUIScale9Grid》',
      projectname:'Unity3dUGUIScale9Grid',
      description:'实现3d空间的 UI的 九宫缩放功能',
      link:'https://github.com/PlayLive/Unity3dUGUIScale9Grid'
    },
    {
      img:'github/GithubLogo.png',
      title:'《UnityEventManager》',
      projectname:'UnityEventManager',
      description:'Unity3d C# 事件管理器，能够像ActionScript那样添加和删除监听事件，简介、方便、易用。',
      link:'https://github.com/PlayLive/UnityEventManager'
    },
    {
      img:'github/GithubLogo.png',
      title:'《Practice》',
      projectname:'Practice',
      description:'框架的使用练习和其他的功能尝试的练习',
      link:'https://github.com/PlayLive/Practice'
    }
  ];

  updateView(iosDatas, 'ios');
  updateLeftImgRightDescView(flashDatas, 'flash',1)

  updateLeftImgRightDescView(openDatas, 'open',2)

}

function updateView(datas, divID) {
  var htmlStr = '';
  var itemData;
  for (var i = 0; i < datas.length; i++) {
    if(i%3==0){
      htmlStr += '<div class="to-ho-hotel">';
    }
    itemData = datas[i];
    htmlStr +=
    '<div class="col-md-4">' +
    '    <div class="to-ho-hotel-con">' +
    '        <div class="to-ho-hotel-con-1">' +
    '            <img src="/assets/projects/' + itemData.img +'" alt="">' +
    '        </div>' +
    '        <div class="to-ho-hotel-con-23">' +
    '            <div class="to-ho-hotel-con-2">' +
    '                <h4>' + itemData.title + '</h4>' +
    '            </div>' +
    '            <div class="to-ho-hotel-con-3">' +
    '                <ul>' +
    '                    <li>' + itemData.description + '</li>' +
    '                </ul>' +
    '            </div>' +
    '            <div class="to-ho-hotel-con-4">' +
    '                <a href="' + itemData.link + '" class="link-btn hom-hot-view-btn">详情</a>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';
    if(i%3==2 || i==datas.length - 1)
    {
      htmlStr +='</div>';
    }
  }

  var grid = $("#"+divID);
  $("#"+divID).append(htmlStr);

}

function updateLeftImgRightDescView(datas,divID,descStyleIndex){
  var htmlStr = '';
  var itemData;
  for (var i = 0; i < datas.length; i++) {
    if(i%2==0){
      <!-- HOTEL GRID -->
      htmlStr += '<div class="popu-places-home">';
    }
    itemData = datas[i];
    htmlStr +=
    '<div class="col-md-6 col-sm-6 col-xs-12 place">' +
    '    <div class="col-md-6 col-sm-12 col-xs-12">'  +
    '        <img src="/assets/projects/' + itemData.img + '" alt="" />'  +
    '    </div>' +
    '    <div class="col-md-6 col-sm-12 col-xs-12">'  +
    '        <h3><span>' + itemData.title + '</span> </h3>' +
    '        <p><span class="leftImgRightDescStyle' + descStyleIndex + '">' + itemData.description + '</span></p>' +
    '        <a href="' + itemData.link + '" class="link-btn">详情</a>' +
    '    </div>' +
    '</div>';
    if(i%2==1 || i==datas.length - 1)
    {
      htmlStr +='</div>';
    }
  }

  var grid = $("#"+divID);
  $("#"+divID).append(htmlStr);
}
