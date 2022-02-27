/*
 *
 *
脚本功能：傲软抠图解锁会员
软件版本：1.5.1
下载地址：http://t.cn/A6xBOE5d
脚本作者：Hausd0rff
更新时间：2021-11-20
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 傲软抠图解锁会员
^https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/BackgroundEraserProCrack.js

[mitm] 

hostname = gw.aoscdn.com
*
*
*/


var body = $response.body
    .replace(/\"is_activated\":\d/g, "\"is_activated\":1")
    .replace(/\"remain_days\":\d+/g, "\"remain_days\":666666")
    .replace(/\"will_expire\":\d/g, "\"will_expire\":0")
    .replace(/\"vip_special\":\d/g, "\"vip_special\":1")
    .replace(/\"is_lifetime\":\d/g, "\"is_lifetime\":1")
    .replace(/\"expired_at\":\d+/g, "\"expired_at\":32495475600")
    .replace(/\"expire_time\":\".*?\"/g, "\"expire_time\":\"2999-09-28\"");
$done({
    body
});
