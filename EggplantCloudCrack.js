/******************************

脚本功能：茄子云盘解锁会员
软件版本：1.3.1
下载地址：http://t.cn/A66Yn2I8
脚本作者：Hausd0rff
更新时间：2022-04-02
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 茄子云盘解锁会员
^https?:\/\/121\.199\.197\.35:9293\/api\/ios\/getAdClick$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/EggplantCloudCrack.js

[mitm] 
hostname = 121.199.197.35:9293

*******************************/

var objc = JSON.parse($response.body);
objc.data = "48FC8FA298BF19484C11BA06445E76FB64F1A156E54E2F9B127CA4AF878ADD8C249CA31C34880FF42914AAD0B94CDFAF272B547E01BADCCDC080B7420C9DAAD0AB0E66887EFFF75E7DCE5BB5575F8CE32B94513345D23E166619BAE6F56A4DCB2570F25E018FFEE120FD809727F9123E187609FE63B75FAE8C686F3D1A64E5B0D4484353A673573E615841A1B9C7BA157EE2D24FEF78AB73DA57D9A70966DC27D6AD61567EF8ACCEFD9286E4E5478A36";
$done({
    body : JSON.stringify(objc)
});
