/*
 *
 *
脚本功能：TOK CAM解锁永久订阅
软件版本：1.8.43
下载地址：http://t.cn/A6iHacBq
脚本作者：Hausd0rff
更新时间：2022-02-08
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# > TOK CAM解锁永久订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TokCamFProCrack.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/


var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1522192046,
    "receipt_creation_date" : "2022-02-11 02:26:22 Etc/GMT",
    "bundle_id" : "com.muyin.camera",
    "original_purchase_date" : "2020-09-09 01:01:59 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1642850859000",
        "transaction_id" : "350001102215973",
        "is_trial_period" : "false",
        "original_transaction_id" : "350001102215973",
        "purchase_date" : "2022-01-22 11:27:39 Etc/GMT",
        "product_id" : "incentive01",
        "original_purchase_date_pst" : "2022-01-22 03:27:39 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1642850859000",
        "purchase_date_pst" : "2022-01-22 03:27:39 America/Los_Angeles",
        "original_purchase_date" : "2022-01-22 11:27:39 Etc/GMT"
      }
    ],
    "adam_id" : 1522192046,
    "receipt_creation_date_pst" : "2022-02-10 18:26:22 America/Los_Angeles",
    "request_date" : "2022-02-11 02:28:49 Etc/GMT",
    "request_date_pst" : "2022-02-10 18:28:49 America/Los_Angeles",
    "version_external_identifier" : 846803077,
    "request_date_ms" : "1644546529150",
    "original_purchase_date_pst" : "2020-09-08 18:01:59 America/Los_Angeles",
    "application_version" : "202201230001",
    "original_purchase_date_ms" : "1599613319000",
    "receipt_creation_date_ms" : "1644546382000",
    "original_application_version" : "2020090601",
    "download_id" : 75077048258874
  },
  "status" : 0,
  "environment" : "Production"
};

$done({ body : JSON.stringify(objc) });
