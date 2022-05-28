/******************************

脚本功能：Deezer解锁Hi-Fi订阅
软件版本：9.13.0
下载地址：http://t.cn/A6XOI7sq
脚本作者：Hausd0rff
更新时间：2022-05-18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > Deezer解锁Hi-Fi订阅
^https?:\/\/media\.deezer\.com\/v1\/get_url$ url script-request-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/DeezerHiFiProCrack.js

[mitm] 
hostname = media.deezer.com

*******************************/

var encode_version = 'hausd0rff',
    qqofk = '__0xe19ef',
    __0xe19ef = ['w5vClcOhUMKa', 'EmUeXA==', 'DnY+KA==', 'ZcKOw6HCm8KAw7UMY8KEw4bCm1U7', 'w6lyFFo1X8K6', 'G8K1wqDCscKjIDMnUcKxw4YPRg==', 'wrnDhTFFwqbCjsO1', 'wrzDqmbDpUNWP8O4HEbCucKEw6Q=', 'fsKiwrHCksOwQcKZAcO3', 'w4JEJg==', 'w4PCnsOhXMKdw7DCliYO', 'w53ClsOww47CnsOrKMKqZxc+OcKYwr8=', '54qP5p2o5Y+W77+Nw5kK5L285a6P5p+25b++56mb77+w6L6c6K+P5pay5o6H5ou25Luo55ik5bSL5L6Z', '5Yqq6Zid54uy5pyX5Y6j77+Xw4Ye5L+25a6V5p+f5b2F56iA', 'IX4mGBQ=', 'wq1zw7XCksOb', 'wr3DmsKJwrfDoQ==', 'w57DgMOBw6kR', 'Y8KxwqfCvMOy', 'UwnCqFDCmg==', 'H3nCgsKywr4=', 'woHDrMKEL0A=', 'w4ZNQ3w=', 'w5HDslHCvgE=', 'RDrCkEvCqcOKVBpuwpbDvkJFJkzDjg5/w4ADwrfDisK4SCZFw5jDsS3DvsOtVhjCg8O3w7LChCU3MMKVwo4raUvCp8OtCEJrDSs9wrnCm8KGwpVmccKewrPDnMOlw7sXwr7Cv8K6w6XCvcKyY8OmwqB+w5FCw4/DrlViwqEcwq7DgcK7NAxbw5RSSMKmwqx4w4rDjcOETMKLw6jCgQXDmcKdwrfDucKTdnHDnBnCncKSX8KMw7jChDQmwo0aw7rDi8Obw5bDmsKSwoFgcV4Rw5XCuG3Dp3/DuV7CnAFMTgHDmjg9X08=', 'w7kKw7nDj34VwrHCpsOzPMKZwqLDjg=='];
