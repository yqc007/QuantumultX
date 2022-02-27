/*
 *
 *
脚本功能：视图播放器解锁永久特权
软件版本：1.6.0
下载地址：https://shrtm.nu/stbfq
脚本作者：Hausd0rff
更新时间：2022-02-09
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 视图播放器解锁永久免广告特权
^https?:\/\/m\.jmtiv\.com\/video\/user\/login$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/ViewPlayerFProCrack.js

[mitm] 

hostname = m.jmtiv.com
*
*
*/


var body = $response.body;
body = '"gSE2GF9lsriplywkQsixKCDoT6IAVYlqCbCCmPvnu1fMlKdcJHoviLiL0kqXNp5hI86VguK\/kJHWE5ljlDniUUsjF6NucRak7PxkxY1GA95xCWJ522Y9Q0vQH1T6S\/Q\/A3uoxGeacz2upcPZJcMKoDtiJVJljqa+qmiyfVIDi1B4YcjJ2HUuk2kobXkEEiPA8IDllobFQLeEsGJYl33tzABAN9zeZPP9GX1Wsnkid0cMVUWBWQPFSmzNYNBYJRRp51HmhiDC3+BNZV6U4xFmRQFpWEQEkmJwRlKHAYp81tb2scxYbMUXSqEW11F00rsZEsNIe8ZC072I0R2Q3KDuFR6CJ3UlLe76H0AgE4jvRhcWhhaos3U42FL8fiGe9LSXlvRSdmrbW+9zdtkV6NoFD+yBXHFY7BDBQYXltDWxbCowleXWu8YCXChxemyiajZtg3AUzvHd\/7D\/14jI2HCZV\/b\/3kdOfqQxTjmYbemSM0OkJCcsC5krAuRJjeC\/p+tGAKuBvvyAzTmBtyFDSiBqQTGnHskOhdjFjfa\/dMxFeB9YZoOnoN3gBEeCO2rLYZ3MfkOtWArkfEEXY0DsqEhLv13+XbQC7Nu9NRm2qfzUwu7egBRJGtFe3kl+7oyrpHjIRoaFyphZeY+f\/lCgiNwQkxt7e45uGs4M0Zp1GuGjvVGf+Ee4Ct0NNNlJZeth2JidMHB9DamjS27RZ75QLUG4yuO5hJs3O22+ztXj1qf7b7wDS09LIPp\/3u6xem9qgFC+"';
$done({
    body
});
