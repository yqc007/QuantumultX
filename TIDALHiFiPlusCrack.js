/******************************

脚本功能：TIDAL解锁HiFi Plus
软件版本：2.48.0【美区下载】
下载地址：http://t.cn/A662gqIO
脚本作者：Hausd0rff
更新时间：2022-08-05
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > TIDAL解锁HiFi Plus
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js

[mitm] 
hostname = api.tidal.com

*******************************/

$done({
    body: JSON.stringify({
        "status": "ACTIVE",
        "canGetTrial": false,
        "startDate": "2019-09-28T09:09:09.000+0000",
        "subscription": {
            "type": "PREMIUM_PLUS",
            "offlineGracePeriod": 999999
        },
        "premiumAccess": true,
        "paymentType": "ADYEN_CREDIT_CARD",
        "paymentOverdue": false,
        "highestSoundQuality": "HI_RES",
        "validUntil": "2999-09-28T09:09:09.000+0000"
    })
});
