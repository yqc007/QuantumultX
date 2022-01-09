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

# > 雏鸟短视频解锁会员
^https?:\/\/.+\.chuniao\..+\/app\/api\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/CNSPCrack.js

[mitm] 

hostname = *.chuniao.*
*
*
*/


var hausd0rff = $request.headers;

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjFHrf9ZqEhSr5D0+DbhGogXNgCp9EjEp7IS0jwtvqhsMbVR1J1lKmSAVejuJaIQw3SDpaFMjcFPbwX+ZdaXiMir6sAEpvw8Df6SYdEkK7za6v6RDb93EGCSLyoBoUhNaRIoDKkSjBdn6iFCeqGaS0ftbkuJGPN/GxpD6yoMsYkfrAQt0NMPcxi9eYaLLmOf+512RBC6HJFnAinQprcbw2uKoNjOJWw3RkXcTLUwQ/tsZ9Xf4CEU6QgUeOTJkifFes+Wo/W3TqNZFQbHoQ5wQHwIglqjg7SYbJG31PT89SFQLjbPgmFmdQ/V6e59rGrfpIcE1tJr51IV/2VIippMY2qSPQ1D6v4ZiJAHsAqVMJjLPA/HhmT6jCU5MMrOqIyIdwqC9VvMRuOcwI6s+3KPyi/rgbMxWmsgwe4p/Je3GG7LM3dMyDyZuyQ5nUAmwfVXoCuNFO0xhOVsk6pQwxe8UgtWIvEvxG6BdJ+weCoMAD32kJCzUGmoZwZNI7gAVGas86I=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
