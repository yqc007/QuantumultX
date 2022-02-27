/*
 *
 *
脚本功能：91搞网站破解收费
网站地址：https://shrtm.nu/91gv
脚本作者：Hausd0rff
更新时间：2021-11-15
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 91搞网站破解收费
^https?:\/\/www\.91gao1\.com\/api\/v1\/article url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/91GVCrack.js
^https?:\/\/www\.91gao1\.com\/api\/v1\/article url response-body is_buy":\w+ response-body is_buy":true

[mitm] 

hostname = www.91gao1.com
*
*
*/


var body = $response.body;
var hack = /"is_buy":\w+/g;
body = body.replace(hack,'"is_buy":true');
$done({
    body
});
