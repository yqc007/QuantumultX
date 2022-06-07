/******************************

[rewrite_local]
# > Qobuz解锁设备限制测试
^https?:\/\/www\.qobuz\.com\/api\.json\/0\.2\/file\/url url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/QobuzTest.js

[mitm] 
hostname = www.qobuz.com

*******************************/

var hausd0rff = $request.headers;

hausd0rff = {
'X-Device-Manufacturer-Id' : `E0726112-6C01-4EC3-8916-30A39A5C3624`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'X-Device-Platform' : `iphone_family`,
'X-User-Auth-Token' : `03QsPmlWaCjPVjAlDQsyM3lIQbbvwVoH-TZRGZ3mLKc5MsejaXPS3bF-BRNSStcbZfox1j2LSAejEi4IWQVOzQ`,
'X-Session-Id' : `NCWZg0qaEqN3IVXXhpJgHA`,
'User-Agent' : `Qobuz/220408184000 CFNetwork/1206 Darwin/20.1.0`,
'X-Device-Os-Version' : `14.2`,
'X-Device-Model' : `iPhone`,
'Cookie' : `qobuz-session-aws=c686a79f1ff4d708d19ff1a9d2e7acf4:80d35c496aa619a6305b29a3c3c22a1c4b31c6dc`,
'Host' : `www.qobuz.com`,
'X-App-Version' : `220408184000`,
'Accept-Language' : `zh-cn`,
'Accept' : `*/*`,
'X-App-Id' : `778874286`
};

$done({
    headers : hausd0rff
});
