/*
 *
 *
脚本功能：蜜桃视频解锁无限次数
软件版本：1.0.1
下载地址：https://shrtm.nu/mt96
脚本作者：Hausd0rff
更新时间：2022-02-07
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 蜜桃视频解锁无限次数
\/t\w{4}\/\d\/t\/ url 307 /token/5d10208372cbd649de04b9731c1b55db/t/
^https?:\/\/.*mt.*\.com\/api\/Video\/m3u8\/id.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/MTSPCrack.js

[mitm] 

hostname = *mt*.com
*
*
*/


var hausd0rff = $request.headers;
hausd0rff['X-Playback-Session-Id'] = 'E15F154E-607C-4D37-YQC6-665A098CB666';
hausd0rff['User-Agent'] = 'Flow/1.0 NetType/4g Companyid/4000';
$done({
    headers : hausd0rff
});
