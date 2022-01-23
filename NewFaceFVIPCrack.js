/*
 *
 *
脚本功能：NewFace解锁永久会员
软件版本：1.3.8
下载地址：http://t.cn/A6JBzrWe
脚本作者：Hausd0rff
更新时间：2022-01-23
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > NewFace解锁永久会员
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NewFaceFVIPCrack.js

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
    "app_item_id" : 1493363916,
    "receipt_creation_date" : "2022-01-23 12:09:30 Etc/GMT",
    "bundle_id" : "com.skysoft.faceswap",
    "original_purchase_date" : "2022-01-23 12:03:43 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1642939734000",
        "expires_date" : "2999-09-28 09:09:09 Etc/GMT",
        "expires_date_pst" : "2999-09-28 09:09:09 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "350001103148881",
        "is_trial_period" : "true",
        "original_transaction_id" : "350001103148881",
        "purchase_date" : "2022-01-23 12:08:54 Etc/GMT",
        "product_id" : "com.skysoft.faceswap.subscription.forever",
        "original_purchase_date_pst" : "2022-01-23 04:08:54 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1642939734000",
        "web_order_line_item_id" : "350000491942826",
        "expires_date_ms" : "32495476149000",
        "purchase_date_pst" : "2022-01-23 04:08:54 America/Los_Angeles",
        "original_purchase_date" : "2022-01-23 12:08:54 Etc/GMT"
      }
    ],
    "adam_id" : 1493363916,
    "receipt_creation_date_pst" : "2022-01-23 04:09:30 America/Los_Angeles",
    "request_date" : "2022-01-23 12:13:48 Etc/GMT",
    "request_date_pst" : "2022-01-23 04:13:48 America/Los_Angeles",
    "version_external_identifier" : 843775073,
    "request_date_ms" : "1642940028738",
    "original_purchase_date_pst" : "2022-01-23 04:03:43 America/Los_Angeles",
    "application_version" : "256",
    "original_purchase_date_ms" : "1642939423000",
    "receipt_creation_date_ms" : "1642939770000",
    "original_application_version" : "256",
    "download_id" : 501085163522397526
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.skysoft.faceswap.subscription.forever",
      "original_transaction_id" : "350001103148881",
      "auto_renew_product_id" : "com.skysoft.faceswap.subscription.forever",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1642939734000",
      "expires_date" : "2999-09-28 09:09:09 Etc/GMT",
      "expires_date_pst" : "2999-09-28 09:09:09 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "350001103148881",
      "is_trial_period" : "true",
      "original_transaction_id" : "350001103148881",
      "purchase_date" : "2022-01-23 12:08:54 Etc/GMT",
      "product_id" : "com.skysoft.faceswap.subscription.forever",
      "original_purchase_date_pst" : "2022-01-23 04:08:54 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20586575",
      "original_purchase_date_ms" : "1642939734000",
      "web_order_line_item_id" : "350000491942826",
      "expires_date_ms" : "32495476149000",
      "purchase_date_pst" : "2022-01-23 04:08:54 America/Los_Angeles",
      "original_purchase_date" : "2022-01-23 12:08:54 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
};

$done({body : JSON.stringify(objc)});
