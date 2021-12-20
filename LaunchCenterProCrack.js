/*
 *
 *
脚本功能：LaunchCenter解锁订阅
软件版本：3.2.7
下载地址：http://t.cn/A6x1oVq2
脚本作者：Hausd0rff
更新时间：2021.11.20
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# LaunchCenter解锁订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/LaunchCenterProCrack.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/


var objc = JSON.parse($response.body);
      
    objc = 
{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 532016360,
    "app_item_id": 532016360,
    "bundle_id": "com.appcubby.launchpro",
    "application_version": "525",
    "download_id": 75040551122719,
    "version_external_identifier": 839363668,
    "receipt_creation_date": "2021-12-20 04:47:14 Etc/GMT",
    "receipt_creation_date_ms": "1639975634000",
    "receipt_creation_date_pst": "2021-12-19 20:47:14 America/Los_Angeles",
    "request_date": "2021-12-20 04:47:42 Etc/GMT",
    "request_date_ms": "1639975662680",
    "request_date_pst": "2021-12-19 20:47:42 America/Los_Angeles",
    "original_purchase_date": "2018-12-28 04:35:13 Etc/GMT",
    "original_purchase_date_ms": "1545971713000",
    "original_purchase_date_pst": "2018-12-27 20:35:13 America/Los_Angeles",
    "original_application_version": "287",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.appcubby.launchpro.subscription.annual",
      "transaction_id": "350001073333801",
      "original_transaction_id": "350001073333801",
      "purchase_date": "2021-12-20 04:47:13 Etc/GMT",
      "purchase_date_ms": "1639975633000",
      "purchase_date_pst": "2021-12-19 20:47:13 America/Los_Angeles",
      "original_purchase_date": "2021-12-20 04:47:14 Etc/GMT",
      "original_purchase_date_ms": "1639975634000",
      "original_purchase_date_pst": "2021-12-19 20:47:14 America/Los_Angeles",
      "expires_date": "2021-12-27 04:47:13 Etc/GMT",
      "expires_date_ms": "32495475600000",
      "expires_date_pst": "2999-09-28 09:09:09 America/Los_Angeles",
      "web_order_line_item_id": "350000476492671",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.appcubby.launchpro.subscription.annual",
    "transaction_id": "350001073333801",
    "original_transaction_id": "350001073333801",
    "purchase_date": "2021-12-20 04:47:13 Etc/GMT",
    "purchase_date_ms": "1639975633000",
    "purchase_date_pst": "2021-12-19 20:47:13 America/Los_Angeles",
    "original_purchase_date": "2021-12-20 04:47:14 Etc/GMT",
    "original_purchase_date_ms": "1639975634000",
    "original_purchase_date_pst": "2021-12-19 20:47:14 America/Los_Angeles",
    "expires_date": "2021-12-27 04:47:13 Etc/GMT",
    "expires_date_ms": "32495475600000",
    "expires_date_pst": "2999-09-28 09:09:09 America/Los_Angeles",
    "web_order_line_item_id": "350000476492671",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20491497",
    "subscription_verify_receiptier": "5L2c6ICF77ya5rWl6L275bCYIAoK5pu05aSa56C06Kej6KeE5YiZ6I635Y+W77yaCgpUR+e+pOe7hO+8mmh0dHBzOi8vdC5tZS95cWNfNzc3ClRH6aKR6YGT77yaaHR0cHM6Ly90Lm1lL3lxY18xMjMKCuKaoO+4j+KaoO+4j+KaoO+4j+a1pei9u+WwmENyYWNrIOS7heS+m+WtpuS5oOS4juS6pOa1gSDor7fli7/ovazovb3kuI7otKnljZbvvIE="
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.appcubby.launchpro.subscription.annual",
    "product_id": "com.appcubby.launchpro.subscription.annual",
    "original_transaction_id": "350001073333801",
    "auto_renew_status": "1"
  }],
  "status": 0
};

$done({body: JSON.stringify(objc)});
