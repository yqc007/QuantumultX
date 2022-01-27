/*
 *
 *
脚本功能：ScannerAir解锁订阅
软件版本：2.4.0
下载地址：http://t.cn/A6i2Odbx
脚本作者：Hausd0rff
更新时间：2021-11-22
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# > ScannerAir解锁订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/ScannerAirProCrack.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1490084790,
    "receipt_creation_date" : "2022-01-27 04:00:37 Etc/GMT",
    "bundle_id" : "co.airapps.scannerapp",
    "original_purchase_date" : "2022-01-27 03:16:09 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1643256036000",
        "expires_date" : "2999-09-28 09:09:09 Etc/GMT",
        "expires_date_pst" : "2999-09-28 09:09:09 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "350001106280498",
        "is_trial_period" : "true",
        "original_transaction_id" : "350001106280498",
        "purchase_date" : "2022-01-27 04:00:36 Etc/GMT",
        "product_id" : "co.airapps.scannerapp.year",
        "original_purchase_date_pst" : "2022-01-26 20:00:37 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1643256037000",
        "web_order_line_item_id" : "350000493595908",
        "expires_date_ms" : "32495476149000",
        "purchase_date_pst" : "2022-01-26 20:00:36 America/Los_Angeles",
        "original_purchase_date" : "2022-01-27 04:00:37 Etc/GMT"
      }
    ],
    "adam_id" : 1490084790,
    "receipt_creation_date_pst" : "2022-01-26 20:00:37 America/Los_Angeles",
    "request_date" : "2022-01-27 04:01:12 Etc/GMT",
    "request_date_pst" : "2022-01-26 20:01:12 America/Los_Angeles",
    "version_external_identifier" : 846470297,
    "request_date_ms" : "1643256072211",
    "original_purchase_date_pst" : "2022-01-26 19:16:09 America/Los_Angeles",
    "application_version" : "2.4.0.1003",
    "original_purchase_date_ms" : "1643253369000",
    "receipt_creation_date_ms" : "1643256037000",
    "original_application_version" : "2.4.0.1003",
    "download_id" : 501095449683952511
  },
  "pending_renewal_info" : [
    {
      "product_id" : "co.airapps.scannerapp.year",
      "original_transaction_id" : "350001106280498",
      "auto_renew_product_id" : "co.airapps.scannerapp.year",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1643256036000",
      "expires_date" : "2999-09-28 09:09:09 Etc/GMT",
      "expires_date_pst" : "2999-09-28 09:09:09 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "350001106280498",
      "is_trial_period" : "true",
      "original_transaction_id" : "350001106280498",
      "purchase_date" : "2022-01-27 04:00:36 Etc/GMT",
      "product_id" : "co.airapps.scannerapp.year",
      "original_purchase_date_pst" : "2022-01-26 20:00:37 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20606634",
      "original_purchase_date_ms" : "1643256037000",
      "web_order_line_item_id" : "350000493595908",
      "expires_date_ms" : "32495476149000",
      "purchase_date_pst" : "2022-01-26 20:00:36 America/Los_Angeles",
      "original_purchase_date" : "2022-01-27 04:00:37 Etc/GMT"
    }
  ],
  "latest_receipt" : "5L2c6ICF77ya5rWl6L275bCYIAoK5pu05aSa56C06Kej6KeE5YiZ6I635Y+W77yaCgpUR+e+pOe7hO+8mmh0dHBzOi8vdC5tZS95cWNfNzc3ClRH6aKR6YGT77yaaHR0cHM6Ly90Lm1lL3lxY18xMjMKCuKaoO+4j+KaoO+4j+KaoO+4j+a1pei9u+WwmENyYWNrIOS7heS+m+WtpuS5oOS4juS6pOa1gSDor7fli7\/ovazovb3kuI7otKnljZbvvIE="
};

$done({ body : JSON.stringify(objc) });
