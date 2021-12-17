/*
 *
 *
脚本功能：Polaris Office解锁订阅
软件版本：9.6.1
下载地址：http://t.cn/A67a1dbB
脚本作者：Hausd0rff
更新时间：2021.11.12
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# Polaris Office解锁订阅
^https?:\/\/api\.polarisoffice\.com\/api\/1\/account\/userinfo$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PolarisOfficeProCrack.js

[mitm] 

hostname = api.polarisoffice.com
*
*
*/


var body = $response.body;
var objc = JSON.parse(body);
objc.level = 2;
body = JSON.stringify(objc);
$done(body);
