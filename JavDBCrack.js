/*
 *
 *
脚本功能：JavDB解锁会员
软件版本：1.9.9
官网地址：https://javdb.com/
下载地址：https://shrtm.nu/0USn
脚本作者：Hausd0rff
更新时间：2022-02-26
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：rckasw
        可无限延长脚本的使用期限
*******************************

[rewrite_local]

# > JavDB解锁会员
^https?:\/\/shukego\.com\/api\/v1\/movies\/.*\/play url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/JavDBCrack.js

[mitm] 

hostname = shukego.com
*
*
*/


var hausd0rff = $request.headers;
hausd0rff['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ0MjQ4MywidXNlcm5hbWUiOiJ5cWMwMDcifQ.EOCu_lF9TFxeZQ_2SfcwdyiU7cyBESkXiHfWBiP3k9M';
hausd0rff['signature'] = '45aebf2239f533611b172a8ecff036a3';
$done({
    headers : hausd0rff
});
