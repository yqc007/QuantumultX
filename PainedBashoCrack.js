/******************************

脚本功能：涩蕉视频解锁会员
软件版本：3.5.0
下载地址：https://shrtm.nu/sjcm
脚本作者：Hausd0rff
更新时间：2022-07-08
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 涩蕉视频解锁会员
^https?:\/\/sjapi\.juqianpu\.com\/api\/(video|app\/play_page) url script-request-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PainedBashoCrack.js
^https?:\/\/sjapi\.juqianpu\.com\/api\/member\/info$ url response-body .+ response-body XUxzDgEDZV15WQ4RL3V6RFYKV1F5UC9GBUx+EnAMMFBccnwNLF9EWFFrMwoBZXkGUEF+CVduNFkrX3oWdAsFT3VxfB0uSEBYaWQNDSpcX0p5e35PV240WStfehZ0NQlCdl9wEy5yQFhTdAkQAVtlWXpRfQp4Qw4FKU9cVHclOwl2THAXKlwCQWkBEg8sX3p5bGBiQmx9J0k+WG4IdSIoCllteA0sW1xCeV07FgBwCVxQcHZIVVQwWStfehh3JQkJdnFaVi5lZgR8cCsMAQRcRXxSWw15bQ4FK2FcEnAPME5ccn8XOwJ1WVVgKFAudUdZUX8NSmxuUVkrXH0MYDUrDHVPdwwtW3lYf3cvDi5MfQV7bG0Je1MjWj1PUFB0CytAdlh/CTpifkJ5XSMOBmAJR2xgekJSC1xJPnMODFsmJFZxX1YQLmJAWFFrLwA5BWZcVgtlUXlTJEMtWFsbYVMkUlxyVVY5Yn4HfWAWDwcEdgBsClxeUn4JRD5mfld0IhVRWwdREgBfZVdUASdWOgRYVlF/WExsaiwGKXZACFpSMFBcfW8eKltYSXxwKxE6blxWbG9MS39TClkpdgMWdCIrS3Fbcwg5AmVBUmQ0DyxcdQJ7bFcKe20GSStxbhJwDyRPYAZvFDlyfgd9cBYPAG5yVmwKDUhUUCwGLV9cVHY1CQ13Zg0TKlhAWFNrIwABYQlFb2BfUXlQLAUrYVxUdjUJTXV2cBcqX1NeamQ3FTsEaklvb2JeVFczRC1fWBl1IihTYm1jFDlyfgd5WSRULWJTAnhsV0F5fSRIKl9uUnc1Jwh1X3wNBWkGCA==

[mitm] 
hostname = sjapi.juqianpu.com

*******************************/

var __Oxe423b = ["body", "parse", "@", "includes", "split", "length", "stringify", "\x75\x69\x64\x40\x74\x6f\x6b\x65\x6e", [0x11ff2e48, "\x61\x65\x31\x62\x63\x61\x63\x36\x63\x30\x31\x32\x36\x61\x31\x38\x35\x36\x38\x32\x32\x66\x39\x66\x38\x64\x37\x30\x66\x64\x36\x30"]];

function key() {
    var _0x69fbx2 = JSON[__Oxe423b[0x1]]($request[__Oxe423b[0x0]]);
    if (arguments[0x0][__Oxe423b[0x3]](__Oxe423b[0x2])) {
        let _0x69fbx3 = arguments[0x0][__Oxe423b[0x4]](__Oxe423b[0x2]);
        for (i = 0; i < _0x69fbx3[__Oxe423b[0x5]]; i++) {
            _0x69fbx2[_0x69fbx3[i]] = arguments[0x1][i]
        }
    } else {
        _0x69fbx2z[arguments[0x0]] = arguments[0x1]
    };
    $done({
        body: JSON[__Oxe423b[0x6]](_0x69fbx2)
    })
}
key(__Oxe423b[0x7], __Oxe423b[0x8]);
