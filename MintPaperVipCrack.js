/******************************
脚本功能：薄荷壁纸解锁永久会员
应用版本：1.6.8
应用下载：http://t.cn/A6NhuR3U
脚本作者：Hausd0rff
更新时间：2023-05-28
脚本发布：https://t.me/yqc_123
使用声明：‼️脚本仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
# > 薄荷壁纸解锁永久会员
^https?:\/\/mars-prod\.whalean\.com\/hestia-service\/api\/(wpUser\/getUserInfo|wallpaper\/ai\/count\/detail) url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/MintPaperVipCrack.js
[mitm] 
hostname = mars-prod.whalean.com
*******************************/

function _0x5307(){var _0x251be5=['3137180IMKZzk','data','2999-09-28\x2000:00:00','memberEndTime','28vHLWrh','3276534AkUcPB','indexOf','33574050IWMwCD','isMember','214701OrKIdN','stringify','8825880pvoPYt','1pPHMEk','/ai/count/detail','parse','1913846QACZfo','2020-12-28\x2000:00:00','4764494ldcUlV','body','url'];_0x5307=function(){return _0x251be5;};return _0x5307();}function _0x8a63(_0x10c279,_0x3fad3){var _0x530758=_0x5307();return _0x8a63=function(_0x8a6380,_0x2918f8){_0x8a6380=_0x8a6380-0xce;var _0x3ca07f=_0x530758[_0x8a6380];return _0x3ca07f;},_0x8a63(_0x10c279,_0x3fad3);}var _0xd638d9=_0x8a63;(function(_0x1aa6dd,_0x18f019){var _0x2b127c=_0x8a63,_0x2a6993=_0x1aa6dd();while(!![]){try{var _0x1c0305=-parseInt(_0x2b127c(0xd6))/0x1*(parseInt(_0x2b127c(0xd9))/0x2)+-parseInt(_0x2b127c(0xd3))/0x3*(parseInt(_0x2b127c(0xce))/0x4)+-parseInt(_0x2b127c(0xde))/0x5+-parseInt(_0x2b127c(0xcf))/0x6+parseInt(_0x2b127c(0xdb))/0x7+-parseInt(_0x2b127c(0xd5))/0x8+parseInt(_0x2b127c(0xd1))/0x9;if(_0x1c0305===_0x18f019)break;else _0x2a6993['push'](_0x2a6993['shift']());}catch(_0x5f14e7){_0x2a6993['push'](_0x2a6993['shift']());}}}(_0x5307,0xa5258));var body=$response[_0xd638d9(0xdc)],urlq=$request[_0xd638d9(0xdd)],objc=JSON[_0xd638d9(0xd8)](body);urlq[_0xd638d9(0xd0)]('/wpUser/getUserInfo')!=-0x1&&(objc[_0xd638d9(0xdf)][_0xd638d9(0xd2)]=0x0,objc[_0xd638d9(0xdf)][_0xd638d9(0xe1)]=0x1d8def594800,objc['data']['userAccount']={'memberEndTime':_0xd638d9(0xe0),'renewalMethod':0x1,'continueOpeningFee':null,'userId':0xa2c2a,'memberFirstTime':_0xd638d9(0xda)});urlq[_0xd638d9(0xd0)](_0xd638d9(0xd7))!=-0x1&&(objc['data']['userCount']={'totalNum':0xa,'leftNum':0xa,'leftShareNum':0x0,'leftAdvNum':0x0,'vipNum':0xa,'useNum':0x0});$done({'body':JSON[_0xd638d9(0xd4)](objc)});