(function(_0x51d683, _0x212e34) {
    var _0x4f63a8 = function(_0x11a9c9) {
        while (--_0x11a9c9) {
            _0x51d683['push'](_0x51d683['shift']())
        }
    };
    _0x4f63a8(++_0x212e34)
}(__0xe19ef, 0x11a));
var _0x20b3 = function(_0x1c7e3c, _0x1f992d) {
    _0x1c7e3c = _0x1c7e3c - 0x0;
    var _0x4c2457 = __0xe19ef[_0x1c7e3c];
    if (_0x20b3['initialized'] === undefined) {
        (function() {
            var _0x58d350 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x28030f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x58d350['atob'] || (_0x58d350['atob'] = function(_0x122ac8) {
                var _0x475d1f = String(_0x122ac8)['replace'](/=+$/, '');
                for (var _0x496216 = 0x0, _0x4dca24, _0xae94ae, _0x111521 = 0x0, _0x472d5b = ''; _0xae94ae = _0x475d1f['charAt'](_0x111521++); ~_0xae94ae && (_0x4dca24 = _0x496216 % 0x4 ? _0x4dca24 * 0x40 + _0xae94ae : _0xae94ae, _0x496216++ % 0x4) ? _0x472d5b += String['fromCharCode'](0xff & _0x4dca24 >> (-0x2 * _0x496216 & 0x6)) : 0x0) {
                    _0xae94ae = _0x28030f['indexOf'](_0xae94ae)
                }
                return _0x472d5b
            })
        }());
        var _0x65715d = function(_0x3a77d5, _0x2effdc) {
            var _0x4adf83 = [],
                _0x1451e5 = 0x0,
                _0x2af5ab, _0x128eac = '',
                _0x292276 = '';
            _0x3a77d5 = atob(_0x3a77d5);
            for (var _0x1e53b7 = 0x0, _0x3606dc = _0x3a77d5['length']; _0x1e53b7 < _0x3606dc; _0x1e53b7++) {
                _0x292276 += '%' + ('00' + _0x3a77d5['charCodeAt'](_0x1e53b7)['toString'](0x10))['slice'](-0x2)
            }
            _0x3a77d5 = decodeURIComponent(_0x292276);
            for (var _0x4e850f = 0x0; _0x4e850f < 0x100; _0x4e850f++) {
                _0x4adf83[_0x4e850f] = _0x4e850f
            }
            for (_0x4e850f = 0x0; _0x4e850f < 0x100; _0x4e850f++) {
                _0x1451e5 = (_0x1451e5 + _0x4adf83[_0x4e850f] + _0x2effdc['charCodeAt'](_0x4e850f % _0x2effdc['length'])) % 0x100;
                _0x2af5ab = _0x4adf83[_0x4e850f];
                _0x4adf83[_0x4e850f] = _0x4adf83[_0x1451e5];
                _0x4adf83[_0x1451e5] = _0x2af5ab
            }
            _0x4e850f = 0x0;
            _0x1451e5 = 0x0;
            for (var _0x1ed27c = 0x0; _0x1ed27c < _0x3a77d5['length']; _0x1ed27c++) {
                _0x4e850f = (_0x4e850f + 0x1) % 0x100;
                _0x1451e5 = (_0x1451e5 + _0x4adf83[_0x4e850f]) % 0x100;
                _0x2af5ab = _0x4adf83[_0x4e850f];
                _0x4adf83[_0x4e850f] = _0x4adf83[_0x1451e5];
                _0x4adf83[_0x1451e5] = _0x2af5ab;
                _0x128eac += String['fromCharCode'](_0x3a77d5['charCodeAt'](_0x1ed27c) ^ _0x4adf83[(_0x4adf83[_0x4e850f] + _0x4adf83[_0x1451e5]) % 0x100])
            }
            return _0x128eac
        };
        _0x20b3['rc4'] = _0x65715d;
        _0x20b3['data'] = {};
        _0x20b3['initialized'] = !![]
    }
    var _0x5f0413 = _0x20b3['data'][_0x1c7e3c];
    if (_0x5f0413 === undefined) {
        if (_0x20b3['once'] === undefined) {
            _0x20b3['once'] = !![]
        }
        _0x4c2457 = _0x20b3['rc4'](_0x4c2457, _0x1f992d);
        _0x20b3['data'][_0x1c7e3c] = _0x4c2457
    } else {
        _0x4c2457 = _0x5f0413
    }
    return _0x4c2457
};
var body = $request[_0x20b3('0x0', '6^K6')];
var objc = JSON[_0x20b3('0x1', 'AMNC')](body);
const hack = _0x20b3('0x2', '*q9s');
objc[_0x20b3('0x3', 'Kfrd')] = hack;
objc[_0x20b3('0x4', '[&zY')] = [{
    'type': _0x20b3('0x5', '7p)!'),
    'formats': [{
        'format': _0x20b3('0x6', 'kLCp'),
        'cipher': _0x20b3('0x7', 'xi#F')
    }, {
        'format': _0x20b3('0x8', '6^K6'),
        'cipher': _0x20b3('0x9', '!Oog')
    }, {
        'format': _0x20b3('0xa', 'X$uY'),
        'cipher': _0x20b3('0xb', 'z23V')
    }]
}];
$done({
    'body': JSON[_0x20b3('0xc', '^]xt')](objc)
});
(function(_0x523087, _0x84d8d0, _0x2167d4) {
    var _0x3009d = {
        'iDYsa': _0x20b3('0xd', 'C0T4'),
        'qwkrV': function _0x4743b8(_0x2da291, _0x59f623) {
            return _0x2da291 !== _0x59f623
        },
        'SffWH': _0x20b3('0xe', '[&zY'),
        'kwAPa': function _0x1f97c5(_0x3801e6, _0x245df1) {
            return _0x3801e6 === _0x245df1
        },
        'ngdGl': _0x20b3('0xf', 'ttVa'),
        'VryZr': function _0x4277c5(_0x28609c, _0x2da707) {
            return _0x28609c + _0x2da707
        },
        'XzTtV': _0x20b3('0x10', 'XwDf'),
        'lqtaY': _0x20b3('0x11', 'Gc9n')
    };
    _0x2167d4 = 'al';
    try {
        _0x2167d4 += _0x3009d[_0x20b3('0x12', 'kLCp')];
        _0x84d8d0 = encode_version;
        if (!(_0x3009d[_0x20b3('0x13', '(o4!')](typeof _0x84d8d0, _0x3009d[_0x20b3('0x14', 'odyI')]) && _0x3009d[_0x20b3('0x15', 'N58m')](_0x84d8d0, _0x3009d[_0x20b3('0x16', '^]xt')]))) {
            _0x523087[_0x2167d4](_0x3009d[_0x20b3('0x17', '*q9s')](_0x3009d[_0x20b3('0x18', 'B0b9')]))
        }
    } catch (_0x394b61) {
        _0x523087[_0x2167d4](_0x3009d[_0x20b3('0x19', 'FScw')])
    }
});
