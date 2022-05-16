/******************************

脚本功能：欲漫涩解锁会员漫画
软件版本：2.0.4
下载地址：https://shrtm.nu/ymse
脚本作者：Hausd0rff
更新时间：2022-04-28
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 欲漫涩解锁会员漫画
^https?:\/\/.*\.com\/api\/app\/comicsChapter\/isLook$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PornComicsCrack.js

[mitm] 
hostname = zjgeo.eqobc.com, xnour.xonap.com, opzzy.kefsww.com, tqrbq.mpckv.com

*******************************/

var objc = JSON.parse($response.body);
objc.data = "UmFuH6Ie+EFFCRLdLmZMjOY1P72N7RA+BeqfsFP+Ci74pgF0AJKGPH1LhBTl9DivoiTow4zaW3nXlso\/y+m5KV3d2IYyIcUZ76mNh1WqVjtJvivAlgRXnB9xGdc=";
$done({
    body : JSON.stringify(objc)
});
