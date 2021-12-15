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

    hausd0rff['X-TOKEN'] = 'xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj5DoXrwpTzqkFO6t4DGaUHXVhj2tr70Zw6IjT8LjXq9I4wvXIq2LHJjxSKwsN5RpgNT4kKAeZDANYHDCiJTGo0sOwGlOCp57Z14DckrfGHWqIYRqcu85ebCcnFTcsS2SwO02Js4g14FkZX3sVFzJhAX0sL9HiamrNOzGUElUbBnmvipl6LUbT4eMXy9jg9wCTX2PcW4Q5kV/t3EQ+AhtRG6nyDgEZSEbnK7ftHAKF0upMHygxGdj5aOxO6QRsuOvO4Cq+hBNJT1Az665jmo930a5jgszUV9AfN2Mnf5td2AuvxNxvUvsQR2AmmFLHerET2GqbZDjMj4Vp3Gq79KsnHSLxvcxQhXuHEySWrLEuqQh+KPMkIPOB4IIQIACVw+d2HqprWmX9QaMb8bk96KzLOnfbei74Qgbe47RT+HSV4FNli/sDHroAXgeup3rpzuqFCpX8tNjhnwFVtz8EDvsYoqwtCwlHWBYDhzEdVliylOjKRtEFGxCsVOmvnCeBLg9dcbYcWOb4IxHXzbUz7tdsbU=';

    hausd0rff['X-AUTHN'] = '45aebf2239f533611b172a8ecff036a3';

$done({headers : hausd0rff});
