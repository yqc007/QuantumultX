/*
 *
 *
脚本功能：NOMO CAM 解锁订阅
软件版本：1.5.131
下载地址：http://t.cn/A6xIUPmm
脚本作者：Hausd0rff
更新时间：2022-01-06
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > NOMO CAM 解锁订阅
^https?:\/\/nomo\.dafork\.com\/api\/v3\/register\/phone_signin$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NoMoCamProCrack.js

[mitm] 

hostname = nomo.dafork.com
*
*
*/


var obj = JSON.parse($response.body);
    
    obj.sign = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQ2NTAyMiwiYWNjZXNzX3Rva2VuIjoibUZnTFBSM3RrbzVzOEFSQ01DaWE1MHZOYzR2cTlHREQ2d3J5RWp1b1Y3OWNXZGJHVXlvMUlLeGRyeUt3SnV2NUpoRHJKanpxRFlCWkFIRm80TUN6cm9wdm1HTEN1NTJ4dkcteW43MU1aV3NEMlJ0STd2NUdwTWxTWlVCVmE3UXZ4c3JiS1ZmcHdoMWVOYVcxZ0k4T2FleWxiWE4zVWRlNGpPSzczVFlrT2RRU2J2MzFVMnpLckE1V1A5RHNTVU9OSGlyMmtPaDAiLCJwcm9kdWN0cyI6W10sInByb2R1Y3RfaW9zX2lkcyI6W10sImlzX3N1YnNjcmlwdGlvbl91c2VyIjp0cnVlLCJyZWNlaXZlZF9maWxtX2lkcyI6W10sInRpbWVzdGFtcCI6MTY0MjY4NDQ0NH0.wFmYYByii_2FMhmKDmo9K5fRz0zJEjElzaNs6mD4hU7ndtYUAQksh7Q37uqVnfS584iwUXsXTxc7_0NXbpVd2I9Sl6Fft8-ZmtvoecLyXk3QP15zATzzl7p0ykrIAbZum6B3KnDAQcCOjqypGI8RU2m-lXvrnHVqJUd7Uk3XOqcDEyEsVgfgZ3b5L7BOmvycDk6yNIDqptwKQ2R4gB_Zo8dYnPdaBn9an77kq3QDRSVHntmuVepfGgFpZQFG4PHsKO12jwqeu6C-gx_vGsqbAx9e2ywePxuVUhzdHzqWKHQAvfoYej11YlHRs1cjt8QLf-Ys5wx3DFJ-od_xRsSLZA";

$done({
        body : JSON.stringify(obj)
});
