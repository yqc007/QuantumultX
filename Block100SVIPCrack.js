/*
 *
 *
脚本功能：拦截100解锁超级会员
软件版本：2.1.3
下载地址：http://t.cn/A6MLFAJf
脚本作者：Hausd0rff
更新时间：2022-01-05
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 拦截100解锁超级会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/Block100SVIPCrack.js

[mitm] 

hostname = tagit.hyhuo.com
*
*
*/


var body = $response.body;
    
    body = "lvCQG8cCxqficLk+LttK+L2YRSLM39a3jj+Mfoba4wNaV8x54RYUAWrJvcwwFZemFEWG5xK2FlI8k2hlHsSW7uaAeW45GPxSPt1uvVwPI5zLiMJuHvGycPsqS+ozuIELUsmxd901h+fpVaDUSy+5KRrW+M+mVJRARweO6FjfHosZ/pP8kkty3hz0uDRWb9enH9pG+36Issw9aJCxSkok0Q==";

$done({ body });
