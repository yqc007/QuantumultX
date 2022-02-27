/*
 *
 *
脚本功能：神话Live解锁会员
软件版本：1.0.0
下载地址：https://shzb.live
脚本作者：Hausd0rff
更新时间：2022-02-12
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 神话直播解锁会员
^https?:\/\/shapi\.qyrunda\.com\/api\/video\/user\/data$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/SHZBCrack.js
^https?:\/\/shapi\.qyrunda\.com\/api\/video\/(ad|banner|config\?field=not(es|ice)) url reject-200

[mitm] 

hostname = shapi.qyrunda.com
*
*
*/


var obj = JSON.parse($response.body);

obj.data = "waAGzhL0eeaWGst4XsVxG1KLawrGcX6xK285ad\/\/N+vxezn8AsGdNkeI0Q6aCdGhrLJuaO81\/XRwe8shsFiBsNHXk3jBBApzuWn\/qAYL0\/g81TuAlvOZZLnh1nf7OSfMO250m0PCnBpLGF4a2wE2XVnAMJQhLq8riwaobA5shZ0suGnyMr5BDr2aNX6SVQ5vhrpWLbc+ninz6Ey\/wu6QaflT8JKpu1yK5UsBWe3bX0tSXVL815sr4cCZ2XYOpDt01DEEFSxVaX2UJ7nUXMazrXokfjImqAxJbKHu13+SvgNjItQzRqSnJPrZ\/NtjngZMvd9OmmI+eXrVomz0rlvPwg4zA+u+4aKvXJxK\/9iF7\/joFs7N25JTiHQ2Cae99UazX\/8z0SeHsb4GLY9Q8\/TRh93Ryzf1UpCofea912ILrkiAsnJNaKdTlFo2Rhj5FNLtPFCWg27h6qvtu8mQcQ\/SQ8CwRsiFcsI7NCjsmrwSf9wnai2uPwaZM4\/cFPgQxdgS2TaT4A+BlxrDqUug5nteHYS5Z8FEnFzdTD8e4tIJYsZw2QcxYYlhJJ4kO8bDPRWJsK8KYLKX+BA1uiC\/pUQEZ1JZpCvyy4zA1YUTs\/2S\/sk0s2RNYlFNOky2Ri+QhfUF4oHfv5crsDbgCuibT\/LIJYnxLYr77IZ94Q8gCXfVboTSE9qEny2fBZ5o4q0UcIpx85AvpEdXD8lShturD68Zi1KpbK4E6TZy0my8nBU3FOqN3+9smKy5ihnGqqHJHtXWf9+ZT0JwqTfWmAYIZ1kBBM+AP6uf3xoJAWEW94NXrqAuoSMOYW+kCDIsXsRb8MW9QWzbWpRQP3aev2KikruqnqmdFxFdlOjGaY\/\/U\/0knIO+xq7ZNxOM7i5Uu6QPYNgQK0T6C3H2gDu3qmwvcyx2gXNRIflYYBVSspyFlAqwS3beC1ZX3Ciup1Ll5FHb1otmMB7WwMhq7zS\/XXluipPoMw==";

$done({
    body : JSON.stringify(obj)
});
