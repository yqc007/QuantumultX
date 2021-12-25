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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjH6DN8RSzCLbbedUR73qVn0Lbr78VxpOJfAf9HFSD7SaFYatlw5DX0z+nZo1goVTHYDPnOERITeL5O67iNZGfpvVh0iFHd0DrBu8ohNHzOclTLSjkGWUqwi+GVmUrM4gnwP6BOgkfcA4Nw+K7w4/U9QyI88lwRi5LhZO3GVN6V68B+buBcHGe+Zo/koPO6TAjrF/tJyr/gG/uMl3URkhgdxr19tqqmrwmeeCxVFaNymw2dnsrUSDJYn098i2JXl5AgczU8rpQd+jFX70HnAfJvo91QQAMlDmHiVtZJvSuCnzX7RCEqapxZtu9nklSl+nqIXIz/sjG0fS9hbi2jsF/mmYGr5q5dZabHvNJnEs23plIcfqjGuaaUIAFqapsXC/rx8H2UZzvZV0LEbfFQWOaokmYS5c4RI3jUD9VxkLnsgz+vjD4pD9G2zddMyt43IymfHOC0tcyH8Apx0ElxNI9X7PIkwmbS5eMMZLH7rwsvOpnyvr9LYe2hTUpdjh/H06OI=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
