/*
 *
 *
脚本功能：NOMO CAM 解锁订阅
软件版本：1.5.131
下载地址：http://t.cn/A6xIUPmm
脚本作者：Hausd0rff
更新时间：2022-01-06
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
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


var objc = JSON.parse($response.body);
objc.sign = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQ2NTg1MSwiYWNjZXNzX3Rva2VuIjoiMXE3R2NLaXZITEhpbWRhOXdrNUFuYllmZElEaWxGVmxSMWpIbWhsM2I1VHc1VTlZYlh0aTMzdTJDcW1GcGpCQktNaFVBQkNnc1JjeTNWWjN0SFBwZm1VMVlvNUtXY3lLT2taUE53R2FuT0NkUnJhZWkxd3lOcHpWbG1yWUJXLXdQR3NBSmVIODNsSWxTUVlic3ljeDdPSzVFUUhsN01uWGEzMVhVdVhzSGJvREJPM2Z5RGw3YUNjTllTajZSNVZ6Y3FYTjFSRDUiLCJwcm9kdWN0cyI6W10sInByb2R1Y3RfaW9zX2lkcyI6W10sImlzX3N1YnNjcmlwdGlvbl91c2VyIjp0cnVlLCJyZWNlaXZlZF9maWxtX2lkcyI6W10sInRpbWVzdGFtcCI6MTY0Mjc4MDc1MX0.pE65QvcFOa4aGoQtFJ-pnHys8uT4MKoakGNbuCRbOy-YZ4U0UDKgqJ7G-U2m9HUMXg2m39CzVvUKwwzvUQYK-YMf0u_xFz2HIDyEGPABpuq3dv4XzRGtNORlP5qNxy0EqbyOgmVbSSNX2kacvAX7BV5mLYPJLaDR0yjPLXuB7ac9MExGw4Iejn9VCnG1bkWxvSj-gdKX0MiGJIZP4rDkRsU9_TjMHaNyg2Rdp4rVptefHUuqfV4pitjKxWbIGyKEmiCOr53lTNypDshC3R0y-NqEHlnV5Mohc5s4m0-__HXW_NwgV5f4cb8oGV25cBdHwJPT_BLtc90jrCqG7us7WA";
$done({
    body : JSON.stringify(objc)
});
