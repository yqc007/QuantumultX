/*
 *
 *
脚本功能：FIMO解锁全部胶卷
软件版本：2.18.0
下载地址：http://t.cn/AiNMwtTQ
脚本作者：Hausd0rff
更新时间：2022-01-20
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > FIMO解锁全部胶卷
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/apple\/certificate$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/FiMoCameraProCrack.js

[mitm] 

hostname = server.yoyiapp.com
*
*
*/


var objc = JSON.parse($response.body);
      
    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1454219307,
    "receipt_creation_date" : "2022-01-21 08:42:07 Etc/GMT",
    "bundle_id" : "com.fimo.camera",
    "original_purchase_date" : "2020-09-06 04:26:38 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1599367249000",
        "transaction_id" : "600000566110907",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000566110907",
        "purchase_date" : "2020-09-06 04:40:49 Etc/GMT",
        "product_id" : "fimoRDP3",
        "original_purchase_date_pst" : "2020-09-05 21:40:49 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1599367249000",
        "purchase_date_pst" : "2020-09-05 21:40:49 America/Los_Angeles",
        "original_purchase_date" : "2020-09-06 04:40:49 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617192687000",
        "transaction_id" : "600000680304359",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680304359",
        "purchase_date" : "2021-03-31 12:11:27 Etc/GMT",
        "product_id" : "fimoPS98",
        "original_purchase_date_pst" : "2021-03-31 05:11:27 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617192687000",
        "purchase_date_pst" : "2021-03-31 05:11:27 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:11:27 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617194039000",
        "transaction_id" : "600000680313006",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680313006",
        "purchase_date" : "2021-03-31 12:33:59 Etc/GMT",
        "product_id" : "fimoHK200",
        "original_purchase_date_pst" : "2021-03-31 05:33:59 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617194039000",
        "purchase_date_pst" : "2021-03-31 05:33:59 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:33:59 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193983000",
        "transaction_id" : "600000680312670",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680312670",
        "purchase_date" : "2021-03-31 12:33:03 Etc/GMT",
        "product_id" : "fimoEPR64",
        "original_purchase_date_pst" : "2021-03-31 05:33:03 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193983000",
        "purchase_date_pst" : "2021-03-31 05:33:03 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:33:03 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540288000",
        "transaction_id" : "600000695823174",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695823174",
        "purchase_date" : "2021-04-27 16:18:08 Etc/GMT",
        "product_id" : "fimoDE200",
        "original_purchase_date_pst" : "2021-04-27 09:18:08 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540288000",
        "purchase_date_pst" : "2021-04-27 09:18:08 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:18:08 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540212000",
        "transaction_id" : "600000695822417",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695822417",
        "purchase_date" : "2021-04-27 16:16:52 Etc/GMT",
        "product_id" : "fimoTSE50",
        "original_purchase_date_pst" : "2021-04-27 09:16:52 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540212000",
        "purchase_date_pst" : "2021-04-27 09:16:52 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:16:52 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1611909280000",
        "transaction_id" : "600000641110384",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000641110384",
        "purchase_date" : "2021-01-29 08:34:40 Etc/GMT",
        "product_id" : "fimoV3500T",
        "original_purchase_date_pst" : "2021-01-29 00:34:40 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1611909280000",
        "purchase_date_pst" : "2021-01-29 00:34:40 America/Los_Angeles",
        "original_purchase_date" : "2021-01-29 08:34:40 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1624680344000",
        "transaction_id" : "600000730142855",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000730142855",
        "purchase_date" : "2021-06-26 04:05:44 Etc/GMT",
        "product_id" : "fimoAPX400",
        "original_purchase_date_pst" : "2021-06-25 21:05:44 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1624680344000",
        "purchase_date_pst" : "2021-06-25 21:05:44 America/Los_Angeles",
        "original_purchase_date" : "2021-06-26 04:05:44 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1638373972000",
        "transaction_id" : "600000828055522",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000828055522",
        "purchase_date" : "2021-12-01 15:52:52 Etc/GMT",
        "product_id" : "fimoXMAS25T",
        "original_purchase_date_pst" : "2021-12-01 07:52:52 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1638373972000",
        "purchase_date_pst" : "2021-12-01 07:52:52 America/Los_Angeles",
        "original_purchase_date" : "2021-12-01 15:52:52 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193868000",
        "transaction_id" : "600000680311861",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680311861",
        "purchase_date" : "2021-03-31 12:31:08 Etc/GMT",
        "product_id" : "fimoTriX400",
        "original_purchase_date_pst" : "2021-03-31 05:31:08 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193868000",
        "purchase_date_pst" : "2021-03-31 05:31:08 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:31:08 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193836000",
        "transaction_id" : "600000680311689",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680311689",
        "purchase_date" : "2021-03-31 12:30:36 Etc/GMT",
        "product_id" : "fimoGOLD200",
        "original_purchase_date_pst" : "2021-03-31 05:30:36 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193836000",
        "purchase_date_pst" : "2021-03-31 05:30:36 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:30:36 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540575000",
        "transaction_id" : "600000695825630",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695825630",
        "purchase_date" : "2021-04-27 16:22:55 Etc/GMT",
        "product_id" : "fimoTokyo500",
        "original_purchase_date_pst" : "2021-04-27 09:22:55 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540575000",
        "purchase_date_pst" : "2021-04-27 09:22:55 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:22:55 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1628250446000",
        "transaction_id" : "600000755412364",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000755412364",
        "purchase_date" : "2021-08-06 11:47:26 Etc/GMT",
        "product_id" : "fimoIMAX5207",
        "original_purchase_date_pst" : "2021-08-06 04:47:26 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1628250446000",
        "purchase_date_pst" : "2021-08-06 04:47:26 America/Los_Angeles",
        "original_purchase_date" : "2021-08-06 11:47:26 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617194012000",
        "transaction_id" : "600000680312855",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680312855",
        "purchase_date" : "2021-03-31 12:33:32 Etc/GMT",
        "product_id" : "fimoBubble400",
        "original_purchase_date_pst" : "2021-03-31 05:33:32 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617194012000",
        "purchase_date_pst" : "2021-03-31 05:33:32 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:33:32 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1621139100000",
        "transaction_id" : "600000706862636",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000706862636",
        "purchase_date" : "2021-05-16 04:25:00 Etc/GMT",
        "product_id" : "fimoBeauty400",
        "original_purchase_date_pst" : "2021-05-15 21:25:00 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1621139100000",
        "purchase_date_pst" : "2021-05-15 21:25:00 America/Los_Angeles",
        "original_purchase_date" : "2021-05-16 04:25:00 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1639274117000",
        "transaction_id" : "600000834501312",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000834501312",
        "purchase_date" : "2021-12-12 01:55:17 Etc/GMT",
        "product_id" : "fimoPortra400",
        "original_purchase_date_pst" : "2021-12-11 17:55:17 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1639274117000",
        "purchase_date_pst" : "2021-12-11 17:55:17 America/Los_Angeles",
        "original_purchase_date" : "2021-12-12 01:55:17 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193956000",
        "transaction_id" : "600000680312456",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680312456",
        "purchase_date" : "2021-03-31 12:32:36 Etc/GMT",
        "product_id" : "fimoMorandi200",
        "original_purchase_date_pst" : "2021-03-31 05:32:36 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193956000",
        "purchase_date_pst" : "2021-03-31 05:32:36 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:32:36 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540542000",
        "transaction_id" : "600000695825341",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695825341",
        "purchase_date" : "2021-04-27 16:22:22 Etc/GMT",
        "product_id" : "fimoKDchrome64",
        "original_purchase_date_pst" : "2021-04-27 09:22:22 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540542000",
        "purchase_date_pst" : "2021-04-27 09:22:22 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:22:22 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193926000",
        "transaction_id" : "600000680312282",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680312282",
        "purchase_date" : "2021-03-31 12:32:06 Etc/GMT",
        "product_id" : "fimoNatura1600",
        "original_purchase_date_pst" : "2021-03-31 05:32:06 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193926000",
        "purchase_date_pst" : "2021-03-31 05:32:06 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:32:06 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1617193893000",
        "transaction_id" : "600000680312058",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000680312058",
        "purchase_date" : "2021-03-31 12:31:33 Etc/GMT",
        "product_id" : "fimoSuperHR100",
        "original_purchase_date_pst" : "2021-03-31 05:31:33 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1617193893000",
        "purchase_date_pst" : "2021-03-31 05:31:33 America/Los_Angeles",
        "original_purchase_date" : "2021-03-31 12:31:33 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1604037324000",
        "transaction_id" : "600000591529934",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000591529934",
        "purchase_date" : "2020-10-30 05:55:24 Etc/GMT",
        "product_id" : "fimoIFDelta100",
        "original_purchase_date_pst" : "2020-10-29 22:55:24 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1604037324000",
        "purchase_date_pst" : "2020-10-29 22:55:24 America/Los_Angeles",
        "original_purchase_date" : "2020-10-30 05:55:24 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1606476472000",
        "transaction_id" : "600000605105295",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000605105295",
        "purchase_date" : "2020-11-27 11:27:52 Etc/GMT",
        "product_id" : "fimoEternaV500",
        "original_purchase_date_pst" : "2020-11-27 03:27:52 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1606476472000",
        "purchase_date_pst" : "2020-11-27 03:27:52 America/Los_Angeles",
        "original_purchase_date" : "2020-11-27 11:27:52 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540514000",
        "transaction_id" : "600000695825130",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695825130",
        "purchase_date" : "2021-04-27 16:21:54 Etc/GMT",
        "product_id" : "fimoPortra160NC",
        "original_purchase_date_pst" : "2021-04-27 09:21:54 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540514000",
        "purchase_date_pst" : "2021-04-27 09:21:54 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:21:54 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1640740829000",
        "transaction_id" : "600000845339621",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000845339621",
        "purchase_date" : "2021-12-29 01:20:29 Etc/GMT",
        "product_id" : "fimoNewYear2020",
        "original_purchase_date_pst" : "2021-12-28 17:20:29 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1640740829000",
        "purchase_date_pst" : "2021-12-28 17:20:29 America/Los_Angeles",
        "original_purchase_date" : "2021-12-29 01:20:29 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540171000",
        "transaction_id" : "600000695822052",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695822052",
        "purchase_date" : "2021-04-27 16:16:11 Etc/GMT",
        "product_id" : "fimoUnicolor125",
        "original_purchase_date_pst" : "2021-04-27 09:16:11 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540171000",
        "purchase_date_pst" : "2021-04-27 09:16:11 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:16:11 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1619540250000",
        "transaction_id" : "600000695822798",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000695822798",
        "purchase_date" : "2021-04-27 16:17:30 Etc/GMT",
        "product_id" : "fimoCenturia100",
        "original_purchase_date_pst" : "2021-04-27 09:17:30 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1619540250000",
        "purchase_date_pst" : "2021-04-27 09:17:30 America/Los_Angeles",
        "original_purchase_date" : "2021-04-27 16:17:30 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1632134732000",
        "transaction_id" : "600000783498390",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000783498390",
        "purchase_date" : "2021-09-20 10:45:32 Etc/GMT",
        "product_id" : "fimoPortra160VC",
        "original_purchase_date_pst" : "2021-09-20 03:45:32 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1632134732000",
        "purchase_date_pst" : "2021-09-20 03:45:32 America/Los_Angeles",
        "original_purchase_date" : "2021-09-20 10:45:32 Etc/GMT"
      },
      {
        "quantity" : "1",
        "purchase_date_ms" : "1640344725000",
        "transaction_id" : "600000842246059",
        "is_trial_period" : "false",
        "original_transaction_id" : "600000842246059",
        "purchase_date" : "2021-12-24 11:18:45 Etc/GMT",
        "product_id" : "fimoNewYear2021",
        "original_purchase_date_pst" : "2021-12-24 03:18:45 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1640344725000",
        "purchase_date_pst" : "2021-12-24 03:18:45 America/Los_Angeles",
        "original_purchase_date" : "2021-12-24 11:18:45 Etc/GMT"
      }
    ],
    "adam_id" : 1454219307,
    "receipt_creation_date_pst" : "2022-01-21 00:42:07 America/Los_Angeles",
    "request_date" : "2022-01-21 08:58:21 Etc/GMT",
    "request_date_pst" : "2022-01-21 00:58:21 America/Los_Angeles",
    "version_external_identifier" : 845872490,
    "request_date_ms" : "1642755501063",
    "original_purchase_date_pst" : "2020-09-05 21:26:38 America/Los_Angeles",
    "application_version" : "1198",
    "original_purchase_date_ms" : "1599366398000",
    "receipt_creation_date_ms" : "1642754527000",
    "original_application_version" : "159",
    "download_id" : 100059354608023
  },
  "status" : 0,
  "environment" : "Production"
};

$done({body : JSON.stringify(objc)});
