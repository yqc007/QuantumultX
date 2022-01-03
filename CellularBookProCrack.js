/*
 *
 *
脚本功能：有书解锁会员精读
软件版本：6.1.5
下载地址：http://t.cn/A6JZ1ZmD
脚本作者：Hausd0rff
更新时间：2021.11.21
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 有书解锁会员精读&付费精选
^https?:\/\/(sc|gongdu)\.youshu\.cc\/(m|w|mp)\/(user\/count|media\/media_info|common\/elite_page_content|(page\/v2\/10010016|item\/subpage_pack_list).+)$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/CellularBookProCrack.js

[mitm] 

hostname = *.youshu.cc
*
*
*/


var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const user = '/user/count';
const info = '/media/media_info';
const page = '/page/v2/10010016';
const pack = '/subpage_pack_list';
const play = '/elite_page_content';

if (urlq.indexOf(user) != -1) {
    objc.data["membership_info"] = {
      "title": "有书VIP",
      "membership_icon": "http://feed.youshu.cc/readwith/media/picture/5d84a710ebd04.png",
      "desc": "如果非要把这个加上一个期限，我希望是一万年！",
      "user_status": "1",
      "end_time": "32495476149",
      "scheme": "youshuapp://switchTab?name=vip&refresh=0",
      "is_vip": "1",
      "user_status_label": "会员精读每周持续更新中",
      "button_label": "续费",
      "action_name": "my_youshuvip_item"
    };
    body = JSON.stringify(objc);
}

if (urlq.indexOf(page) != -1) {
    objc.data.cards[0] = {
      "card_type" : "card_79",
      "buttons" : [
        {
          "label" : "续费",
          "action_log" : {
            "sdet" : "memberPageClick",
            "sded" : "{\"page_name\":\"memberpage\",\"res_type\":\"general\",\"res_id\":\"\",\"res_name\":\"vip_subscription_kaitong\",\"res_position\":0,\"res_action\":\"vip_renew\",\"res_policy\":\"\",\"item_type\":\"\",\"item_value\":\"\",\"relate_item_type\":\"\",\"relate_item_value\":\"\"}"
          },
          "type" : "jump",
          "params" : {
            "membership_status" : "2"
          },
          "scheme" : "youshuapp:\/\/h5?url=https%3A%2F%2Freadooapi.youshu.cc%2Fp%2Ftradepage_h5%2Fpage_goods%3Fgoods_item_id%3D1298%26utm_source%3Dapp%26utm_medium%3Dvip_subscription_kaitong%26utm_content%3D%26id%3D102000%26rand%3D9105&closeCurPage=0&hideNavgationBar=0&loginType=2"
        }
      ],
      "sub_title" : "累计节省0元",
      "@type" : "type.googleapis.com\/Ys.Pb.Card.Card79",
      "card_name" : "renew",
      "title" : "浥轻尘𝐶𝑟𝑎𝑐𝑘",
      "image" : "https:\/\/thirdqq.qlogo.cn\/g?b=oidb&k=iaODNibZcQQTN0QPGShfkKIw&s=640&version=0.5850883204455822",
      "sub_title_ext" : "2999年09月28日到期",
      "scheme" : "youshuapp:\/\/h5?url=https%3A%2F%2Freadooapi.youshu.cc%2Fp%2Ftradepage_h5%2Fpage_goods%3Fgoods_item_id%3D1298%26utm_source%3Dapp%26utm_medium%3Dvip_subscription_kaitong%26utm_content%3D%26id%3D102000%26rand%3D9105&closeCurPage=0&hideNavgationBar=1&loginType=2",
      "icon" : "new_vip_tag_icon",
      "items" : [
        {
          "image" : "https:\/\/img.youshu.cc\/readwith\/20211224\/61c52bcaa1b42.jpg",
             "scheme" : "youshuapp:\/\/h5?url=https%3A%2F%2Freadooapi.youshu.cc%2Fp%2Fpages%2FgeneralActivity%3Fcode%3D12yuehuiyuanzhutiyue%26utm_source%3Dapp%26utm_medium%3Dbanner_7821&goods_type=custom_act&goods_id=761",
           "action_log" : {
             "sdet" : "memberPageClick",
             "sded" : "{\"page_name\":\"memberpage\",\"res_type\":\"banner\",\"res_id\":\"5f30b5433cbb1\",\"res_name\":\"vip_banner_7821\",\"res_position\":0,\"res_action\":\"banner\",\"res_policy\":\"config_7821\",\"item_type\":\"custom_act\",\"item_value\":\"761\",\"relate_item_type\":\"\",\"relate_item_value\":\"\"}"
           }
         },
         {
           "image" : "http:\/\/img.youshu.cc\/readwith\/20211025\/61767edc1bf78.jpg",
           "scheme" : "youshuapp:\/\/h5?url=https%3A%2F%2Freadooapi.youshu.cc%2Fp%2Ftradepage_h5%2Fpage_goods%3Fgoods_item_id%3D1298%26utm_source%3Dapp%26utm_medium%3Dbanner_2456&goods_type=goods_center&goods_id=1298",
           "action_log" : {
             "sdet" : "memberPageClick",
             "sded" : "{\"page_name\":\"memberpage\",\"res_type\":\"banner\",\"res_id\":\"5f30b5433cbb1\",\"res_name\":\"vip_banner_2456\",\"res_position\":1,\"res_action\":\"banner\",\"res_policy\":\"config_2456\",\"item_type\":\"goods_center\",\"item_value\":\"1298\",\"relate_item_type\":\"\",\"relate_item_value\":\"\"}"
           }
         }
       ]
     };
     body = JSON.stringify(objc);
}

if (urlq.indexOf(info) != -1) {
    objc.data["is_buy"] = "1";
    body = JSON.stringify(objc);
}

if (urlq.indexOf(play) != -1) {
    if (objc.data.list.length > 0) {
        var len = objc.data.list.length;
        for (var i = 0; i < len; i++) {
             objc.data.list[i].status = "1"; 
             objc.data.list[i].is_bought = "1"; 
             objc.data.list[i].read_status = "1"; 
        }
        body = JSON.stringify(objc);
    }      

}

if (urlq.indexOf(pack) != -1) {
    if (objc.data.pack_list.length > 0) {
        var yqc = objc.data;
        var len = yqc.pack_list.length;
        for (var i = 0; i < len; i++) {
             yqc.pack_list[i].is_shidu = "1";  
        }
        body = JSON.stringify(objc);
    }      

}

$done({ body });
