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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj5DoXrwpTzqkFO6t4DGaUHVocRWJmqTKnwKutu0Fm/Q/ES3Yxirgp9uPQl8Wzvu50HxUHMf/ih264eWEnfe4Y7H+oo+ghhnekDXMGb13VUnJmMVpVjbzb/7L5qeJWKDtLpiTHXwXk2wm6KokkvVk++6T3iAXBQeekAW4/l4vIGIgwJTw/y0vprWX5jl6StU7jFjvLj/V8BM//JWTwn8rClC8gGC6mU0yhucqfFq3tVgNnzm9TkSvuJGvwHFK6Q8GT0rfnfyE8Ba/IQYkjdTwpxvu4U4a7b9KsTRQt2Ofnk3+t69Yye1QenJxen6WoloQnndZCjMeRz0N6c4hlo6runs7IsSB3ro/hPifiL367ag5ij6U4uEdP24CK3CaGJrly1H0gKIenlR00NcbOX4Q3Qiga7/CpK3OIIyn/lqAjp9ocLPGaWfViCzUZovdUVK4dqshKyNzP2n56qh4roedBrG8Hp2n0KkRugXg37JRZ55cpAnyKQPIJMPOwX3DtC6ScmkoPeUianOmWAVHlIJ5cWE=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
