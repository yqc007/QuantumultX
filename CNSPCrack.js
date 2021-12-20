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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjHFmqhD1xg3sUjanzJCrmc/ulvuOWn9buy6meDBT5DBO3tzQNMCxJLvRVydOJ37fb+/5K3lI1duQOAHJB6Q/NyWAludwVv/hXYJWU9+xcRGI1zxGx3lvmTNt7fnHRh93O8670ZOuyWZQOpgBbIkMYkc5UHqymUT5t2CHKhrj+7akcztbDje7prsdQsyq+KBgwCKUNvBjmgy+wHqcQ0Be1B0sZi1qPmmFhStkZw6/PBC5yTPoUhsWDzw7IJ4dR/RnemoKy2vWPW5BCWPqSSfQIukiLp6dwEiO+vUCuQq4FGjxjSzs4v+MGLKFo7xomvK0LtAl0OtiXm9UoGef1JwGO/VwDKEaWmKKaas9pDKZkicN1STkz2I0ELY0bKkeU9bqqRmoq98BiTWgk7QAV/3kdUxOhdOwEaUJG5V4XqrKyaEO9uXOE0PesugPKks7WnlgRZ8EiBMGXp6cQOKwH5Cf6sqibXJaWLeVZdzPI/tuAypaj75WKU27SHyoIJ+TQv1YDk=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
