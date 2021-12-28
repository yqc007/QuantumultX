/*
 *
 *
脚本功能：糖心网页版解锁会员
网页地址：http://txv04.com/
脚本作者：Hausd0rff
更新时间：2021.11.18
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 糖心VLog网页版解锁会员
^https?:\/\/txv04\.com\/h5\/user\/findQrcode$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TXVWCrack.js

[mitm] 

hostname = txv04.com
*
*
*/


var body = $response.body;
    
    body = "UgFUysG7EOk3ra3zPvTBomoKxK0brYZZXyFZ35S6yHiDySIOskt67ThbbhWjVD1DRbkcQdYuvtKICvjnUhPPPw5JWXKCU4SbcMKs61LdxyOeyLVHUJiLo+zSR1Sla51RUAeCnC8D0Ru1DoaAczNLIwzsvkv0moLophQJ6zZPfbK4abs2Jnj3HRhzgoOhBE2N9uDDM4Wu9o2eOAqYa7B/KeK3B4muLOqtU6YVntsswvcYw8+SCJmKmQiLLMRDr0EeMogoFRNE97U1lZmcRbE2DSrIXiwRR/xUwSHsHu2+EDjZAbUVWgwDtKZGeEaGiWNe/9KACOecM+9RX30q+l5eS437f+MFVKvzB2zJy9+6eQmrxWObB8+FGvPaNEor5qVk";

$done({body});
