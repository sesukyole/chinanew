{
//"spider":"./新视觉.jar",
//"spider": "https://fm.t4tv.hz.cz/jar/custom_spider.jar;md5;9060b67dfec8782aca6e79ba17c0979b",
"spider":"./custom_spider.jar",

"lives":[{
"name":"自選",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/live2.txt",
"ua": "okhttp/3.15",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"

"rules": [
{"name": "proxy","hosts": [  "raw.githubusercontent.com",  "googlevideo.com",  "googleapis.com",  "cdn.v82u1l.com",  "cdn.iz8qkg.com",  "cdn.kin6c1.com",  "c.biggggg.com",  "c.olddddd.com",  "haiwaikan.com",  "www.histar.tv",  "youtube.com",  "uhibo.com",  ".*boku.*",  ".*nivod.*",  ".*ulivetv.*"]},
{"name": "火山嗅探","hosts": [  "huoshan.com"],"regex": [  "item_id="]},
{"name": "抖音嗅探","hosts": [  "douyin.com"],"regex": [  "is_play_url="]},
{"name": "農民嗅探","hosts": [  "toutiaovod.com"],"regex": [  "video/tos/cn"]},
{"name": "七新嗅探","hosts": [  "api.52wyb.com"],"regex": [  "m3u8?pt=m3u8"]},
{"name": "毛驢點擊","hosts": [  "www.maolvys.com"],"script": [  "document.getElementsByClassName('swal-button swal-button--confirm')[0].click()"]}
],
"ads": ["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]
}
],
"sites":[
{"key":"MissAV","name":"🔥MissAV1無碼ijk","type":3,"api":"csp_Miss","searchable":1,"filterable":1},
{"key":"9206_滴滴资源","name":"🌟滴滴资源","type":1,"api":"https://api.ddapi.cc/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_黄AV资源站","name":"🌅黄AV资源站","type":0,"api":"https://www.pgxdy.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"免費AV線上看","name":" 🔥免費AV線上看","type":1,"api":"https://c.mdvod.cc/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":0},//https://seajav.gitbook.io/untitled/
{"key": "drpy_xvideos","name": "xvideos","type": 3,"api": "./lib/drpy2.min.js","ext": "./js/XVIDEOS.js","playerType": "1","searchable": 1,"quickSearch": 1,"changeable": 1,"style": {"type": "rect","ratio": 1.485}},
{"key":"色情采集之王","name":"色情采集之王[合]","type":3,"api":"https://down.nigx.cn/qu.ax/nmAN.js","searchable":1,"quickSearch":1,"filterable":1,"order_num":1,"ext":"http://liulili.1919810.com/DZ/drpy_js/采集之王[合].js?type=url&params=http://liulili.1919810.com/DZ/json/采集[密]静态.json"},
{"key":"色情采集之王備份","name":"色情采集之王[合]備份","type":3,"api":"./js/nmAN.js","searchable":0,"quickSearch":0,"filterable":0,"order_num":1,"ext":"./js/采集之王[合].js?type=url&params=./js/采集[密]静态.json"},
{"key":"pronlulu","name":"🔞pronlulu(T)","type":3,"api":"csp_XBPQ","jar":"./lib/XBPQ.jar","ext":{"直接播放":"1","嗅探词":".m3u8#.mp4","分类url":"https://www.pornlulu.com/cat/{cateId}?page={catePg}","分类":"國產自拍$263#中文字幕$48#日本有碼$269國產情色460#日本無碼$270#國產精品$249強姦亂倫$13#歐美精品$260#制服誘惑$92#蘿莉少女$103#成人動漫$274#美女主播$264#亞洲有碼$105#國產主播$268#國產視頻$304#巨乳美乳$93#歐美極品$266#自拍偷拍$28#騎兵有碼$261#無碼專區$254#抖陰視頻$25"}},
{"key":"AVTOP10","name":"AVTOP10","type":3,"api":"csp_XBPQ","jar":"./XBPQ.jar","ext":{"作者":"","站名":"AVTop10","头部集合":"User-Agent$Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/118.0.0.0Safari/537.36#authority$avtop10.com#referer$https://avtop10.com/","分类":"最新影片&热门影片&高清影片&日本AV&欧美AV&动漫AV&中文字幕AV&无码AV&偷拍自拍&制服诱惑&人妻熟女&巨乳美乳&制服诱惑&学生校园&SM调教&网络红人&3P群交&乱伦家庭&强奸迷奸&性爱技巧&自慰诱惑","分类值":"1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16&17&18&19&20&21","分类url":"https://avtop10.com/api.php/provide/vod/?ac=list&ac=detail&t={cateId}&pg={catePg}","数组二次截取":"list\":[&&]","数组":"{&&}","图片":"vod_pic\"*\"&&\"","标题":"vod_name\"*\"&&\"","副标题":"vod_remarks\"*\"&&\"","链接":"https://avtop10.com/api.php/provide/vod/?ac=list&ac=detail&ids=+vod_id\":&&,","搜索url":"https://avtop10.com/api.php/provide/vod/?ac=detail&wd={wd}","搜索模式":"1","搜索二次截取":"list\":[&&]","搜索数组":"{&&}","搜索图片":"vod_pic\"*\"&&\"","搜索标题":"vod_name\"*\"&&\"","搜索副标题":"vod_remarks\"*\"&&\"","搜索链接":"https://avtop10.com/api.php/provide/vod/?ac=list&ac=detail&ids=+vod_id\":&&,","影片类型":"vod_class\"*\"&&\"","导演":"vod_director\"*\"&&\"","主演":"vod_actor\"*\"&&\"","简介":"vod_content\"*\"&&\"","线路二次截取":"\"list\":[&&]","线路数组":"\"vod_play_from\":&&,","线路标题":"\"&&\"","播放数组":"vod_play_url\":&&,[替换:\">>链表题#$>>题链#\\#>>链表表题]","播放二次截取":"","播放列表":"表&&表","播放标题":"题&&题","播放链接":"链&&链+?sku=OWY3ZDA4ZjVjYzY3YmRhYjM5NTUwYzEyZWRjNjUyZWM1NjQ2ZGRjYTVhMGVkM2Nh&p=1&sign=9a69d1563936ead3677623722660c4d9","播放请求头":"User-Agent$Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/118.0.0.0Safari/537.36#Referer$https://avtop10.com/#Cookie$PHPSESSID=t9a0fl2ngh4t175j3995v2669d","嗅探词":".m3u8#.mp4#video_mp4#feiyunNB.mp4#.mp4#cdn.123pan.cn#huoshanvod.com"}},
{"key":"麻豆","name":"麻豆","type":1,"api":"https://www.md91.cc/api.php/provide/vod/"},
{"key":"key_modu111","name":"采集|麻豆","type":1,"api":"http://127.0.0.1:10079/p/0/127.0.0.1:10072/https://www.md91.cc/api.php/provide/vod/","playUrl": "json:http://127.0.0.1:10079/parse/?thread=0&proxy=127.0.0.1:10072&url=","searchable":1,"changeable":1},
{"key":"奥斯卡资源","name":"🔥奥斯卡资源🐷解說","type":1,"api":"https://aosikazy.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"色色虎資源","name":"🔥色色虎資源","type":1,"api":"https://apisesehuzy.com/api.php/providedao/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"好色資源","name":"🔥好色資源","type":1,"api":"https://haosezyw.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"越南資源","name":"🔥越南資源","type":1,"api":"https://vnzyz.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"csp_xBPQ_聚优AV解说","name":"🔞聚优AV解说","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":1,"jar":"./Yoursmile2.jar","ext":"./js/cj_新香蕉AV解说.json"},
{"key":"泥巴18","name":"🔥泥巴","type":3,"api":"csp_NiNi","searchable":1,"filterable":1,"ext":"1"},
{"key":"9206_csp_JavDb","name":"🔥JavDbcarib","type":3,"api":"csp_JavDb","searchable":1,"quickSearch":1,"filterable":1,"changeable":0,"timeout":1801,"ext":"http://javdb523.com"},
{"key": "dr_Missav","name": "Missav(道长)","type": 3,"api": "drpy2.min.js","searchable": 2,"quickSearch": 0,"filterable": 0,"ext": "./js/Missav.js"},
{"key":"csp_XBPQ_Miss AV","name":"Miss AV[翻墙]","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":1,"jar":"./zy.jar","ext":"./js/Miss AV.json"},
{"key": "csp_xBPQ_香蕉直播","name": "香蕉┃直播","type": 3,"api": "csp_xBPQ","searchable": 1,"quickSearch": 1,"filterable": 0,"jar": "./lib/Yoursmile2.jar","ext": "./js/新香蕉实时直播.json"},
{"key":"9206_博天堂","name":"🔥博天堂歐美倫理","type":0,"api":"http://bttcj.com/inc/sapi.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"环亚资源站","name":"🔥环亚全無碼","type":0,"api":"http://wmcj8.com/inc/sapi.php?ac=videolist","playUrl":"","categories":[],"quickSearch":0},
{"key":"dr_朱古力","name":"🔥朱古力(道长)","type":3,"api":"./lib/drpy2.min.js","searchable":2,"quickSearch":0,"filterable":0,"ext":"./js/朱古力.js"},
{"key":"直播转点播s","name":"❤💻电视直播♒","type":3,"style":{ "type":"oval" },"api":"./lib/live2cms.js","ext":"./live2tv_sq_s.txt"},
{"key": "Youtube","name": "❤📺YouTube新聞直播","type": 3,"style":{ "type":"oval" },"api": "./Mud.js","ext": "./YouTube.txt"},
{"key":"T4-安博","name":"🏆安博(T4)","type":4,"api":"https://tang.serv00.net/power/ub1818","searchable":1,"quickSearch":1,"filterable":1,"changeable":0,"ext":true},
{"key":"9206_老色逼资源站","name":"🌅🤩色逼资源站","type":1,"api":"https://apilsbzy1.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"av麻豆網","name":"💖麻豆網","type":1,"api":"http://madouse.la/api.php/provide/vod/"},
{"key":"av91麻豆","name":"💖91麻豆","type":1,"api":"https://91md.me/api.php/provide/vod/"},
{"key":"av森林資源","name":"💖森林資源","type":0,"api":"https://beiyong.slapibf.com/api.php/provide/vod/at/xml"},
{"key":"av奧斯卡資源","name":"💖奧斯卡資源","type":0,"api":"https://aosikazy.com/api.php/provide/vod/at/xml"},
{"key":"avCK資源","name":"💖CK資源","type":1,"api":"http://www.feifei67.com/api.php/provide/vod/"},
{"key":"av鯊魚資源","name":"💖鯊魚資源","type":1,"api":"https://shayuapi.com/api.php/provide/vod/"},
{"key":"av狼少年資源","name":"💖狼少年資源","type":0,"api":"http://cjmygzy.com/inc/sapi.php?ac=videolist"},
{"key":"av環亞資源","name":"💖環亞資源","type":0,"api":"http://wmcj8.com/inc/sapi.php"},
{"key":"av久久資源","name":"💖久久資源","type":0,"api":"http://99zywcj.com/inc/sapi.php?ac=videolist"},
{"key":"av雪豹資源","name":"💖雪豹資源","type":1,"api":"https://api.xbapi.cc/api.php/provide/vod/","searchable":"1","quickSearch":"1","filterable":"0"},
{"key":"av博民資源","name":"💖博民資源","type":1,"api":"https://www.bominzy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":0},
{"key":"av皇冠資源1","name":"💖皇冠資源1","type":1,"api":"https://hghhh.com/api.php/provide/vod/","searchable":"1","quickSearch":"1","filterable":"0"},
{"key":"av伊人資源","name":"💖伊人資源","type":1,"api":"https://api.yirenziyuan.com/api.php/provide/vod/","searchable":"1","quickSearch":"1","filterable":"0"},
{"key":"av好片資源","name":"💖好片資源","type":1,"api":"https://haopianapi.com/api.php/provide/vod/","searchable":"1","quickSearch":"1","filterable":"0"},
{"key":"av雞坤資源","name":"💖雞坤資源","type":1,"api":"https://jkunzyapi.com/api.php/provide/vod/","searchable":"1","quickSearch":"1","filterable":"0"},
{"key":"av芒果18+","name":"💖芒果18+","type":0,"api":"https://www.mgav1.cc/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":0},
{"key":"av皇冠資源","name":"💖皇冠資源","type":1,"api":"https://www.partnersky-horoskop.com/api.php/provide/vod","searchable":1,"quickSearch":1,"filterable":1},
{"key":"av色貓","name":"💖色貓","type":0,"api":"https://api.maozyapi.com/inc/api.php"},
{"key":"av蛋蛋視頻","name":"💖蛋蛋視頻","type":1,"api":"https://156.249.29.8/inc/apijson_vod.php","searchable":1,"quickSearch":0},
{"key":"av番號資源","name":"💖番號資源","type":1,"api":"http://fhapi9.com/api.php/provide/vod/at/json","searchable":1,"quickSearch":1},
{"key":"av易看資源-倫理","name":"💖易看資源-倫理","type":1,"api":"https://api.yikanapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1},
{"key":"av色南國資源","name":"💖色南國資源","type":1,"api":"https://api.sexnguon.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"av色窩資源","name":"💖色窩資源","type":1,"api":"https://sewozyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":0},
{"key":"*S猫资源","name":"🌅S猫時間表","type":0,"api":"https://api.maozyapi.com/inc/api.php"},
{"key":"9206_91md.me","name":"🌅成人03","type":1,"api":"http://91md.me/api.php/provide/vod/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_api.maozyapi.com","name":"🌅成人15","type":1,"api":"https://api.maozyapi.com/inc/apijson_vod.php","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_apittzy.com","name":"🌅成人25","type":1,"api":"https://apittzy.com/api.php/provide/vod/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_富二代资源","name":"🌅富二代资源","type":0,"api":"http://f2dcj6.com/sapi?ac=list","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_美少女资源站","name":"🌅美少女资源站","type":0,"api":"https://www.msnii.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_香奶儿资源站","name":"🌅香奶儿资源站","type":0,"api":"https://www.gdlsp.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_白嫖资源站","name":"🏆🤩白嫖资源站","type":0,"api":"https://www.kxgav.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"Jable","name":"🏆Jable角色劇情","type":3,"api":"csp_Jable","searchable":1,"filterable":1,"style":{"type":"rect","ratio":1.77}},
{"key":"9206_csp_xBPQ_香蕉资源","name":" 🏆香蕉资源","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/香蕉资源.json"},
{"key":"9206_csp_xBPQ_香蕉超清","name":" 🏆香蕉超清","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉超清资源.json"},
{"key":"9206_csp_xBPQ_香蕉国产","name":" 🏆香蕉国产","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉国产传媒.json"},
{"key":"9206_csp_xBPQ_香蕉久久热","name":" 🏆香蕉久久热","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉久久热.json"},
{"key":"9206_csp_xBPQ_香蕉废柴","name":" 🏆香蕉废柴","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉废柴网.json"},
{"key":"9206_csp_xBPQ_香蕉AV解说","name":" 🌟香蕉解说","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉AV解说.json"},
{"key":"9206_csp_xBPQ_香蕉直播","name":" 🌟香蕉直播IJK","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"jar":"./Yoursmile2.jar","ext":"./js/新香蕉实时直播.json"},
{"key":"9206_kkzy.me","name":"🏆成人23","type":1,"api":"https://kkzy.me/api.php/provide/vod/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_橘猫资源","name":"🏆橘猫资源","type":1,"api":"https://to.to-long.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"9206_森林资源","name":"🏆森林资源","type":1,"api":"https://senlinzy2.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":0},
{"key":"玩偶","name":"🏆玩偶","type":3,"api":"csp_Doll","searchable":1,"filterable":1},
{"key":"dr_玩偶姐姐","name":"🏆玩偶姐姐(道长)","type":3,"api":"./lib/drpy2.min.js","searchable":2,"quickSearch":0,"filterable":0,"ext":"./js/玩偶姐姐.js"},
{"key":"9206_玉兔资源","name":"🏆玉兔资源","type":1,"api":"https://yutuzy3.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_老鸭资源","name":"🌟🤩老鸭無碼動漫海外","type":1,"api":"https://api.apilyzy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_155资源","name":"🌟155资源","type":1,"api":"https://155api.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_apilj.com","name":"🌟成人01","type":1,"api":"http://apilj.com/api.php/provide/vod/at/json/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_dadiapi.com","name":"🌟成人02","type":0,"api":"http://dadiapi.com/api.php","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_lbapiby.com","name":"🌟成人14","type":0,"api":"http://lbapiby.com/api.php/provide/vod/at/xml","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"9206_lbapi9.com","name":"🌟成人26","type":1,"api":"https://lbapi9.com/api.php/provide/vod/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"*大地资源","name":"🌟大地女星中文動漫","type":0,"api":"https://dadiapi.com/api.php/"},
{"key":"9206_fhapi9.com","name":"🌟番号资源","type":1,"api":"http://fhapi9.com/api.php/provide/vod/","searchable":1,"recordable":0,"style":{"type":"rect","ratio":1.33}},
{"key":"*辣椒资源","name":"🌟辣椒潮吹","type":0,"api":"http://api.11bat.com/api.php/provide/vod/at/xml"},
{"key":"*鲨鱼资源","name":"🌟鲨鱼中長片","type":0,"api":"https://shayuapi.com/api.php/provide/vod/at/xml"},
{"key":"9206_小湿妹资源站","name":"🌟小湿妹资源站","type":0,"api":"https://www.afasu.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"9206_蛋蛋视频","name":"🌟蛋蛋视频","type":1,"api":"http://156.249.29.8/inc/apijson_vod.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"9206_淫水机资源站","name":"😰淫水机资源站","type":0,"api":"https://www.xrbsp.com/api/xml.php","searchable":1,"quickSearch":1,"filterable":0},
{"key":"ikanbot3","name":"爱看机器人3","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbot3.js"}
],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",

"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"360資源資源","type":0,"url":"https://www.360jiexi.com/player/?url="},
{"name":"暴風資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"非凡資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"豪華資源","type":0,"url":"https://hhjiexi.com/play/?url="},
{"name":"量子資源","type":0,"url":"https://lziplayer.com/?url="},
{"name":"櫻花資源","type":0,"url":"https://jx.yhzybf.com/player/jx.php?url="},
{"name":"ikun資源","type":0,"url":"https://www.ikdmjx.com/?url="},
{"name":"tv資源","type":0,"url":"https://jx.m3u8.tv/jiexi/?url="},
{"name":"博民資源","type":0,"url":"https://www.bmm3u8.com/?url="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"超嗅探","type":3,"url":"Web"},
{"name":"西瓜嗅探1","type":0,"url":"https://t1.qlplayer.cyou/player/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"西瓜嗅探2","type":0,"url":"https://t1.qlplayer.cyou/player/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},{"name":"高清嗅探","type":0,"url":"https://jx.xmflv.com?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"夜幕嗅探","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"爱心笔记本","type":4,"url":"http://119.91.123.253:2345/Api/yun.php?url="},
{"name":"魏晓芳","type":1,"url":"https://svip.renrenmi.cc:2222/api/?key=ogGC18CjsACNo60r3E&url="},
{"name":"奧斯卡資源","type":0,"url":"https://aosikazyplayurl.com/?url="},
{"name":"色色虎資源","type":0,"url":"https://jx.jxsesehuzy.com/?url="},
{"name":"好色資源","type":0,"url":"https://haosezyplayurl.com/?url="},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"盘古","type":0,"url":"https://www.m3u8.tv.cdn.8old.cn/jx.php?url="},
{"name":"左岸","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","优播线路","腾播线路"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"太空","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua"]}},
{"name":"未知","type":1,"url":"http://106.52.218.221:88/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"随便1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"随便2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"LTRX","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["rx"]}},
{"name":"OJBK","type":0,"url":"https://jmwl.qd234.cn/v/?v=","ext":{"flag":["ltnb","renrenmi","rx","xfyun","muxm3u8","xigua","xueren","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","pptv","PPTV","sohu","letv"]}},
{"name":"parwix1","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"线路m9","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1931000&key=gktuvyzABEORSYZ135&url="},
{"name":"线路NX","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"①秒播","type":1,"url":"https://jx.hfyrw.com/mao.go?url="},
{"name":"②秒播","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"③秒播","url":"http://81.71.48.249:4456/jsonc/293shipin.php?url=","type":1,"i":"77","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"]}},
{"name":"④秒播","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"⑤秒播","type":1,"url":"http://81.71.48.249:4456/jsonc/longxia.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"⑦秒播","type":1,"url":"https://app.okmedcos.com/4k/?url="},
{"name":"⑧秒播","type":1,"url":"https://jie.1z1.cc/api/?key=HdMmTMfyf1uTOQUL0b&url="},
{"name":"Pro","type":1,"url":"http://api.vip123kan.vip/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"2","type":1,"url":"https://jx.mczdyw.com/xg.php?url=","ext":{"flag":["mgtv","芒果"]}},
{"name":"3","type":1,"url":"https://www.aiaine.com/api/?key=kVqmG5dAQ5dZTcECw8&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"4","type":1,"url":"https://svip.rongxingvr.top/api/?key=niBgMGXVdCQhsmeEBK&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"8","type":1,"url":"https://app.iminna.com/jx/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"飓风影院2","type":1,"url":"https://vvip.funsline.cn/api/?key=3xWfEoDf4V9p9Y20CR&url=","ext":{"flag":["ziqie","youku","优酷","qiyi","爱奇艺","奇艺","mgtv","芒果","qq","腾讯"]}},
{"name":"我爱电影网","type":1,"url":"https://jhpc.manduhu.com/j1217.php?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","mgtv","芒果","youku","优酷","pptv","PPTV"]}},
{"name":"王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"盘古解析","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"👉嗅探👈就是破解中，請等候一會👈","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}
],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
"rules": [
{"name": "proxy","hosts": [  "raw.githubusercontent.com",  "googlevideo.com",  "googleapis.com",  "cdn.v82u1l.com",  "cdn.iz8qkg.com",  "cdn.kin6c1.com",  "c.biggggg.com",  "c.olddddd.com",  "haiwaikan.com",  "www.histar.tv",  "youtube.com",  "uhibo.com",  ".*boku.*",  ".*nivod.*",  ".*ulivetv.*"]},
{"name": "火山嗅探","hosts": [  "huoshan.com"],"regex": [  "item_id="]},
{"name": "抖音嗅探","hosts": [  "douyin.com"],"regex": [  "is_play_url="]},
{"name": "農民嗅探","hosts": [  "toutiaovod.com"],"regex": [  "video/tos/cn"]},
{"name": "七新嗅探","hosts": [  "api.52wyb.com"],"regex": [  "m3u8?pt=m3u8"]},
{"name": "毛驢點擊","hosts": [  "www.maolvys.com"],"script": [  "document.getElementsByClassName('swal-button swal-button--confirm')[0].click()"]}
],
"ads": ["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]

}