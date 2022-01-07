/*
 *
 *
脚本功能：QrScanner解锁订阅
软件版本：5.4.0
下载地址：http://t.cn/A6JLAr5p
脚本作者：Hausd0rff
更新时间：2021-11-21
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# > QrScanner解锁订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/QRCodeScanProCrack.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/


var objc = JSON.parse($response.body);
var bdid = "com.internet-rocks.codescanner";

if (objc.receipt.bundle_id == bdid) {
    
    objc = {
      "environment" : "Production",
      "receipt" : {
        "receipt_type" : "Production",
        "app_item_id" : 1226650677,
        "receipt_creation_date" : "2022-01-06 10:16:03 Etc\/GMT",
        "bundle_id" : "com.internet-rocks.codescanner",
        "original_purchase_date" : "2022-01-06 10:16:03 Etc\/GMT",
        "in_app" : [
          {
            "quantity" : "1",
            "purchase_date_ms" : "1641464162000",
            "expires_date" : "2999-09-28 09:09:09 Etc\/GMT",
            "expires_date_pst" : "2999-09-28 09:09:09 America\/Los_Angeles",
            "is_in_intro_offer_period" : "false",
            "transaction_id" : "350001088421127",
            "is_trial_period" : "true",
            "original_transaction_id" : "350001088421127",
            "purchase_date" : "2022-01-06 10:16:02 Etc\/GMT",
            "product_id" : "co.airapps.qrscan.week",
            "original_purchase_date_pst" : "2022-01-06 02:16:03 America\/Los_Angeles",
            "in_app_ownership_type" : "PURCHASED",
            "original_purchase_date_ms" : "1641464163000",
            "web_order_line_item_id" : "350000484238050",
            "expires_date_ms" : "32495476149000",
            "purchase_date_pst" : "2022-01-06 02:16:02 America\/Los_Angeles",
            "original_purchase_date" : "2022-01-06 10:16:03 Etc\/GMT"
          }
        ],
        "adam_id" : 1226650677,
        "receipt_creation_date_pst" : "2022-01-06 02:16:03 America\/Los_Angeles",
        "request_date" : "2022-01-06 10:17:04 Etc\/GMT",
        "request_date_pst" : "2022-01-06 02:17:04 America\/Los_Angeles",
        "version_external_identifier" : 846334935,
        "request_date_ms" : "1641464224881",
        "original_purchase_date_pst" : "2022-01-06 02:16:03 America\/Los_Angeles",
        "application_version" : "5.4.0.1007",
        "original_purchase_date_ms" : "1641464163000",
        "receipt_creation_date_ms" : "1641464163000",
        "original_application_version" : "5.4.0.1007",
        "download_id" : null
      },
      "pending_renewal_info" : [
        {
          "product_id" : "co.airapps.qrscan.week",
          "original_transaction_id" : "350001088421127",
          "auto_renew_product_id" : "co.airapps.qrscan.week",
          "auto_renew_status" : "1"
        }
      ],
      "status" : 0,
      "latest_receipt_info" : [
        {
          "quantity" : "1",
          "purchase_date_ms" : "1641464162000",
          "expires_date" : "2999-09-28 09:09:09 Etc\/GMT",
          "expires_date_pst" : "2999-09-28 09:09:09 America\/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "350001088421127",
          "is_trial_period" : "true",
          "original_transaction_id" : "350001088421127",
          "purchase_date" : "2022-01-06 10:16:02 Etc\/GMT",
          "product_id" : "co.airapps.qrscan.week",
          "original_purchase_date_pst" : "2022-01-06 02:16:03 America\/Los_Angeles",
          "in_app_ownership_type" : "PURCHASED",
          "subscription_group_identifier" : "20530466",
          "original_purchase_date_ms" : "1641464163000",
          "web_order_line_item_id" : "350000484238050",
          "expires_date_ms" : "32495476149000",
          "purchase_date_pst" : "2022-01-06 02:16:02 America\/Los_Angeles",
          "original_purchase_date" : "2022-01-06 10:16:03 Etc\/GMT"
        }
      ],
      "latest_receipt" : "5L2c6ICF77ya5rWl6L275bCYIAoK5pu05aSa56C06Kej6KeE5YiZ6I635Y+W77yaCgpUR+e+pOe7hO+8mmh0dHBzOi8vdC5tZS95cWNfNzc3ClRH6aKR6YGT77yaaHR0cHM6Ly90Lm1lL3lxY18xMjMKCuKaoO+4j+KaoO+4j+KaoO+4j+a1pei9u+WwmENyYWNrIOS7heS+m+WtpuS5oOS4juS6pOa1gSDor7fli7\/ovazovb3kuI7otKnljZbvvIE="
    };

}

$done({ body : JSON.stringify(objc) });
