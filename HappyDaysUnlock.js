/******************************

脚本功能：HappyDays 解锁永久会员
软件版本：1.0.4
下载地址：http://t.cn/A69vDgRH
脚本作者：Passer_by_yun
更新时间：2023-01-01
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > HappyDays 解锁永久会员
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/.{36}|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/HappyDaysUnlock.js

[mitm] 
hostname = api.revenuecat.com

*******************************/

var _0x1f1cf1=_0x582b;(function(_0x4c6dd1,_0x47e475){var _0x22a148=_0x582b,_0x38a8b8=_0x4c6dd1();while(!![]){try{var _0x1464cc=-parseInt(_0x22a148(0x12c))/0x1*(parseInt(_0x22a148(0x12f))/0x2)+-parseInt(_0x22a148(0x133))/0x3+parseInt(_0x22a148(0x11f))/0x4+parseInt(_0x22a148(0x11d))/0x5+-parseInt(_0x22a148(0x130))/0x6+parseInt(_0x22a148(0x131))/0x7*(parseInt(_0x22a148(0x125))/0x8)+-parseInt(_0x22a148(0x123))/0x9*(-parseInt(_0x22a148(0x12d))/0xa);if(_0x1464cc===_0x47e475)break;else _0x38a8b8['push'](_0x38a8b8['shift']());}catch(_0x3e610f){_0x38a8b8['push'](_0x38a8b8['shift']());}}}(_0x50d4,0x97324));var body=$response[_0x1f1cf1(0x134)],head=$request['headers'],ua=head[_0x1f1cf1(0x121)],obj=JSON['parse'](body);ua[_0x1f1cf1(0x12a)]('Happy%3ADays')!=-0x1&&(obj={'request_date_ms':0x184aebad4ab,'request_date':_0x1f1cf1(0x12e),'subscriber':{'non_subscriptions':{},'first_seen':'2022-11-25T12:16:35Z','original_application_version':'928','other_purchases':{},'management_url':_0x1f1cf1(0x126),'subscriptions':{'happy_449_1y':{'original_purchase_date':'2022-11-25T12:17:34Z','expires_date':'2077-07-07T07:07:07Z','is_sandbox':![],'refunded_at':null,'unsubscribe_detected_at':'2022-11-25T12:19:50Z','grace_period_expires_date':null,'period_type':_0x1f1cf1(0x128),'purchase_date':_0x1f1cf1(0x11e),'billing_issues_detected_at':null,'ownership_type':'PURCHASED','store':_0x1f1cf1(0x129),'auto_resume_date':null}},'entitlements':{'pro':{'grace_period_expires_date':null,'purchase_date':_0x1f1cf1(0x11e),'product_identifier':_0x1f1cf1(0x12b),'expires_date':'2077-07-07T07:07:07Z'}},'original_purchase_date':'2022-11-25T12:16:12Z','original_app_user_id':_0x1f1cf1(0x120),'last_seen':_0x1f1cf1(0x124)}});Status=_0x1f1cf1(0x132),Headers={'Content-Type':_0x1f1cf1(0x122)};function _0x50d4(){var _0x116233=['indexOf','happy_449_1y','116hEbyqO','10KNkidr','2022-11-25T12:19:50Z','8226fQgsvG','3288240eDTllh','21rjfxRC','HTTP/1.1\x20200\x20OK','2314131YpTAEX','body','5622095KjQIXI','2022-11-25T12:17:33Z','6604hkBbWa','$RCAnonymousID:Passrr_by_yun','User-Agent','application/json','3864006DEJELA','2022-11-25T12:16:35Z','2294456IqFLxg','https://apps.apple.com/account/subscriptions','stringify','normal','app_store'];_0x50d4=function(){return _0x116233;};return _0x50d4();}let Yun={'status':Status,'headers':Headers,'body':JSON[_0x1f1cf1(0x127)](obj)};function _0x582b(_0x17f640,_0x58690c){var _0x50d430=_0x50d4();return _0x582b=function(_0x582b09,_0x44322d){_0x582b09=_0x582b09-0x11d;var _0x5ec7ba=_0x50d430[_0x582b09];return _0x5ec7ba;},_0x582b(_0x17f640,_0x58690c);}$done(Yun);
