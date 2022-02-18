/*
 *
 *
脚本功能：WallCraft解锁专业版
软件版本：2.8.3
下载地址：http://t.cn/A6iO7Eht
脚本作者：Hausd0rff
更新时间：2022-02-06
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > WallCraft解锁永久专业版
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WallCraftFProCrack.js

[mitm] 

hostname = *.wallpaperscraft.com
*
*
*/


var body = $response.body;
var objc = JSON.parse(body);

objc.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

body = JSON.stringify(objc);
$done({ body });
