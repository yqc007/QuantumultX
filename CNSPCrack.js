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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj5DoXrwpTzqkFO6t4DGaUHUidMrx8e4FmQK5xC3WwDf0uEkKW4PiWAUFDnyaM+PqXXtK67v8UAn22zWMgY9Ug628Z5+eixgUjzQVttfH0kR6xyvJLBzlbs3Xy/A513ZSNwWwE1yarbL7QODV3Vl3FuIT1wIvIcHysnar4f/Kg7xtA4hYNjfpDYpl9mHXo0EpYKkn9MLwCXx8vjUn7tcKUccz0rTYaWEVip2jG3feqvPXfveY3iSBZn0vmjMT5e7LRB47mGaGudOQKUDV6UFdSwTRm1CE7Wx8yDY8WgMXuEJfSchWYkyLmV2oRjJLv+j8zdNC2g+YYOICxvSuDyDhRbFzgCtOQAzNYAJajgFIOhGzkd1Q01ERWPUGE7EXMF4Bzi2PBG7ye/b5U9QK9vc/SW5M0m6AYyGfQDGMp3v++y6Hzo9i+KUcEStq+19MZ9QarFcn1WBQPARyTGi1/tUQyBbFnrAUA2+9Z6sblXTMVTr2iHcRk+CKPCwp1rjMiUTikaqJkhJj5P2y9Pz8od4d0js=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
