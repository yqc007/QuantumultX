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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjEhdFFj5ePDBzEC4kNpf+7bMkuxO690Q6QzernQMFeFcpj+kjTnOi7kv/xR/Hip99aA24enWvimhraw2vbwa91hReZli/spq7ggEmSGhT/rK9t6pjLNn/CbmTgglFrd8qR5LbXn9eUC1Z/TjKtM2RV+/jbJWntT0kHXmm22CQjn67mRu2XOHWNR9JBVoCh67LPSkm/vf5BLphe8MULxKeguf2m3pJtzF873VrtujwOvtcl4FjSvHA6g3uKSBoFz+BmYXOQW7ZY8hwmLOZ+5FmZJdVa3Rut3anC/3/gDSGKRKjNgdTDl76OG5twRF6LwHfGLjeA6GjerC6hx7+QhbFRF7Wjkc5tVIbhdqkcNLbFC02tuzXtcZhB8KVOoW9o726pYZqlyisxsaQkui5lSEqpME+ujNM6iS2DcU9lYi3IPZHJfnvfC+OOsaThQjU4D3nJmPfSci45K4STKd7R7Vp53u5KXJR2urhMwf4u6Mz9mcUmKkcKBLcm/fkXP/vYthCo=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
