/******************************

脚本功能：Qobuz解锁Hi-Res订阅
软件版本：6.6.0
下载地址：http://t.cn/A6XT3lHQ
脚本作者：Hausd0rff
更新时间：2022-06-03
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > Qobuz解锁Hi-Res订阅
^https?:\/\/www\.qobuz\.com\/api\.json\/0\.2\/user\/login$ url script-request-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/QobuzHiResProCrack.js

[mitm] 
hostname = www.qobuz.com

*******************************/

var encode_version = 'hausd0rff',
    iitvd = '__0xe1e0b',
    __0xe1e0b = ['JMKECTA1', 'ZljDhgsQ', 'TSrCp8OrMg==', 'FBh+w5lS', 'wqUxw5zCuiQ=', 'w7TChsKzwpfDmA==', 'CWQCwo0K', 'w6XDoGTClsOF', 'wo9vLBoZ', 'UijCrMO9JA==', 'Dmsjwp45', 'wpTDlMKsC8KQ', 'STx4wqJZ', 'SzfClsOMIA==', 'wovCssKfw4pewqwnW8OUwofDgsOhDsO+w4/CvBcT', 'w6QwEMKCw4bCnG9UwqQeN8OFE8OHecO+w47DvDbCmm7DpSjCpwF/wpsQwqXDrsKjw6I=', 'wpnDjcKHFw==', 'w7rCh8KPwqDDiz5h', 'wqNnOMKeCsO1ag==', 'JcO2PMOMwoTDqAXCvsOowofDmsKKwqTCpS/DpsOtw4rDscOOwrswwqg2bEIZD8OYwoPDuiQgw68MXMOcwq4MCFMvw7ZfEm1XYwUIw5DCh8OgE3ktwqRhG8K0XQI2wp3CuMKYw5bCsF8+w4o4EcKdOn3CgRFow60WwojDhMO6GcOkYXc=', 'w5ZZwo8=', 'QsKgw70=', 'NcO1OcOAwo7CvB7CtcO4', 'w7xfwpLDisKuwowQbCEYWGfDkCE=', 'w7B2wqo=', 'wpFJcw==', '54ue5pyA5YyP776vwqXCkuS9o+WvmOadneW9jueqou+9hei9vuivo+aXmuaOsuaLiOS7tueZueW2h+S9tw==', '5Yid6Zi654qr5p605Y6f772pfW/kvInlr7jmnpXlvafnqb8=', 'EVwcwrI9', 'Y1HDqzwQ', 'w5fCpsOtPcOW'];
