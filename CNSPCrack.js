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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjEI0JLjnj2kmEy9THMy9LknQNQTrdipLYLbLvfxufbV/NfAqO8h6SDCIOW0HYYxHaN/AwX95P4Zsvl+0/Pv1b8RpSbp9cSUShFVhRt+bHB24bE58RLBQigVZYvQLFrHFruOUGRTAfA1olh6xvHnXOFWSpTtCePlals7DYJuFxT5ICq8MaDegDSUZY5MJ2dZRAoqUKZ2uJw9YGgwPTMc8ti5TBKcY9iGJwwAXI2EDrYjywfFTbrxH8CtOxO5TxLgRHck/zdY+RPCxHvYuRutT+Fw9u4dCByNmuaB6qFXA6mypES6mU/CVUFeXbR3MaACXW//vpwP4Si5IzOYfUf3hRl06dnKNVfayQbQSTooxgUsLZyP1Z5xLU/e5m2fhRMOnusH3TXJWdvWisFm2bsFVjzBDMIKUZGG06wVAO3dTMlXJoovdkTdZM3OvvK4K7pVWQNrfwdL8uhFbo5LvNo/5cFuMoBz15v7ftzTlUdFECwuUofcVKW7VSLEAXFeu2sOvwE=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
