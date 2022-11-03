/******************************

脚本功能：Anki Note解锁永久订阅
软件版本：2.11.2
下载地址：http://t.cn/A6oTR5RT
脚本作者：Hausd0rff
更新时间：2022-11-02
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > Anki Note解锁永久订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/AnkiNoteProCrack.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

objc = {
    "receipt": {
        "receipt_type": "Production",
        "app_item_id": 1586139777,
        "receipt_creation_date": "2022-11-03 10:18:37 Etc/GMT",
        "bundle_id": "com.teadoku.flashnote",
        "original_purchase_date": "2022-08-14 15:45:21 Etc/GMT",
        "in_app": [{
            "quantity": "1",
            "purchase_date_ms": "1659083512000",
            "transaction_id": "90001318452915",
            "is_trial_period": "false",
            "original_transaction_id": "90001318452915",
            "purchase_date": "2022-07-29 08:31:52 Etc/GMT",
            "product_id": "pro_ios_ipad_mac",
            "original_purchase_date_pst": "2022-07-29 01:31:52 America/Los_Angeles",
            "in_app_ownership_type": "PURCHASED",
            "original_purchase_date_ms": "1659083512000",
            "purchase_date_pst": "2022-07-29 01:31:52 America/Los_Angeles",
            "original_purchase_date": "2022-07-29 08:31:52 Etc/GMT"
        }],
        "adam_id": 1586139777,
        "receipt_creation_date_pst": "2022-11-03 03:18:37 America/Los_Angeles",
        "request_date": "2022-11-03 10:18:41 Etc/GMT",
        "request_date_pst": "2022-11-03 03:18:41 America/Los_Angeles",
        "version_external_identifier": 852990748,
        "request_date_ms": "1667470721375",
        "original_purchase_date_pst": "2022-08-14 08:45:21 America/Los_Angeles",
        "application_version": "1",
        "original_purchase_date_ms": "1660491921000",
        "receipt_creation_date_ms": "1667470717000",
        "original_application_version": "2",
        "download_id": 501660324760997076
    },
    "environment": "Production",
    "status": 0,
    "latest_receipt_info": [{
        "quantity": "1",
        "purchase_date_ms": "1659083512000",
        "transaction_id": "90001318452915",
        "is_trial_period": "false",
        "original_transaction_id": "90001318452915",
        "purchase_date": "2022-07-29 08:31:52 Etc/GMT",
        "product_id": "pro_ios_ipad_mac",
        "original_purchase_date_pst": "2022-07-29 01:31:52 America/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1659083512000",
        "purchase_date_pst": "2022-07-29 01:31:52 America/Los_Angeles",
        "original_purchase_date": "2022-07-29 08:31:52 Etc/GMT"
    }],
    "latest_receipt": "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"
};

$done({
    body: JSON.stringify(objc)
});
