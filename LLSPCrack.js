/*
 *
 *
脚本功能：69萝莉网页版解锁会员
网页地址：http://h5.502you.me
脚本作者：Hausd0rff
更新时间：2022-01-10
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 69萝莉解锁会员
^https?:\/\/h5\.502you\.me\/h5\/login\/loginAccount$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/LLSPCrack.js

[mitm] 

hostname = h5.502you.me
*
*
*/


var body = $response.body;
    
    body = '{"time":"2022-01-11 23:33:39","version":"1.0","status":"y","data":"wUSfe803UxQfxrlZRjO3jDo75DFuuOFy\/mKpCeEt5vsXrIXIDf6KaPqm5jgMpdxAs\/Y27BDBVgvLghYl31bl2Da5STGT6nuoKyY06eQkDuVNywY2Tp1yxr4FMeujCYoOw7YglBt7Toc4jiJcNzDICQPUcxgEZLSNNOHGTR\/nfHRij3Lk7TwfrrVV7tATUCGR+XgteVZrwETns4WrcdNqdx7vED9nvfZFEDWZHrqF8xk\/xmVU6fJN1dzysLo9EswBXWuGSC8AZcBSVvDN+cJ5oPy5JjuqKZz1MFIBqED\/0Q\/pz7W4naJGvBoWAPq9Nwdlhg2ep55SKaPAa6JoRTzBaek5h2Y1AK8i5hqaUfBNc+KP7rF2hkufkNimP5DPRzT6FYMmaQXutUnmuEUaeu2ZKyk\/ZyK0sD3wrOSeHEH5fdQ=","sign":"00fb1de8e0693e88b085240e31ed567e"}';

$done({body});
