/*
 *
 *
脚本功能：Huluwa解锁会员
软件版本：3.2.0
下载地址：https://shrtm.nu/hlwa
脚本作者：Hausd0rff
更新时间：2021.11.18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：03ug2p
        可无限延长脚本的使用期限

*******************************

[rewrite_local]

# Huluwa解锁会员
^https?:\/\/api(-hlw\.\d+|\.\w{8,9})\.com\/api\/web\/(video|member).+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/HLSPCrack.js

[mitm] 

hostname = api-hlw.*.com, api.lvyouynn.com, api.spinalavm.com
*
*
*/


var hausd0rff = $request.headers;

    hausd0rff['X-Auth-Token'] = 'TIA:41591077:bb38a561249e182e91ad0812375ddd81';

    hausd0rff['X-Client-Identity'] = 'APP/11;vz00o7;huluwa.com;3.2.0;2.8.3.6 SYS/iOS;iPhone9,2;ios FM/Apple;iPhone9%2C2 SDI/9fa7a7515ae040299e15dd8aeadf77b2 NE/4G LANG/en_CN';

$done({headers : hausd0rff});
