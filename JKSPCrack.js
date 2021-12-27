/*
 *
 *
脚本功能：健康视频解锁会员
网页版本：3.18.4
网站地址：https://shrtm.nu/jksp
脚本作者：Hausd0rff
更新时间：2021.11.14
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：在“兑换VIP天数”里输入VIP兑换码
        JK7939611可无限延长脚本使用期限

************************************

[rewrite_local]

# 健康视频解锁会员
^https?:\/\/apiw\.9waquan\.com\/sw2\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/JKSPCrack.js

[mitm] 

hostname = apiw.9waquan.com
*
*
*/


var hausd0rff = $request.headers;

    hausd0rff['Access-Token'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXZpY2VfaWQiOiI3Q0I3QzVERi00ODQzLTRBMDUtQjg3MS0xQTMxQjE3RTQyQ0IiLCJtZW1iZXJfaWQiOiJKSzc5Mzk2MTEiLCJlbWFpbCI6IjEwOTQzODA1MzFAcXEuY29tIiwiZXhwIjoxNjQxMDAzNzY0LCJzeXN0ZW1fdGltZSI6MTY0MDU3MTc2NCwicGFzc3dvcmQiOiIqKioqKjEyIiwid2F0Y2hlZF9jb3VudCI6MCwiY2FuX3dhdGNoX2NvdW50IjoyMCwiY2hhbmdlX2RldmljZV9jb3VudCI6MCwidW5saW1pdGVkX2V4cGlyZWRfdGltZSI6MTU5OTE0ODc5OSwidW5hZF9oYWxmX2V4cGlyZWRfdGltZSI6MCwidW5hZF9mdWxsX2V4cGlyZWRfdGltZSI6MCwiY2hlY2tpbl9taXNzaW9uIjowLCJjaGVja2luX2NvdW50IjowLCJ1bmxpbWl0ZWRfbGl2ZV92aWRlb19leHBpcmVkX3RpbWUiOjAsImNoYXJhY3Rlcl9jb2xsZWN0ZWQiOiIiLCJjb2xsZWN0X2xpbWl0IjoyMCwibGFzdF9sb2dpbl90aW1lIjoxNjE4OTY5ODI1LCJwbGF0Zm9ybSI6ImlvcyIsInZpcF90aWxsIjoxNjUxMDg5NjAwLCJib3VnaHRfdmlwX2JlZm9yZSI6MCwiYWxsX2ZyZWVfdmlwIjpmYWxzZSwiaW52aXRlZF9ieSI6bnVsbCwiaW52aXRlX2NvdW50Ijo2OCwiY2FuX2Rvd25sb2FkIjoxNCwibWVtYmVyX3N0YXR1cyI6MSwicmVtYWluaW5nX3BvaW50IjowLCJ2aXBfZ29sZCI6eyJzdGFyMSI6MCwic3RhcjIiOjEsInN0YXIzIjowLCJ2aXBfZ29sZF90aWxsIjoxNjMzNjA3NjQxfX0.5_wPjI4yMROWOfI25YDshbucCfKbYMx468PxPeYCcZY';
    
    hausd0rff['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1';

$done({headers : hausd0rff});
