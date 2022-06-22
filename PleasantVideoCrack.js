/******************************

脚本功能：悦色视频解锁会员
软件版本：1.0.1
下载地址：https://shrtm.nu/ysav
脚本作者：Hausd0rff
更新时间：2022-06-18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 悦色视频解锁会员
^https?:\/\/ys\.huajibh\.com\/api\/video url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/PleasantVideoCrack.js

[mitm] 
hostname = ys.huajibh.com

*******************************/

var hausd0rff = $request['\x75\x72\x6c']['\x72\x65\x70\x6c\x61\x63\x65'](/\/t\w{4}\/\d\/t\//g, "\x2f\x74\x6f\x6b\x65\x6e\x2f\x36\x64\x62\x35\x30\x62\x66\x38\x39\x37\x64\x37\x37\x34\x61\x38\x64\x65\x64\x64\x31\x38\x30\x39\x38\x31\x31\x32\x62\x61\x65\x66\x2f\x74\x2f");

$done({
    url : hausd0rff
});
