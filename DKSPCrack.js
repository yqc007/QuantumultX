/******************************

脚本功能：抖窥短视频解锁永久会员
软件版本：1.0.4
下载地址：https://shrtm.nu/dkav
脚本作者：Hausd0rff
更新时间：2022-03-26
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 抖窥短视频解锁永久会员
^https?:\/\/ts1i\.dk\.y8848\.xyz\/app\/api\/user\/info$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/DKSPCrack.js
^https?:\/\/ts1i\.dk\.y8848\.xyz\/app\/api\/(sms\/send|user\/bindphone) url reject-200

[mitm] 
hostname = ts1i.dk.y8848.xyz

*******************************/

var objc = JSON.parse($response.body);
objc.data = "2+xi/FCCaHwTe/r8oeIL0TTqJq3sv84GrtLdDlzc7LPNte4TJvDH06aaETCrFXI0ajFAjSpdV5/GxdJuhmTw/g5CQOgwdqsR9lFKZP6naoZeLllNcER6ERPkJn/653zY0uMX5osNn0WVH2m4Nm/ifHIYOzjuAiEr4TWt3my5BFAsjDe6bguRAD1FmvFVDpNMjF9Bsrye0sT/c8nVuowhNrZS2rW/tWVdRtDMncslGlMntES7Z2EuhfP/yqSx7/icnL9mujalAylHAisHVeLWtEgb/HJh2b/tTy74NWPEqZy6u11AjMqXDVZogcXUIqQfJIr/vzClGlRAShWKvZPp5cgeQWGoD7uIIYVkYI4kw+VoH3b57672QV8OcQP1swlMAEHKCSu/jPiyQPr0dMJzl5//133I27WASF+axLwoXu1GCtDo4bcPhT5xjYkBti/bnbDLyhBYmpopBth9rd/AbKjDgCpw+K7udCpiLNMLTO9/VlxMVaz6VGd3GiPdla6E2TWedmrgDODvHZjlj+Zm/NXnOStIyd0vXyl0CPITDMO7RkV9IITLXkLIHGgIkc4IKZFoZSc+k2bHaIMDRZWTx4WqTFoWLfe44hgs4L9xVqwRuEArEMGDPcGi4C66lJmbTSNxzptU9uV/ehLwD0pmXu4eVo5XxIVaK/z2WY2OxZryrSni5kDiO+VhRHwva2vsDW4m6kKSjRnfDS4kd+tNfA==";
$done({
    body : JSON.stringify(objc)
});
