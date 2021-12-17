/*
 *
 *
脚本功能：硬汉视频解锁会员
网页版本：3.0.1
网站地址：https://shrtm.nu/yhsp
脚本作者：Hausd0rff
更新时间：2021.11.16
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：在“兑换VIP天数”里输入VIP兑换码
        IN1773290可无限延长脚本使用期限

************************************

[rewrite_local]

# 硬汉视频解锁会员
^https?:\/\/apiw\.sshfax\.com\/sw1\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/YHSPCrack.js
^https?:\/\/apiw\.sshfax\.com\/sw1\/login$ url response-body token": "(.*?)" response-body token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOiJJTjE3NzMyOTAiLCJkZXZpY2VfaWQiOiIwNDNENkRGMi1CODVGLTQ1OUUtQjZEMC03NTBGMjI2RTMyRkQiLCJlbWFpbCI6IjEwOTQzODA1MzFAcXEuY29tIiwiZXhwIjoxNjQwMzQyMzIwfQ.q_V8EUpxdIjVcoW2wHof9tIPA1Lv0_Y8uMdTO-A3N6E"

[mitm] 

hostname = apiw.sshfax.com
*
*
*/


var hausd0rff = $request.headers;

    hausd0rff['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOiJJTjE3NzMyOTAiLCJkZXZpY2VfaWQiOiIwNDNENkRGMi1CODVGLTQ1OUUtQjZEMC03NTBGMjI2RTMyRkQiLCJlbWFpbCI6IjEwOTQzODA1MzFAcXEuY29tIiwiZXhwIjoxNjQwMzQyMzIwfQ.q_V8EUpxdIjVcoW2wHof9tIPA1Lv0_Y8uMdTO-A3N6E';

    hausd0rff['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1';

$done({headers : hausd0rff});
