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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj5DoXrwpTzqkFO6t4DGaUHUBaNapOHGUQVHxNF2T9NN5J0lFLHMSuQSojK3urHIdCkjLPqkU28HZBfcbusyC5X+p7ppvPIIwWJyEr9w6JKVkjcyW3RgvZgPPo7lRKeAZLolo7yDusXdb0EiUe6dqqKw9MZHGVWE5Qz6nUUhcZfSbUxrwG/0uguAKMXle3aC14VhTI2k3bvnOmyEdD7oy/DZA6Tlz9xCs83VtSt6TAkE1DtCqzy1MCamQ2sV78JdPPYu2P4Gc+7/fA/H8PyTP8VbRW6QlBBkfxvl6JugYdB5p1z4b/vOZODPxVmOXvljL1PTVkdWcnA3F4kAxiPJgriabMTWzEZNBN6vs3BDGISwL3zBKzY15pvm/4k9RgBCY9i0KhT1IX1//uPNNYKu+y4PAhStiRt9XZeIguhdhxmnYdUSSdoquxdnGkL4w8lEEV/xhHioqHMfkJmyQDzCF1Y5iDZVXvCKW+AjVT8O1Cvws5Vfo2Ms31tQlGxKpp59OQpFp9eZ9MiAyyHIb6ktQTTA=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
