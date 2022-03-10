/******************************

脚本功能：雏鸟短视频解锁会员
软件版本：1.1.4
下载地址：https://shrtm.nu/cnsp
脚本作者：Hausd0rff
特别鸣谢：感谢@PayNe大神的数据
更新时间：2022-03-08
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 雏鸟短视频解锁会员
^https?:\/\/.+\.chuniao\..+\/app\/api\/user\/info$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/CNSPCrack.js
^https?:\/\/.+\.chuniao\..+\/app\/api\/video\/info$ url request-header (\r\n)X-TOKEN:.+(\r\n) request-header $1X-TOKEN: xOIby5DWr2tCf/OxKvnSZoHnD36X8YyzazHwXpj8r+Vqkqa30wWe5PIarCBfLcUuYQfrSQKrtwdb7Un7dQesn3opn4Dw39HpJtFipm7B7Np0SCBYKelhyBMOy9ZKbIhpWA22y6C9NxEQOk9JVEgPj+NsSTs6jq8akUhr8HshbjHde4aL62R6FsHdGVpTdNR/2MMATg+o6K2tqWGUEW7dX0GIpe09mb8oW3qBAsYOB8qZvj28Ecilb9D60QY0aEN/X/1AlsrpeFNdn6Kxi+ZdAvIFwEXvB8f+jr01ueiyjz1yOTgMVrnhdI+s4pEAmVmtej8ckZPmEYdrfkeaONj+3ua/M1rOBqh/UqN+44uIq/xpSH7xYSC69ZuE5lRB45/YXXKsDOkbhBE38GbL4iyOve44mvsnSFejoLGJoi2+4u8tOn+6S79ZOKjf4J5Yc9e29wbm+PojVBPmORdU/XW5nRfQcHdtgM8uoQvGkSW/dskaP/LaP8lOYGYhZCr7Yt6SoPpAhwrh5rl1Jc7F+3aTvASrHLXnqz5JNlWsnsY5/UsH83sltAOXRGShDHmqHprH9Ag9Rw4zSZdjOswtI/XqVOXmm6Ya3CTJ12C2MzLjy0j/cSkfPsLg4eypUahQzc7gPtcTyteiU+AEv8fTmm79uqRAe90j6/JMU7Co1jtOpGc=$2
^https?:\/\/.+\.chuniao\..+\/app\/api\/(sendmsg|user\/bindphone) url reject-200

[mitm] 
hostname = *.chuniao.*

*******************************/

var objc = JSON.parse($response.body);
objc.data = "Nz8OMo6OqaPF78OGk0TL+duyTXcOHu1SWLwsiRb9WjM0ODuIPZoaqHeTFR8UxStR6ALomb+z87JewkHx2UY7zjKDFa5mazMMNsU0W+6R7mnWQXxScBWUUEWHFczOgg+AfwqYAIpkRHhmzDt7TAllBUyZnJRbKnXqJIihg5BVg6VUB3VOjGs8OXVvjLkQMM4JbsaqKqsJ+dt7DzPkY6X2oJnTcduaAsFJrlOhMYLNn4PjfRexkfKnupwVk6HR6Qi97sg/QaMwPHTsFfs3oWyc3v4WQSZu9Zo851prx4+/du9m4+Zj1X66zB2K9xl5/pewyuM0a7KyZjY0It3URTQCIXGssVNLVmwmnuo7tJGsyfctveemzTcR1eR4moo/q8UDeO7UCc/CnVVRp5plMnU+PMLIiXYYOmYzQ3HdfaYpSEU1tC845EHrfwlKzkw6sdjqqaMPbbKyfu8uQRjZ7Uzefu63uhTXVt8OwijgzCCXxihTB4mBEswk365FYGFJkLxN0UGZpyrGemuVmf5gJYCYjE0OhYtbhlsuJwfARY0BkxnfjQ5p0sCuL1ZxH7W6S4hYGqIArayi20IdF9YqHMNa0lmLncK6RdvxJL2La53MSmOw13jQGa7286Y11wDHTW2TM/nU/kGgUj3gu9KSM0hiHEiuB//HsVtSEsm1UQOeI353wwnJjaNzHh7sKxYuvwsxBKUfk2mqBExn4vCpuoy7K+Bt2baiVrI3onKmgbKAT7+nPoDFZDSp2gTD5VHYKiaPqWA8dY3qRfrdYaW89BiwK6I0/hmlxldGJUGsoZ7ezJ4OyC6OQRXnu3ZQlcBt8WhnLuU3AHSDP8HDb/P2LW9zj2RR1vl6LZUBJ6Rr3btsIsj5bqcu77rWBy4VkdoWKHAuLcgi+fWUNaulLKIYRc68P8sca9OxGZuBq3xXNeGSjxqxapiwrzuzWTzmkzYzOzFyXBnM/5u9n65NnEzIZriQmbZkxzgf8smKn9ihUEBjuP84fUkdOxicQgRZhKoLj9zIyFE33V9kd4cYWm/DYXL6qckNcQnj9NLzdcRF5uuuyAVMHQAnDRMfAHfEAiBeAIPPPAMVzJ0WlHCMrdzClktOf7vz83jB2pq+0AFvtha4jryUrll+Drm7AAqVYF2+xNOeas4Nxz97I6BGJ49eX111r+QC5Gn+TAh7NKzDdaNpoxqv1pthEa4ot4M6zW0IwsEOAXoFEgiYmB2uq3BgoVN44kTO8ejdje4hjNMp3p0kN326vBddtaTRcbTVJY6+5QsyqDFEq+B5FsGU3Uw+xruuAZVj9gQW7QVFOx9pHmFgoJKsuw6bkdanTfjTcqAc241tAICiu8L0GGaUc652fG5c0sJMeoj1CVQWYp9R6tRRlzP4pretswN9NPsFjf+2amJS";
$done({
    body : JSON.stringify(objc)
});
