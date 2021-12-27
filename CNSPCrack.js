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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjEopKQFdbZJ24xA6zDQLXEQ8nkew6Xj2eYl+MhzsvUf5ttH+URKPyZe1OnOXPo899SM47rCh0y8zluCj4LkeTo189fiuAgR4KBPOobNELwoL0kcPx85A2CGYW/Uh3drE7lUiGh44GebafQNSvmhkL4WSlGxjzBJBP9lbZfsfW1Cf6hD31wO8lqF2qP2Bwqtv6LKpgxC9OC5Gl6gOO4V8xz0Z4+gSqlu5KyG4UkwETb7YxOPN1qtli78tSuUrGXmRGa6sqWM4TPSJMub0jX4j69TuizKq0LyByPkhLVLyyElQ+zDQD/aDmdFNSoSsW98JZz7WgYtG4lpZmymoS2BtQUMe3EOnElG7I8cbLR9MyvRLq7kGQPIBbkUCzwp06iG8Yj3t6ffOXCz6sDKZm6kXrXg58NKulaMlAdoDMSxuaZWEoK0jIIFwj855/1DZt0+ehpX74dSLbhL1REu2SQTaLZP1xivkJHkQcf71ERZs3cLy5riCukKN48c4439eTJ+zZI=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
