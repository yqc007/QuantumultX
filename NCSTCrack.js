/*
 *
 *
脚本功能：新春水堂解锁会员
软件版本：4.0.1
下载地址：https://shrtm.nu/ncst
脚本作者：Hausd0rff
更新时间：2021.11.18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：MHMKX
        可无限延长脚本的使用期限
*******************************

[rewrite_local]

# 新春水堂解锁会员
^https?:\/\/api\.(sumsun|gzbbcg|kjregister|klettdayeare)\.\w{3}\/api\/user\/profile\/$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NCSTCrack.js
^https?:\/\/(time\.tfbeta\.top\/api\/app\/info|api\..+\/api\/(vip\/newshow|banner\/show|version\/show\/1))$ url reject-200

[mitm] 

hostname = api.sumsun.top, api.gzbbcg.com, api.kjregister.com, api.klettdayeare.com
*
*
*/


var body = $response.body;

    body = '"Yjt6dn18OyM7KSkpKSk7NTttfGFtOyM7amx6enxqajs1O314bXg7I2I7d3B6cld4dHw7Izv/rLzxpKL8qYE7NTt4b3hteGs7Izt4b3hteGs2KykrKCgrKSA2LiwsKH8heH8oeyB/LX17IXgoKXwueiArLnwren8ten83fXhteDs1O358d318azsjKDU7bHp2fXw7IzsqLSwtKio7NTtjdnd8OyM7MiEvOzU7aXF2d3w7IzsoLi8uKC8qICktKzs1O3B3b3BtfFp2fXw7IztUUVRSQTs1O2l4a3x3bVB9OyMqKyAgITU7b3B9fHZRcGptV2x0OyMoLzU7eG9RcGptV2x0OyMtNTtvcH18dlp4enF8V2x0OyMoNTtvcH18dlVwcnxXbHQ7Iyo1O3hvVXByfFdsdDsjKTU7cHdvcG18V2x0OyMuITU7eH58d012bXh1OyMrLTU7eH58d207Iys1O3BqVXB0cG07Iyg1O3BqVXZ+cHc7Iyg1O29waTsjYjtvcGk7Iyg1O29waVx3fV14bXw7IzsrKSsrNCkoNCspOSgrIyktIy0rOzU7a3xueGt9TXZteHU7Iyk3KSk1O2ppa3x4fU12bXh1OyMpNykpNTt6cXhrfnxNdm14dTsjKTcpKTU7fWt4bk12bXh1OyMpNykpNTt9a3huVXZ6cjsjKTcpKTU7f3x8OyMpNykpZDU7fnZ1fTsjYjtqcH53UHdLdm47Iys1O2pwfndVeGptXXhtfDsjOyspKyg0KCs0KCk5KC8jKSgjLSg7NTtqcH53TXZ9eGA7Iyg1O352dX1KcH53OyMoLjU7enF4a358TXZteHU7Iyk3KSk1O31reG5Ndm14dTsjKTcpKTU7fWt4blV2enI7Iyk3KSk1O352dX1VeG98OyMoKzU7fnZ1fUxqfDsjKTU7enZsaXZ3aldsdHt8azsjLSkpZDU7aXV4YF14YDsjYjtpdXhgV2x0OyM0KDU7eHVrfHh9YFdsdDsjNCg1O2lrfG9deGBXbHQ7IzQoNTt4dWt8eH1gSWt8b1dsdDsjNChkNTtwald8bkxqfGs7I394dWp8ZGQ="';

$done({body});
