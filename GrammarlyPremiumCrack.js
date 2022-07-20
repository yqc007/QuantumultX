/******************************

脚本功能：Grammarly解锁订阅
软件版本：2.2.0
下载地址：http://t.cn/A66x3u4I
脚本作者：Hausd0rff
更新时间：2022-07-16
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > Grammarly解锁订阅
^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/GrammarlyPremiumCrack.js

[mitm] 
hostname = subscription.grammarly.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "isPremium": true,
  "nextPayDate": "Oct 28, 2999 4:56:52 AM",
  "isCancelled": false,
  "isDunning": false,
  "isPaymentMethodFailed": false,
  "isFree": false,
  "canCancelPlanSwitch": false,
  "isFreebie": false,
  "isPremiumConversion": true,
  "isLegacyPayPal": false,
  "isOnTrial": false,
  "currentPlan": {
    "id": 1005,
    "regularPlanId": 1005,
    "title": "Annual",
    "description": "1-year Grammarly Subscription",
    "regularPrice": 144.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 144.0
    },
    "price": 144.0,
    "priceMoney": {
      "currency": "USD",
      "value": 144.0
    },
    "periodMonths": 12,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": false
  },
  "plans": [{
    "id": 1001,
    "regularPlanId": 1001,
    "title": "Monthly",
    "description": "1-month Grammarly Subscription",
    "regularPrice": 30.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 30.0
    },
    "price": 30.0,
    "priceMoney": {
      "currency": "USD",
      "value": 30.0
    },
    "periodMonths": 1,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": false
  }, {
    "id": 1003,
    "regularPlanId": 1003,
    "title": "Quarterly",
    "description": "3-month Grammarly Subscription",
    "regularPrice": 60.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 60.0
    },
    "price": 60.0,
    "priceMoney": {
      "currency": "USD",
      "value": 60.0
    },
    "periodMonths": 3,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": false
  }, {
    "id": 1005,
    "regularPlanId": 1005,
    "title": "Annual",
    "description": "1-year Grammarly Subscription",
    "regularPrice": 144.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 144.0
    },
    "price": 144.0,
    "priceMoney": {
      "currency": "USD",
      "value": 144.0
    },
    "periodMonths": 12,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": false
  }],
  "institutionPlans": [{
    "id": 10200462,
    "regularPlanId": 10200462,
    "title": "Monthly",
    "description": "1-month Grammarly Subscription",
    "regularPrice": 25.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 25.0
    },
    "price": 25.0,
    "priceMoney": {
      "currency": "USD",
      "value": 25.0
    },
    "periodMonths": 1,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true
  }, {
    "id": 10200487,
    "regularPlanId": 10200487,
    "title": "Monthly",
    "description": "1-month Grammarly Subscription",
    "regularPrice": 25.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 25.0
    },
    "price": 25.0,
    "priceMoney": {
      "currency": "USD",
      "value": 25.0
    },
    "periodMonths": 1,
    "hasTrial": true,
    "trialDays": 7,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true
  }, {
    "id": 10200461,
    "regularPlanId": 10200461,
    "title": "Annual",
    "description": "1-year Grammarly Subscription",
    "regularPrice": 180.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 180.0
    },
    "price": 180.0,
    "priceMoney": {
      "currency": "USD",
      "value": 180.0
    },
    "periodMonths": 12,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true
  }, {
    "id": 10200486,
    "regularPlanId": 10200486,
    "title": "Annual",
    "description": "1-year Grammarly Subscription",
    "regularPrice": 180.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 180.0
    },
    "price": 180.0,
    "priceMoney": {
      "currency": "USD",
      "value": 180.0
    },
    "periodMonths": 12,
    "hasTrial": true,
    "trialDays": 7,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true
  }],
  "institutionEduPlans": [{
    "id": 10201059,
    "regularPlanId": 10201059,
    "title": "flat_edu_plan",
    "description": "A plan for EDU with flat pricing per seat.",
    "regularPrice": 50.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 50.0
    },
    "price": 50.0,
    "priceMoney": {
      "currency": "USD",
      "value": 50.0
    },
    "periodMonths": 12,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": false
  }],
  "institutionDynamicPlans": [{
    "id": 10200578,
    "regularPlanId": 10200578,
    "title": "Annual",
    "description": "Annual tiered plan",
    "regularPrice": 150.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 150.0
    },
    "price": 150.0,
    "priceMoney": {
      "currency": "USD",
      "value": 150.0
    },
    "periodMonths": 12,
    "hasTrial": false,
    "trialDays": 0,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true,
    "priceTiers": [{
      "price": 150.0,
      "priceMoney": {
        "currency": "USD",
        "value": 150.0
      },
      "fromSeats": 0,
      "toSeats": 9
    }, {
      "price": 145.0,
      "priceMoney": {
        "currency": "USD",
        "value": 145.0
      },
      "fromSeats": 10,
      "toSeats": 49
    }, {
      "price": 140.0,
      "priceMoney": {
        "currency": "USD",
        "value": 140.0
      },
      "fromSeats": 50,
      "toSeats": 149
    }]
  }, {
    "id": 10200582,
    "regularPlanId": 10200582,
    "title": "Annual",
    "description": "Annual tiered plan",
    "regularPrice": 150.0,
    "regularPriceMoney": {
      "currency": "USD",
      "value": 150.0
    },
    "price": 150.0,
    "priceMoney": {
      "currency": "USD",
      "value": 150.0
    },
    "periodMonths": 12,
    "hasTrial": true,
    "trialDays": 7,
    "firstThreeMonthsPromo": 0,
    "baseInstitutionCampaign": true,
    "priceTiers": [{
      "price": 150.0,
      "priceMoney": {
        "currency": "USD",
        "value": 150.0
      },
      "fromSeats": 0,
      "toSeats": 9
    }, {
      "price": 145.0,
      "priceMoney": {
        "currency": "USD",
        "value": 145.0
      },
      "fromSeats": 10,
      "toSeats": 49
    }, {
      "price": 140.0,
      "priceMoney": {
        "currency": "USD",
        "value": 140.0
      },
      "fromSeats": 50,
      "toSeats": 149
    }]
  }],
  "pricingOptions": {
    "discountSuppressed": false,
    "taxDisplayType": "none",
    "individualSubscriptionExclusivePricingEnabled": false,
    "renewalPriceType": "INCLUSIVE"
  },
  "paymentMethodOptions": {
    "payPalDisabled": false,
    "americanExpressDisabled": false,
    "disabledCardTypes": []
  },
  "paymentMethod": "creditCard",
  "subscriptionPaymentMethods": ["creditCard"],
  "creditCard": {
    "cardType": "Visa"
  },
  "isAppleSubscription": false,
  "isGooglePlaySubscription": false,
  "isSamsungPlan": false,
  "customerSince": "Aug 27, 2020 8:11:05 PM",
  "lastSubscribedDate": "Oct 20, 2021 4:56:55 AM",
  "state": "DEFAULT"
};

body = JSON.stringify(objc);
$done({ 
    body 
});
