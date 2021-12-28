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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjFdLA1g4GHiRdPtMmjlW+cpDWoXVP1iz+E/xW5+QyJhBXwVh9Z0VerHyWwHnkEeajH6IPLCL9ICZGrgug85PYQnV6MbFe8u4P4hnMEarAMDqmq6vLFkKV+ni+XX6qhGYirJ4l+ZUSoNjj8I5ZG+4J8wy7shI2FNp4ZWwBvJmvuZkm6zoiHfLOaAzhdDd6NlOyEHInb8pkmr8YCepaWcLk9Q9LTN0WemRTOnT20PFkO9y7GS5UY7RpsXGz4GeUtnd1wAh8IMwt6oTD4Ct7cTldXujeU7j1wEo9C3SCWdZ/ua6ckBXLZmHyQFYxZ383DSif4B4Bp3j/jgmNwqX9j59PsxSHmTpSYPd6027u0pk2GeIKw89TAkfsLCQBbr53ub2qRN+w1FafatVozhVb/1AtfL+43nOh1J/eyXVDOlHwAZa9v5uJt/Gecz0VNsE3T50j+VfA4/ljjs6yGHjK/W1yOhDKf35ZnOXB8I75bk5JK0FlOyx0Of223p8jKB9UC3GoQ=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