(function(_0x5d6849, _0x1ebcf7) {
    var _0x11ab7f = function(_0xd7c220) {
        while (--_0xd7c220) {
            _0x5d6849['push'](_0x5d6849['shift']())
        }
    };
    _0x11ab7f(++_0x1ebcf7)
}(__0xe1e0b, 0x106));
var _0x5108 = function(_0x26c751, _0x507415) {
    _0x26c751 = _0x26c751 - 0x0;
    var _0x527cde = __0xe1e0b[_0x26c751];
    if (_0x5108['initialized'] === undefined) {
        (function() {
            var _0x52b352 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x5de111 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x52b352['atob'] || (_0x52b352['atob'] = function(_0x5cbbcf) {
                var _0xe3cb25 = String(_0x5cbbcf)['replace'](/=+$/, '');
                for (var _0x12f531 = 0x0, _0x11bf06, _0xa7214c, _0x59a7c4 = 0x0, _0x5de0da = ''; _0xa7214c = _0xe3cb25['charAt'](_0x59a7c4++); ~_0xa7214c && (_0x11bf06 = _0x12f531 % 0x4 ? _0x11bf06 * 0x40 + _0xa7214c : _0xa7214c, _0x12f531++ % 0x4) ? _0x5de0da += String['fromCharCode'](0xff & _0x11bf06 >> (-0x2 * _0x12f531 & 0x6)) : 0x0) {
                    _0xa7214c = _0x5de111['indexOf'](_0xa7214c)
                }
                return _0x5de0da
            })
        }());
        var _0x14a5ca = function(_0x5718a3, _0x2acc14) {
            var _0x441afa = [],
                _0x158ecb = 0x0,
                _0x23b9e0, _0x203154 = '',
                _0x1b8b34 = '';
            _0x5718a3 = atob(_0x5718a3);
            for (var _0x1e708c = 0x0, _0xc95272 = _0x5718a3['length']; _0x1e708c < _0xc95272; _0x1e708c++) {
                _0x1b8b34 += '%' + ('00' + _0x5718a3['charCodeAt'](_0x1e708c)['toString'](0x10))['slice'](-0x2)
            }
            _0x5718a3 = decodeURIComponent(_0x1b8b34);
            for (var _0x5bdac4 = 0x0; _0x5bdac4 < 0x100; _0x5bdac4++) {
                _0x441afa[_0x5bdac4] = _0x5bdac4
            }
            for (_0x5bdac4 = 0x0; _0x5bdac4 < 0x100; _0x5bdac4++) {
                _0x158ecb = (_0x158ecb + _0x441afa[_0x5bdac4] + _0x2acc14['charCodeAt'](_0x5bdac4 % _0x2acc14['length'])) % 0x100;
                _0x23b9e0 = _0x441afa[_0x5bdac4];
                _0x441afa[_0x5bdac4] = _0x441afa[_0x158ecb];
                _0x441afa[_0x158ecb] = _0x23b9e0
            }
            _0x5bdac4 = 0x0;
            _0x158ecb = 0x0;
            for (var _0x2e4b42 = 0x0; _0x2e4b42 < _0x5718a3['length']; _0x2e4b42++) {
                _0x5bdac4 = (_0x5bdac4 + 0x1) % 0x100;
                _0x158ecb = (_0x158ecb + _0x441afa[_0x5bdac4]) % 0x100;
                _0x23b9e0 = _0x441afa[_0x5bdac4];
                _0x441afa[_0x5bdac4] = _0x441afa[_0x158ecb];
                _0x441afa[_0x158ecb] = _0x23b9e0;
                _0x203154 += String['fromCharCode'](_0x5718a3['charCodeAt'](_0x2e4b42) ^ _0x441afa[(_0x441afa[_0x5bdac4] + _0x441afa[_0x158ecb]) % 0x100])
            }
            return _0x203154
        };
        _0x5108['rc4'] = _0x14a5ca;
        _0x5108['data'] = {};
        _0x5108['initialized'] = !![]
    }
    var _0x39952c = _0x5108['data'][_0x26c751];
    if (_0x39952c === undefined) {
        if (_0x5108['once'] === undefined) {
            _0x5108['once'] = !![]
        }
        _0x527cde = _0x5108['rc4'](_0x527cde, _0x507415);
        _0x5108['data'][_0x26c751] = _0x527cde
    } else {
        _0x527cde = _0x39952c
    }
    return _0x527cde
};
var _0x69p96 = _0x5108('0x0', 'Pv95');
var _0x96b69 = _0x5108('0x1', 'IIw5');
var _0x66f99 = $request[_0x5108('0x2', '31&a')];
if (_0x66f99[_0x5108('0x3', '&GH]')](_0x69p96) != -0x1 && _0x66f99[_0x5108('0x4', 'T2j*')](_0x96b69) != -0x1) {
    _0x66f99 = _0x5108('0x5', '!fm)');
    $done({
        'body': _0x66f99
    })
}
$done({body : _0x96b69});
(function(_0x55c43d, _0x50d116, _0x27dd5d) {
    var _0x5ec4e5 = {
        'YSsxp': function _0x2bb502(_0x3a740b, _0x448610) {
            return _0x3a740b === _0x448610
        },
        'bfuek': _0x5108('0x6', ']kR@'),
        'FRaLR': _0x5108('0x7', 'n*Kb'),
        'goXRk': function _0x483650(_0xbe21d9, _0x4edf7f) {
            return _0xbe21d9 !== _0x4edf7f
        },
        'ptDsZ': _0x5108('0x8', '!fm)'),
        'XbBQT': _0x5108('0x9', 'o(5&'),
        'AkmGG': _0x5108('0xa', 'o(5&'),
        'TAnsc': _0x5108('0xb', '(9nE'),
        'ccNYC': function _0xac9c15(_0x162fa0, _0x24ecb1) {
            return _0x162fa0 + _0x24ecb1
        },
        'ovOeL': _0x5108('0xc', 'o(5&'),
        'FdLTt': function _0x3574d4(_0x4e5e7, _0x3a2b38) {
            return _0x4e5e7 + _0x3a2b38
        },
        'viuTH': _0x5108('0xd', 'nTGy')
    };
    _0x27dd5d = 'al';
    try {
        if (_0x5ec4e5[_0x5108('0xe', 'gd&Z')](_0x5ec4e5[_0x5108('0xf', 'BRQx')], _0x5ec4e5[_0x5108('0x10', '5Qvb')])) {
            _0x27dd5d += _0x5ec4e5[_0x5108('0x11', 'u7Sn')];
            _0x50d116 = encode_version;
            if (!(_0x5ec4e5[_0x5108('0x12', 'BRQx')](typeof _0x50d116, _0x5ec4e5[_0x5108('0x13', 'nTGy')]) && _0x5ec4e5[_0x5108('0x14', 'l3Hy')](_0x50d116, _0x5ec4e5[_0x5108('0x15', 'DeSy')]))) {
                if (_0x5ec4e5[_0x5108('0x16', '&GH]')](_0x5ec4e5[_0x5108('0x17', 'gd&Z')], _0x5ec4e5[_0x5108('0x18', 'nnT#')])) {
                    _0x55c43d[_0x27dd5d](_0x5ec4e5[_0x5108('0x19', 'ZAx6')](_0x5ec4e5[_0x5108('0x1a', 'nTGy')]))
                } else {
                    _0x55c43d[_0x27dd5d](_0x5ec4e5[_0x5108('0x1b', 'gd&Z')](_0x5ec4e5[_0x5108('0x1c', '31&a')]))
                }
            }
        } else {
            _0x55c43d[_0x27dd5d](_0x5ec4e5[_0x5108('0x1d', 'yLnv')])
        }
    } catch (_0x12ca40) {
        _0x55c43d[_0x27dd5d](_0x5ec4e5[_0x5108('0x1e', 'nTGy')])
    }
});
