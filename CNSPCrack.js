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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjGzKCiZfzZA0F/LMMbfKZso/7UwZ07fA1jFcENL/6uA+24BRGIKgy6Ik4XpzQoQcgm5mTtlynxBsMIYbaKPoBq+alMkiB42qUVDUZu7JkByMYzqCVlFbsw6E+yvuFQri77a+pw1yg2jBXy4AxcaMj7WpwornuDNZ6kshyau6NgDdaRqQpjV4givLRDKgcPZoVwLeRryfvTbQYmEr/0R44RA0ZahYlrwVVbEqCSCG3iSZ3EVk84MDhgvwr7qVs/vQjgH5GWwDyQhYKwiREZpwd68lW9FjGXi2ZrnA78MOVxuIQdtnjvBoOQByYbsEP5/pzBPrOXFIDvz5wKKZkEEy1nB+/zMTU0WTbjQLdajPl8VUbsKBBwc/GOitOpuYLzHqz0p5Qrg2LBeCILn6C3HsxwZO4kYU1iorbsgqOeJGX1n6sfwPaivRLbj4+KtGOA0aCjbRlgFd46YrFfbwJVlRYvxCCcH17XGWMgSX0uRN4efdBRLQO6ysCDRvVD0Ojr+C28=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
