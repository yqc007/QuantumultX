/******************************

脚本功能：69传媒解锁会员
软件版本：1.8.4
下载地址：https://69re.co
脚本作者：Hausd0rff
更新时间：2022-10-09
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 69传媒解锁会员
^https?:\/\/tu5\.twittme\.net\/cms\/api\/app\/article\/play url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/69MediaCrack.js

[mitm] 
hostname = tu5.twittme.net

*******************************/

$done({
    body: JSON.stringify({
        "code": 0,
        "message": "ok",
        "content": {
            "data": 0
        }
    })
});
