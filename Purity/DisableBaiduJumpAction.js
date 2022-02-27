/*
 *
 *
脚本功能：解决Safari中疯狂跳转百度
脚本作者：Hausd0rff
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 百度不跳转
^https?:\/\/.*\.baidu\.com\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/Purity/DisableBaiduJumpAction.js

[mitm] 

hostname = *.baidu.com
*
*
*/


var hausd0rff = $request.headers;
hausd0rff['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)';
$done({
    headers : hausd0rff
});
