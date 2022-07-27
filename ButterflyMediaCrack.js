/******************************

脚本功能：蝴蝶传媒解锁会员
软件版本：3.4.0
下载地址：https://shrtm.nu/hdcm
脚本作者：Hausd0rff
更新时间：2022-07-26
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 蝴蝶传媒解锁会员
^https?:\/\/api\..+\.cn\/api\/video\/play url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/ButterflyMediaCrack.js
^https?:\/\/api\..+\.cn\/api\/user\/counter\/$ url response-body .+ response-body bIEgwLM52F1dpQMqi/ViqoPQ/5DT5dSBL84CoJNnbMB3lBbylhz8EOi3ci0TwntHsMqycd2CiiqIre9ROCIv6wi8sWOoFcVaJq01deboiA2I8/OW+qaubZoiKbke04VOL5Vdr5XkRNQl0fLp2V2bCXajz+D6K0UAtDV8uvQXMa5MWkiYAQyfKBOrRPb5pe5reEvA2uGw5KY45VrRVB94IV8bQwrK7osGSDD7g9i3Z6zVGGxXGDtkyIjxjQAnwaPhFzGg3NV3VXzqscjmS/ZEevb+IoK5w0yFHVI/E5DQfRvyfMY75aI7LXy4DbVSHIqO+M9Z8hekdyzbQxOrxsFG8OA/J9VxZ8pMToALEOYTJiBB2CCl5Ko7c1hi6gTQhxsIZjQFlW9G+h+Qz1qs7SVzeg==
^https?:\/\/api\..+\.cn\/user\/profile$ url request-body .+ request-body bIEgwLM52F1dpQMqi/ViqoPQ/5DT5dSBL84CoJNnbMB3lBbylhz8EOi3ci0TwntHJaI2mJm5x4HCXIISOLDXPQi8sWOoFcVaJq01deboiA2I8/OW+qaubZoiKbke04VOgifMpuwtSHu7HVB+9RP2tIQA6UWKyvahbwKFvkD7X31Pn7lNw4ORVMf20XnNIzIDUVntigOg8XISbJjk8BwQxHFjYS4T9ZYE54B7o1HMr20P6z7pYbHFKgVriXTwOWUGVie3tUSlSXGLSpadG5VCLkcOkGyUrDg3q8PJ/7X4HpriW1Vi1NBrgmzIyJEq9Sx8FCm2EXoR81FQ6tT1lSke9yTg45gR7SiS6XKbjjN0bYSlrqg63hOX7iRIDNReVM1WXBLDdbTrYkrbFHjUsT122g==
^https?:\/\/api\..+\.cn\/ap(i|iv2)\/(ad\/click|notices|advert|game|subcategories\/list) url reject-200

[mitm] 
hostname = api.gygarden.cn, api.xminiapp.cn, api.petsbang.cn, api.yngenji.cn, api.*.cn

*******************************/

var _0xe8cr9 = ["headers", "authorization", "\x42\x65\x61\x72\x65\x72 \x65\x79\x4a\x30\x65\x58\x41\x69\x4f\x69\x4a\x4b\x56\x31\x51\x69\x4c\x43\x4a\x68\x62\x47\x63\x69\x4f\x69\x4a\x49\x55\x7a\x49\x31\x4e\x69\x4a\x39\x2e\x65\x79\x4a\x74\x62\x32\x4a\x70\x62\x47\x55\x69\x4f\x69\x4a\x48\x56\x55\x56\x54\x56\x45\x42\x4e\x54\x30\x4a\x4a\x54\x45\x55\x69\x4c\x43\x4a\x31\x61\x57\x51\x69\x4f\x6a\x45\x78\x4d\x54\x4d\x7a\x4e\x7a\x45\x34\x4c\x43\x4a\x75\x59\x6d\x59\x69\x4f\x6a\x45\x32\x4e\x54\x67\x34\x4e\x7a\x6b\x35\x4f\x54\x63\x73\x49\x6d\x56\x34\x63\x43\x49\x36\x4d\x54\x59\x32\x4d\x54\x51\x33\x4d\x54\x6b\x35\x4e\x79\x77\x69\x5a\x47\x56\x32\x61\x57\x4e\x6c\x49\x6a\x6f\x69\x4d\x7a\x45\x77\x51\x55\x59\x78\x4e\x6a\x6b\x74\x4d\x54\x41\x79\x52\x53\x30\x30\x51\x6b\x55\x30\x4c\x54\x6c\x43\x4e\x6a\x55\x74\x4d\x54\x63\x30\x4e\x6b\x56\x45\x4f\x54\x59\x7a\x4e\x55\x49\x32\x49\x6e\x30\x2e\x53\x44\x71\x74\x79\x48\x58\x4b\x5f\x4d\x6f\x36\x74\x76\x51\x32\x35\x64\x52\x61\x38\x45\x46\x4a\x4a\x78\x76\x50\x7a\x52\x66\x33\x57\x4e\x34\x48\x53\x52\x32\x74\x44\x34\x59", "x-device-id", "310AF169-102E-4BE4-9B65-1746ED9635B6", "x-client-agent", "ios;iPhone9,2;iOS15.4"];
var hausd0rff = $request[_0xe8cr9[0x0]];
hausd0rff[_0xe8cr9[0x1]] = _0xe8cr9[0x2];
hausd0rff[_0xe8cr9[0x3]] = _0xe8cr9[0x4];
hausd0rff[_0xe8cr9[0x5]] = _0xe8cr9[0x6];
$done({
    headers : hausd0rff
});
