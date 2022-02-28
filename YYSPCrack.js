/*
 *
 *
脚本功能：鱿鱼视频解锁会员
软件版本：1.1.1
下载地址：https://shrtm.nu/yysp
脚本作者：Hausd0rff
更新时间：2022-01-04
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 鱿鱼视频解锁会员
^https?:\/\/api\.youyu.*\/api\/account\/loginBy(Phone|Password)$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/YYSPCrack.js

[mitm] 

hostname = *.youyu*
*
*
*/


var objc = JSON.parse($response.body);
    
objc.data = "Q1VkCx9hKsVF9rGEMREkbaT71saMd5n\/ORtFwbFs33RmBiHZ\/Mb567JB3dzRkja580urlSxZhXZFTJKToUpMyCmVvdRZ6xzoBDxIUns3eRbc+n4GtQ8Y5HE+6PnuXWzoPNv3BcsMMga2aOLqREHiFaMq\/7RzNwh1Lo56aaEZ3G3GmjHIb5OTVuXyQOPy34hhOkcjyGtOdPv3K0W0P9cOCgiN2jW+GNbw7pqXkkyeyRy8kCinVK501VqWCCbb3lLlMkg7uZ3ZvHJ6wSW6hjvMMGhOkuRGDZ4xura9s5ycKrJ3m4HcsdokSi8dSZ2jWUJNRYGEi25dv13zgqoOPEaWsD8ZyV6EqDqoLHWuQvL\/kwXX6SZKcnJjNUtQRQmPcUwWNLtTieTUyiyK6rL3P6iKYA==";

$done({
    body : JSON.stringify(objc)
});
