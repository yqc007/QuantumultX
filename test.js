var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const user = '/v4/User/getUserData';
const info = '/v4/User/getDeviceInfo';
const dish = '/v4/dish/info';

if (url.indexOf(user) != -1) {
    obj.data.data["nickName"] = "浥轻尘𝐶𝑟𝑎𝑐𝑘";
    obj.data.data["vip"] = {"is_vip":2,"vip_msg":"如果给这个加上一个期限我希望是一万年","is_open_vip":1};
    obj.data.data.vip["is_vip"] = 2;
    obj.data.data["headPortraitPath"] = "https:\/\/s3.cdn.xiangha.com\/imgs\/202009\/1214\/5f5c6d7919847.jpeg\/MHgw.webp";
    body = JSON.stringify(obj);
}
if (url.indexOf(info) != -1) {
    obj.data["is_vip"] = 2;
    body = JSON.stringify(obj);
}
if (url.indexOf(dish) != -1) {
    obj.data["power"] = {};
    obj.data.power.detail.video.common["isShow"] = 2;
    body = JSON.stringify(obj);
}

$done({body});
