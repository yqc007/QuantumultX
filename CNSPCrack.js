/*
 *
 *
脚本功能：雏鸟短视频解锁会员
软件版本：1.1.4
下载地址：https://shrtm.nu/cnsp
脚本作者：Hausd0rff
更新时间：2021.11.12
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：A2BVEF
        可无限延长脚本的使用期限
********************************

[rewrite_local]

# 雏鸟短视频解锁会员
^https?:\/\/.+\.chuniao\..+\/app\/api\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/CNSPCrack.js

[mitm] 

hostname = *.chuniao.*
*
*
*/


var hausd0rff = $request.headers;

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj5DoXrwpTzqkFO6t4DGaUHW0sTmxwv3HMHPkKLEzw1VoJIwU7GBRFw+LxQReECdxL9zc6A6os1HL0BfhogoS6FMJ33EndBay0VNAdZArrASPDdXV422ToMo2XNT92/Ws8yXy2FzcY9INEH83xjFfLDl7XsjbnxlTrYCPu6t/ZFn1moit6EccMQ81JmSh3YufNt+2mnauqgX5uLPp5KjfskeBHAE03zbOFhNvLWskrsuzJH7JuUiMiI6FenkbZmewCdigADcgqzRxxfGFpvvVHKrU6j0bmj56VuZMgrFETXrSbMRrmXm3DarT19VDkbYXv/OzuDeC6L3DOBE5V7fs16MzuNFop18UMNo+9ZGCbe3jorrVJTY3sR4I7QdSPLDFG62hPigkTaDFkx1RQhtF5mec0soVLBhBpX+lCF7tanBjkxIUhlYZvFNVVWaPOY/vvJFio/Ma0y2yvpFJKuL9D4hB2+6Chk3g8PqyefVSdbTfT0AKOy0mlNnir5/CKW6XLk3wNKnscw1fdZ9y2IJNhSw=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
