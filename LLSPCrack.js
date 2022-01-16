/*
 *
 *
脚本功能：69萝莉解锁会员
网页地址：http://h5.502you.me
脚本作者：Hausd0rff
更新时间：2022-01-16
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 69萝莉解锁会员
^https?:\/\/h5.*you.*\/h5\/login\/loginAccount$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/LLSPCrack.js

[mitm] 

hostname = h5*you*
*
*
*/


var body = $response.body;
    
    body = '{"time":"2022-01-16 11:46:08","version":"1.0","status":"y","data":"wUSfe803UxQfxrlZRjO3jHVCKBfS/aQHxqKE/buECA6CTaLcyXa9E0rUB9J8dqYOTMldQNWZraZjkTnlJHaalza5STGT6nuoKyY06eQkDuUSdZWwyfr2W+dKNFvJyBilk9BkQyfF+JHqtq7GYXfQ9gPUcxgEZLSNNOHGTR/nfHRij3Lk7TwfrrVV7tATUCGR+XgteVZrwETns4WrcdNqdx7vED9nvfZFEDWZHrqF8xk/xmVU6fJN1dzysLo9EswBXWuGSC8AZcBSVvDN+cJ5oPy5JjuqKZz1MFIBqED/0Q/pz7W4naJGvBoWAPq9Nwdlhg2ep55SKaPAa6JoRTzBaek5h2Y1AK8i5hqaUfBNc+KP7rF2hkufkNimP5DPRzT6FYMmaQXutUnmuEUaeu2ZKyk/ZyK0sD3wrOSeHEH5fdQ=","sign":"503df1073a4c3f67cf07b0259bfd8b60"}';

$done({body});
