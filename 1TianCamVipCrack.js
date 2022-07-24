/******************************

脚本功能：一甜相机解锁会员
软件版本：2.9.7
下载地址：http://t.cn/A6cA0Q8Y
脚本作者：Hausd0rff
更新时间：2022-07-18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 一甜相机解锁会员
^https?:\/\/m2u-api\.getkwai\.com\/api-server\/api\/v2\/vip\/vipUserInfo url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/1TianCamVipCrack.js

[mitm] 
hostname = m2u-api.getkwai.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "status" : 0,
  "data" : {
    "uidProductInfo" : [
      {
        "expireTime" : 2605102594423,
        "productName" : "VIP会员",
        "productId" : "m2u.vip"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "颅顶",
        "productId" : "m2u.ranialTop"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "头发去油光",
        "productId" : "m2u.hairRemoveOil"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "双眼皮",
        "productId" : "m2u.doubleEyelid"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "轮廓调整",
        "productId" : "m2u.contour"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "三庭比例",
        "productId" : "m2u.ratio"
      },
      {
        "expireTime" : 2605102594423,
        "productName" : "嘟嘟唇",
        "productId" : "m2u.duduLips"
      }
    ],
    "didSubscribeType" : 0,
    "didProductInfo" : [

    ],
    "vipUserRedeemLogInfoList" : [

    ],
    "vipUserProductInfo" : {
      "reBuyPromotionText" : "",
      "promotionTextType" : 1,
      "promotionText" : "",
      "myProducts" : [
        {
          "expireTime" : 2605102594423,
          "productName" : "颅顶",
          "productId" : "m2u.ranialTop"
        },
        {
          "expireTime" : 2605102594423,
          "productName" : "头发去油光",
          "productId" : "m2u.hairRemoveOil"
        },
        {
          "expireTime" : 2605102594423,
          "productName" : "双眼皮",
          "productId" : "m2u.doubleEyelid"
        },
        {
          "expireTime" : 2605102594423,
          "productName" : "轮廓调整",
          "productId" : "m2u.contour"
        },
        {
          "expireTime" : 2605102594423,
          "productName" : "三庭比例",
          "productId" : "m2u.ratio"
        },
        {
          "expireTime" : 2605102594423,
          "productName" : "嘟嘟唇",
          "productId" : "m2u.duduLips"
        }
      ],
      "trailStatus" : 1,
      "expireTime" : 2605102594423,
      "isInExpireRenewDuration" : 0,
      "trailExpireNotify" : 0,
      "subscribeType" : 0,
      "vip" : true
    },
    "uidSubscribeType" : 0
  },
  "extraInfo" : {

  },
  "message" : "SUCCESS",
  "serverTm" : 1658331014453,
  "sign" : "O5vS8VYNMhsAn6JLzy7FNbZ2yeYXf3nNCewijVh13AL9HJB/c7IW6Vn1NzanS+yLdPjvPIoE+wnj2TiM90tnd/VgFjKp79mmwDAyXgQFwM9GIGlwtA1HDfQKhVnximf3kMSh5miSnUS4KCKtJztB2PomShuf8TLaI3/1qxI+mgRJp4GPnJ44SIrwGqcSA5mqug9EWITszUte2LuDlYgLLUwP78/MMDR17IaYLTMOwSF50oXQGvD6NJ+XzuF/tX2qJrBTZR4LVUbsrBMKEbYK7RbEH/57baYJdgrHFx8IgBPvU76sACbdn/XMs6kGW55ZAPiWYbEE4UIEKf0krX9rj2oi5WwU0WUuFxHurRexI5xuTJkrrWH2h8xhvdEg9zfaJQ9+b1/UJInlwSnVPao3lk4bs+n8NuG6pqDYz0saBvFLpdzw28NWlF21xIC6XVcl6TutfDqGaWaQRtjpRV1QP526hKP4odwG9GMdk3V85FXoIX8kWVJZKUkWpfi1F6poN2lroOGM9D5inxzZbN0Ol+sxPdtgCAVb0WWPJxH9EULUl+cE6eOBkFMBvTlss1n+RsZgDrWKzvirTwEdslGI9IJb6uvNpcdbowbBbEVCQVcQpW65x23mBfdUYmQqsVJGqUxpa2aMN9O+kSyUvfzQRFlXAQV6fzmAasQShP94PmODvBtgya3gF4uYPu3qAoNHNbUeKkfWgOiGUO9DGiou6A9+QIlj/JIrFPkzzrOzDQN+40w1xIOXxma+MHOojMPnSsBFeRl7PYlMe/EF7eGJkYJRKD3VWqNkI+vASzKpQrvLGKeD8sqantnj4jovCK76AuS8UwLS5j1oEjced80BDQHAhv9I34nG+ZMXEMaeyKj5bkMDZtFiD/MGbFH8YiGY2m4wShzMiUjZvex5LmA3PnkoA2HwjDh8SuswMeTcMgizQNg9hk/WSb2W4B9dObg3in0b4RMTqDlfV73yFEhmQv/Q7iIvmZgFZ5nJ311hxAIm2QbViWtUY75MWgFHzZrQJMnZwML96x+3IQx5Yf6k/1QvU6VYcXuaZEXd4i1YxnEh3E+M7DshejBw1ScsPfRXo8IufPa0PYPun3GnW3cWV19/ew9YBjKFAl9w8Vlbz6Y5v0mLQK+CqbJnd8/UWSfIWLtVR4ZPPzMv/z/aTCJUhR9MzXh6E5aYYmbA9tTdC+lEcq5hbP3Nh9pTd1Eb2T4oJQLHLzWwwNWV/mrDVU1sGquBBTrc3dLAQx12pw8h6eBB81OLWn2GcOuQ3D9zSilnuAC1fDM/p0+s5FucS5Q38LQcdLnCI0trzl0RuoawkrRFld/lylqK498cmWdX8PkyVzni5pi3pUCqhojGxDHp8/guLvIvs37f0VcOc0hngR3eE5DkwkacLnNs24xOpXZQh0Bs017KakH21wWMgJRH7Epktd7TXm2JDzRD9YK6vo09jTjMcqQs3emruxqbmaLZGLiNaIsPo+gnRqYI8gB45c3zdaAWysFCKkyVVPOYvM4ztrpxQRQpwNzsc1F/mlaDExzIgg36ITJTlhK/JIVIR8QUp9gmaNdf/aLIHpygp9EtJQsYZ/pKV2pedB5bg6nITlH570ErzTNIrEBWVgCLbYgaGc/JstIhnKXu3///2ZYdNh+hsFXPLTcldHBijHh3qFOQgaPjX9JtsHbSHoCIBBHonuKzWC/u9lyrd8VwnnWusokUeKaHLYKZMfcGElqCHx4uu1LnrsaIc6VjYoAb4IhXy25tCex3aDCkSt5iS6AFa7cN9HzqilicNy7w1kTCAQueOBnV0Ra84s3FpWuXeZl11TDBxMT0A/+oIZ8SG1VKVAbI9E31npwdm2D/72pKzcDCqLH23npShiGucjkYr+o+tltyyUdu3633CkHPtnDqM9XfbNKgo/brZjdVgavNSuB3zFAeR9dAS2PR1XYWJDdEPl6OAG6eGqoWUwM4WFC4oYv4tQ+Ige2e5KwxIwsN"
};

body = JSON.stringify(objc);
$done({ 
    body 
});
